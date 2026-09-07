import { ClipboardType } from "lucide-react";
import type { TestTypeMode } from "../types/test";
import { useState, type Dispatch, type SetStateAction } from "react";

interface TestModeProp {
  testMode: TestTypeMode;
  setTestMode: Dispatch<SetStateAction<TestTypeMode>>;
}
export default function TestSelector({ testMode, setTestMode }: TestModeProp) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 hover:scale-95 hover:cursor-pointer"
        >
          <ClipboardType size={16} />
          Test
        </button>
        {isOpen && (
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col text-sm items-center gap-2 rounded-xl bg-[#b89c91] px-2.5 py-1.5 shadow-md   before:absolute
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
                setTestMode("normal");
                setIsOpen(false);
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${testMode === "normal" ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              Normal
            </button>
            <button
              onClick={() => {
                setTestMode("punctuation");
                setIsOpen(false);
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${testMode === "punctuation" ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              Punctuation
            </button>
            <button
              onClick={() => {
                setTestMode("numbers");
                setIsOpen(false);
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${testMode === "numbers" ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              Numbers
            </button>
          </div>
        )}
      </div>
    </>
  );
}
