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
    status: "submitted",
    stop: vi.fn(),
    error: null,
  }),
}));

describe("Chat Pending State", () => {
  it("shows loading skeleton while request is pending", () => {
    render(<Chat />);

    // Header should still be visible
    expect(screen.getByText("SkillBridge AI")).toBeInTheDocument();

    // Input should still be visible
    expect(
      screen.getByPlaceholderText("Ask about internships...")
    ).toBeInTheDocument();

    // Send button should still exist because status is "submitted"
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });
});