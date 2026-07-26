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
    messages: [],
    sendMessage: vi.fn(),
    status: "streaming",
    stop: vi.fn(),
    error: null,
  }),
}));

describe("Chat Streaming State", () => {
  it("shows stop button while AI response is streaming", () => {
    render(<Chat />);

    expect(
      screen.getByRole("button", { name: "Stop" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("SkillBridge AI")
    ).toBeInTheDocument();
  });
});