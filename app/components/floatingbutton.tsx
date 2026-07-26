"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function FloatingAIButton() {
    const router = useRouter();

    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const handleClick = async () => {
        // Spam click prevent
        if (status === "loading") return;

        setStatus("loading");

        // Fake API delay (1.5 sec)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // 80% Success, 20% Error
        const success = Math.random() > 0.2;

        if (success) {
            setStatus("success");

            setTimeout(() => {
                router.push("/chat");
            }, 600);
        } else {
            setStatus("error");

            setTimeout(() => {
                setStatus("idle");
            }, 1500);
        }
    };

    return (
        <motion.button
            onClick={handleClick}
            disabled={status === "loading"}
            className="
fixed
bottom-6
right-6
bg-[#D4C08A]
text-[#081C2B]
px-6
py-3
rounded-full
font-semibold
shadow-lg
hover:scale-105
hover:shadow-xl
active:scale-95
transition-all
duration-200
ease-out
disabled:opacity-70
disabled:cursor-not-allowed
focus:outline-none
focus:ring-4
focus:ring-[#D4C08A]/40
motion-reduce:transform-none
motion-reduce:transition-none
"
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                >
                    {status === "idle" && "Ask AI Assistant"}
                    {status === "loading" && "Opening AI..."}
                    {status === "success" && "Ready"}
                    {status === "error" && "Try Again"}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    );
}