import { streamText, convertToModelMessages, tool } from "ai";
import { z } from "zod";
import { model, SYSTEM_PROMPT } from "@/lib/ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model,
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),

    tools: {
      scoreResume: tool({
        description: "Analyze a resume for a specific job role.",

        inputSchema: z.object({
          jobRole: z.string().describe("The job role to evaluate against"),
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
}