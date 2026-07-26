// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Chat from "./chat";


vi.mock("@ai-sdk/react", () => ({
    useChat: () => ({
        messages: [],
        sendMessage: vi.fn(),
        status: "ready",
        stop: vi.fn(),
        error: null,
    }),
}));


describe("Chat Component", () => {

    it("renders the welcome screen initially", () => {

        render(<Chat />);

        expect(
            screen.getByText("Welcome to SkillBridge AI")
        ).toBeInTheDocument();


        expect(
            screen.getByText(
                "Your internship & career assistant"
            )
        ).toBeInTheDocument();


        expect(
            screen.getByText("Frontend Internships")
        ).toBeInTheDocument();

    });

});