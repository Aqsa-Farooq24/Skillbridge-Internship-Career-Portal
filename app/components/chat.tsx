"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function Chat() {
    const [input, setInput] = useState("");
    const chatEndRef = useRef<HTMLDivElement>(null);

    const { messages, sendMessage, status, stop } = useChat({
        transport: new DefaultChatTransport({
            api: "/api/chat",
        }),
    });

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, status]);


    return (
        <div className="flex flex-col h-[80vh] max-w-4xl mx-auto">

            {/* Chat Header */}
            <div className="mb-4 rounded-xl border border-[#D4C08A]/20 bg-[#0D2433] p-4">

                <div className="flex items-center gap-3">

                    <div className="h-12 w-12 rounded-full bg-[#D4C08A] flex items-center justify-center text-2xl">
                        🤖
                    </div>

                    <div>
                        <h1 className="text-xl font-bold text-[#D4C08A]">
                            SkillBridge AI
                        </h1>

                        <p className="text-sm text-gray-300">
                            Your internship & career assistant
                        </p>
                    </div>


                    <div className="ml-auto flex items-center gap-2 text-sm text-green-400">
                        <span className="h-2 w-2 rounded-full bg-green-400"></span>
                        Online
                    </div>

                </div>

            </div>


            {/* Chat Area */}
            <div className="flex-1 border border-[#D4C08A]/20 rounded-xl p-6 overflow-y-auto bg-[#0D2433]">

                {messages.length === 0 ? (

                    <div className="h-full flex flex-col items-center justify-center text-center">

                        <div className="text-5xl mb-4">
                            🤖
                        </div>

                        <h2 className="text-3xl font-bold text-[#D4C08A] mb-4">
                            Welcome to SkillBridge AI
                        </h2>

                        <p className="text-gray-300 max-w-xl mb-8">
                            Get internship recommendations, resume feedback,
                            interview preparation and career guidance powered by AI.
                        </p>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">

                            <button
                                onClick={() =>
                                    setInput("Suggest frontend internships for me")
                                }
                                className="rounded-xl border border-[#D4C08A]/40 p-4 hover:bg-[#102738] transition text-white"
                            >
                                💼 Frontend Internships
                            </button>


                            <button
                                onClick={() =>
                                    setInput("Review my resume")
                                }
                                className="rounded-xl border border-[#D4C08A]/40 p-4 hover:bg-[#102738] transition text-white"
                            >
                                📄 Resume Review
                            </button>


                            <button
                                onClick={() =>
                                    setInput("Prepare me for an interview")
                                }
                                className="rounded-xl border border-[#D4C08A]/40 p-4 hover:bg-[#102738] transition text-white"
                            >
                                🎤 Interview Prep
                            </button>


                            <button
                                onClick={() =>
                                    setInput("Create a frontend career roadmap")
                                }
                                className="rounded-xl border border-[#D4C08A]/40 p-4 hover:bg-[#102738] transition text-white"
                            >
                                🚀 Career Roadmap
                            </button>

                        </div>

                    </div>


                ) : (

                    <div className="space-y-5">


                        {messages.map((message) => (

                            <div
                                key={message.id}
                                className={`flex items-end gap-2 ${
                                    message.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >


                                {message.role !== "user" && (
                                    <div className="h-9 w-9 rounded-full bg-[#D4C08A] flex items-center justify-center text-lg">
                                        🤖
                                    </div>
                                )}


                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                                        message.role === "user"
                                            ? "bg-[#D4C08A] text-[#081C2B]"
                                            : "bg-[#102738] text-white"
                                    }`}
                                >

                                    {message.parts.map((part, index) =>
                                        part.type === "text" ? (
                                            <p key={index}>
                                                {part.text}
                                            </p>
                                        ) : null
                                    )}

                                </div>


                                {message.role === "user" && (
                                    <div className="h-9 w-9 rounded-full bg-gray-700 flex items-center justify-center text-lg">
                                        👤
                                    </div>
                                )}

                            </div>

                        ))}



                        {status === "streaming" && (

                            <div className="flex items-center gap-2">

                                <div className="h-9 w-9 rounded-full bg-[#D4C08A] flex items-center justify-center">
                                    🤖
                                </div>

                                <div className="bg-[#102738] text-gray-300 rounded-2xl px-4 py-3">

                                    <span>
                                        SkillBridge AI is thinking
                                    </span>

                                    <span className="ml-2 animate-pulse">
                                        ● ● ●
                                    </span>

                                </div>

                            </div>

                        )}


                        <div ref={chatEndRef} />

                    </div>

                )}

            </div>



            {/* Input */}
            <div className="mt-4 flex gap-3">

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && input.trim()) {
                            sendMessage({
                                text: input,
                            });

                            setInput("");
                        }
                    }}
                    type="text"
                    placeholder="Ask about internships..."
                    className="flex-1 rounded-lg border border-[#D4C08A]/40 bg-[#102738] px-4 py-3 text-white outline-none"
                />


                {status === "streaming" ? (

                    <button
                        onClick={() => stop()}
                        className="rounded-lg px-6 py-3 bg-red-500 text-white font-semibold"
                    >
                        Stop
                    </button>

                ) : (

                    <button
                        onClick={() => {

                            if (!input.trim()) return;

                            sendMessage({
                                text: input,
                            });

                            setInput("");

                        }}
                        className="rounded-lg px-6 py-3 bg-[#D4C08A] text-[#081C2B] font-semibold"
                    >
                        Send
                    </button>

                )}

            </div>


        </div>
    );
}