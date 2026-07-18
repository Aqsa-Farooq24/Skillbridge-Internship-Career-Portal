"use client";

import { useEffect, useRef, useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeModal = () => {
    setIsOpen(false);
    openButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) return;

    // Focus Close button when modal opens
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }

      // Focus Trap
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="mt-6">
      {/* Open Button */}
      <button
        ref={openButtonRef}
        onClick={() => setIsOpen(true)}
        className="rounded-md bg-[#D4AF37] px-5 py-2.5 font-semibold text-black transition duration-300 hover:bg-[#C89B2B]"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="w-[420px] rounded-xl border border-[#D4AF37]/30 bg-[#11263A] p-6 shadow-2xl"
          >
            <h2
              id="modal-title"
              className="text-2xl font-bold text-[#D4AF37]"
            >
              Modal Dialog
            </h2>

            <p className="mt-3 text-gray-300">
              This is a simple accessible modal built with React and
              TypeScript.
            </p>

            <button
              ref={closeButtonRef}
              onClick={closeModal}
              className="mt-6 rounded-md border border-[#D4AF37] px-5 py-2 font-semibold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}