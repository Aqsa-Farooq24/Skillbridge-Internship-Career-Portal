import { streamText, convertToModelMessages, tool } from "ai";
import { z } from "zod";
import { model, SYSTEM_PROMPT } from "@/lib/ai";

export const maxDuration = 30;

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 4000;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !Array.isArray(body.messages)) {
      return new Response("Invalid request", { status: 400 });
    }

    if (body.messages.length > MAX_MESSAGES) {
      return new Response("Too many messages", { status: 400 });
    }

    for (const message of body.messages) {
      if (
        message?.content &&
        typeof message.content === "string" &&
        message.content.length > MAX_MESSAGE_LENGTH
      ) {
        return new Response("Message is too long", { status: 400 });
      }
    }

    const messages = body.messages;

    const result = streamText({
      model,
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(messages),

      tools: {
        scoreResume: tool({
          description: "Analyze a resume for a specific job role.",

          inputSchema: z.object({
            jobRole: z
              .string()
              .min(1)
              .max(200)
              .describe("The job role to evaluate against"),
          }),

          execute: async ({ jobRole }) => {
            console.log("Job Role:", jobRole);

            if (jobRole.toLowerCase().includes("error")) {
              throw new Error("Failed to analyze resume");
            }

            const score = Math.floor(Math.random() * 21) + 80;

            return {
              score,
              strengths: [
                "HTML",
                "CSS",
                "React",
                "Next.js",
              ],
              suggestions: [
                "Learn TypeScript",
                "Improve GitHub portfolio",
                "Add more projects",
              ],
              jobRole,
            };
          },
        }),
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("AI route error:", error);

    return new Response("Unable to process request", {
      status: 500,
    });
  }
}