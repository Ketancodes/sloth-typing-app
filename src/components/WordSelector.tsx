import { CaseSensitive } from "lucide-react";
import type { WordsOption } from "../types/test";
import React, { useState, type SetStateAction } from "react";
import type { TestLengthMode, ActiveOption, TestTypeMode } from "../types/test";
import type { Dispatch } from "react";
import { motion } from "framer-motion";
import useClickOutside from "../hooks/useClickOutside";

interface WordOptionProp {
  words: WordsOption | null;
  setWords: React.Dispatch<SetStateAction<WordsOption | null>>;
  testLengthMode: TestLengthMode;
  setTestLengthMode: Dispatch<SetStateAction<TestLengthMode>>;
  generateNewTest: (WordCount: WordsOption) => void;
  testMode: TestTypeMode;
  isActive: boolean;
  activeOption: ActiveOption;
  setActiveOption: Dispatch<SetStateAction<ActiveOption>>;
}
export default function WordSelector({
  words,
  testLengthMode,
  setTestLengthMode,
  generateNewTest,
  isActive,
  activeOption,
  setActiveOption,
  testMode,
}: WordOptionProp) {
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
            className="absolute inset-0 rounded-xl bg-[#a98b80]"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 35,
            }}
          />
        )}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setTestLengthMode("words");
            generateNewTest(15);
            setActiveOption("length");
          }}
          className={`relative z-10 flex items-center gap-1.5 rounded-2xl px-6 py-1 transition-colors ${
            activeOption === "length" && testLengthMode === "words"
              ? "text-[#33241e] bg-[#a98b80] hover:cursor-pointer"
              : "hover:scale-95 hover:cursor-pointer"
          }`}
        >
          <CaseSensitive size={18} />
          Words
        </button>
        {isOpen && testLengthMode === "words" && (
          <div
            className="absolute top-9.5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-xl bg-[#b89c91] px-2.5 py-1.5 shadow-md   before:absolute
    before:-top-1.5
    before:left-1/2
    before:-translate-x-1/2
    before:border-l-8
    before:border-r-8
    before:border-b-8
    before:border-l-transparent
    before:border-r-transparent
    before:border-b-[#b89c91] "
          >
            <button
              onClick={() => {
                generateNewTest(15);
                setIsOpen(false);
                setActiveOption(testMode === "normal" ? "length" : "test");
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${words === 15 ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              {" "}
              15
            </button>
            <button
              onClick={() => {
                generateNewTest(30);
                setIsOpen(false);
                setActiveOption(testMode === "normal" ? "length" : "test");
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${words === 30 ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              {" "}
              30
            </button>
            <button
              onClick={() => {
                generateNewTest(50);
                setIsOpen(false);
                setActiveOption(testMode === "normal" ? "length" : "test");
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${words === 50 ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              {" "}
              50
            </button>
          </div>
        )}
      </div>
    </>
  );
}
