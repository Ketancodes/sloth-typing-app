import { ClipboardType } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

import type { TestTypeMode, ActiveOption } from "../types/test";
import { useState } from "react";
import { motion } from "framer-motion";
import useClickOutside from "../hooks/useClickOutside";

interface TestModeProp {
  testMode: TestTypeMode;
  setTestMode: (testMode: TestTypeMode) => void;
  isActive: boolean;
  activeOption: ActiveOption;
  setActiveOption: Dispatch<SetStateAction<ActiveOption>>;
}
export default function TestSelector({
  testMode,
  setTestMode,
  isActive,
  setActiveOption,
}: TestModeProp) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });
  return (
    <>
      <div className="relative" ref={dropdownRef}>
        {isActive && (
          <motion.div
            layoutId="active-option"
            className="absolute inset-0 rounded-xl bg-(--option-active-background)"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 35,
            }}
          />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-10 flex items-center gap-1.5 rounded-2xl px-6 py-1 ${
            isActive
              ? "text-(--option-active-text) hover:cursor-pointer"
              : "hover:scale-95 hover:cursor-pointer"
          }`}
        >
          <ClipboardType size={16} />
          Test
        </button>
        {isOpen && (
          <div
            className="absolute top-9.5 left-1/2 -translate-x-1/2 flex  text-sm items-center gap-1 rounded-xl bg-(--dropdown-background) px-2.5 py-1.5 shadow-md   before:absolute
    before:-top-1.5
    before:left-1/2
    before:-translate-x-1/2
    before:border-l-8
    before:border-r-8
    before:border-b-8
    before:border-l-transparent
    before:border-r-transparent
    before:border-b-(--dropdown-background) "
          >
            <button
              onClick={() => {
                setTestMode("normal");
                setActiveOption("length");
                setIsOpen(false);
              }}
              className={`px-2 py-1 text-sm hover:text-(--dropdown-hover-text) hover:cursor-pointer ${testMode === "normal" ? "text-(--dropdown-active-text) font-bold" : "text-(--dropdown-text) "}`}
            >
              Normal
            </button>
            <button
              onClick={() => {
                setTestMode("punctuation");
                setActiveOption("test");
                setIsOpen(false);
              }}
              className={`px-2 py-1 text-sm hover:text-(--dropdown-hover-text) hover:cursor-pointer ${testMode === "punctuation" ? "text-(--dropdown-active-text) font-bold" : "text-(--dropdown-text)"}`}
            >
              Punctuation
            </button>
            <button
              onClick={() => {
                setTestMode("numbers");
                setActiveOption("test");
                setIsOpen(false);
              }}
              className={`px-2 py-1 text-sm hover:text-(--dropdown-hover-text) hover:cursor-pointer ${testMode === "numbers" ? "text-(--dropdown-active-text) font-bold" : "text-(--dropdown-text) "}`}
            >
              Numbers
            </button>
          </div>
        )}
      </div>
    </>
  );
}
