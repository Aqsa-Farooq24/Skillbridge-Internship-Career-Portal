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
        role: "user",
        parts: [{ type: "text", text: "Hello AI" }],
      },
      {
        id: "2",
        role: "assistant",
        parts: [{ type: "text", text: "Hi, how can I help?" }],
      },
    ],
    sendMessage: vi.fn(),
    status: "ready",
    stop: vi.fn(),
    error: null,
  }),
}));

describe("Chat Messages", () => {
  it("renders user and assistant messages", () => {
    render(<Chat />);

    expect(screen.getByText("Hello AI")).toBeInTheDocument();
    expect(screen.getByText("Hi, how can I help?")).toBeInTheDocument();
  });
});