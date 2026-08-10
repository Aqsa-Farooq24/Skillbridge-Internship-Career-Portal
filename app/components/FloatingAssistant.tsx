"use client";

import { useState } from "react";
import Chat from "./chat";
import dynamic from "next/dynamic";

const Robot3D = dynamic(() => import("./Robot3D"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-8 h-8 border-4 border-[#D4C08A] border-t-transparent rounded-full animate-spin"></div>
        </div>
    ),
});


export default function FloatingAssistant() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* AI Assistant Card */}
            {!isOpen && (
                <button
                    type="button"
                    aria-label="AI Assistant"
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 cursor-pointer"
                >
                    <div className="flex items-center gap-3 bg-[#102A3A]/95 border border-[#D4C08A]/30 backdrop-blur-md shadow-2xl rounded-full px-3 md:px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,192,138,0.35)]">

                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-[#081C2B] border border-[#D4C08A]/20 flex items-center justify-center flex-shrink-0">
                            <Robot3D />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[#D4C08A] font-semibold text-sm md:text-base">
                                AI Assistant
                            </span>
                        </div>

                    </div>
                </button>
            )}

            {/* Full Screen Chat */}    
            {isOpen && (
                <div className="fixed inset-0 z-[9999] bg-[#081C2B]">

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4C08A]/20">

                        <div>
                            <h2 className="text-2xl font-bold text-[#D4C08A]">
                                SkillBridge AI Assistant
                            </h2>

                            <p className="text-gray-400 text-sm">
                                Ask anything about internships and careers
                            </p>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-3xl text-white hover:text-[#D4C08A]"
                        >
                            ✕
                        </button>

                    </div>

                    <div className="h-[calc(100vh-80px)]">
                        <Chat />
                    </div>

                </div>
            )}
        </>
    );
}