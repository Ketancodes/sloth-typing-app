import { CaseSensitive } from "lucide-react";
import type { WordsOption } from "../types/test";
import React, { useState, type SetStateAction } from "react";
import type { TestLengthMode } from "../types/test";
import type { Dispatch } from "react";

interface WordOptionProp {
  words: WordsOption | null;
  setWords: React.Dispatch<SetStateAction<WordsOption | null>>;
  testLengthMode: TestLengthMode;
  setTestLengthMode: Dispatch<SetStateAction<TestLengthMode>>;
  generateNewTest: (WordCount: WordsOption) => void;
}
export default function WordSelector({
  words,

  setTestLengthMode,
  generateNewTest,
}: WordOptionProp) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setTestLengthMode("words");
          }}
          className="flex items-center gap-1.5 hover:scale-95 hover:cursor-pointer"
        >
          <CaseSensitive size={18} />
          Words
        </button>
        {isOpen && (
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-xl bg-[#b89c91] px-2.5 py-1.5 shadow-md   before:absolute
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
