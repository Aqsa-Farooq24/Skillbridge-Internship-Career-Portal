// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Chat from "./chat";

Object.defineProperty(window.HTMLElement.prototype, "scrollIntoView", {
  value: vi.fn(),
  writable: true,
});

vi.mock("@ai-sdk/react", () => ({
  useChat: () => ({
    messages: [
      {
        id: "1",
        role: "assistant",
        parts: [
          {
            type: "tool-scoreResume",
            state: "output-available",
            output: {
              score: 95,
              strengths: ["HTML", "CSS", "React"],
              suggestions: [
                "Learn TypeScript",
                "Improve GitHub portfolio",
              ],
            },
          },
        ],
      },
    ],
    sendMessage: vi.fn(),
    status: "ready",
    stop: vi.fn(),
    error: null,
  }),
}));

describe("Resume Tool Result", () => {
  it("renders resume score and suggestions", () => {
    render(<Chat />);

    expect(
      screen.getByText("Resume Score")
    ).toBeInTheDocument();

    expect(
      screen.getByText("95%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Strengths")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Suggestions")
    ).toBeInTheDocument();

    expect(
      screen.getByText("HTML")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Learn TypeScript")
    ).toBeInTheDocument();
  });
});