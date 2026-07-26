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
    status: "ready",
    stop: vi.fn(),
    error: new Error("Something went wrong"),
  }),
}));

describe("Chat Error State", () => {
  it("shows error message and retry button", () => {
    render(<Chat />);

    expect(
      screen.getByText("Something went wrong")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "The last message couldn't be processed. Please try again."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Retry" })
    ).toBeInTheDocument();
  });
});