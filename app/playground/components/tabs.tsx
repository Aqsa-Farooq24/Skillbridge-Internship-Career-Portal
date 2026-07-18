"use client";

import { useRef, useState } from "react";

export default function Tabs() {
  const tabs = ["home", "profile", "settings"] as const;

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("home");

  const tabRefs = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let newIndex = index;

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        newIndex = (index + 1) % tabs.length;
        break;

      case "ArrowLeft":
        event.preventDefault();
        newIndex = (index - 1 + tabs.length) % tabs.length;
        break;

      case "Home":
        event.preventDefault();
        newIndex = 0;
        break;

      case "End":
        event.preventDefault();
        newIndex = tabs.length - 1;
        break;

      default:
        return;
    }

    setActiveTab(tabs[newIndex]);
    tabRefs[newIndex].current?.focus();
  };

  return (
    <div className="mt-10">
      <h2 className="mb-5 text-3xl font-bold text-white">
        Tabs Component
      </h2>

      <div role="tablist" className="flex gap-3">
        <button
          ref={tabRefs[0]}
          role="tab"
          aria-selected={activeTab === "home"}
          onClick={() => setActiveTab("home")}
          onKeyDown={(e) => handleKeyDown(e, 0)}
          className={`rounded-md px-5 py-2.5 font-semibold transition ${
            activeTab === "home"
              ? "bg-[#D4AF37] text-black"
              : "bg-[#1B3348] text-white hover:bg-[#27445E]"
          }`}
        >
          Home
        </button>

        <button
          ref={tabRefs[1]}
          role="tab"
          aria-selected={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
          onKeyDown={(e) => handleKeyDown(e, 1)}
          className={`rounded-md px-5 py-2.5 font-semibold transition ${
            activeTab === "profile"
              ? "bg-[#D4AF37] text-black"
              : "bg-[#1B3348] text-white hover:bg-[#27445E]"
          }`}
        >
          Profile
        </button>

        <button
          ref={tabRefs[2]}
          role="tab"
          aria-selected={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
          onKeyDown={(e) => handleKeyDown(e, 2)}
          className={`rounded-md px-5 py-2.5 font-semibold transition ${
            activeTab === "settings"
              ? "bg-[#D4AF37] text-black"
              : "bg-[#1B3348] text-white hover:bg-[#27445E]"
          }`}
        >
          Settings
        </button>
      </div>

      <div
        role="tabpanel"
        className="mt-5 rounded-xl border border-[#D4AF37]/30 bg-[#11263A] p-6 shadow-lg"
      >
        {activeTab === "home" && (
          <div>
            <h3 className="mb-2 text-xl font-semibold text-[#D4AF37]">
              Home
            </h3>
            <p className="text-gray-300">
              Welcome to the Home page. This tab contains the main overview of
              the SkillBridge Accessibility Playground.
            </p>
          </div>
        )}

        {activeTab === "profile" && (
          <div>
            <h3 className="mb-2 text-xl font-semibold text-[#D4AF37]">
              Profile
            </h3>
            <p className="text-gray-300">
              This section displays profile-related information for users using
              the SkillBridge platform.
            </p>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h3 className="mb-2 text-xl font-semibold text-[#D4AF37]">
              Settings
            </h3>
            <p className="text-gray-300">
              Manage your account settings, accessibility preferences, and other
              application options here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}