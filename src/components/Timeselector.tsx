import { AlarmClock } from "lucide-react";
import { useState } from "react";
import type { TimeOption } from "../types/test";
import type { TestLengthMode, ActiveOption, TestTypeMode } from "../types/test";
import type { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import useClickOutside from "../hooks/useClickOutside";

// bg-[#a98b80]

interface TimeSelectProp {
  testLengthMode: TestLengthMode;
  setTestLengthMode: Dispatch<SetStateAction<TestLengthMode>>;
  time: TimeOption;
  setTime?: Dispatch<SetStateAction<TimeOption>>;
  setTestKey: Dispatch<SetStateAction<number>>;
  generateTimeTest: (time: TimeOption) => void;
  testMode: TestTypeMode;
  setTestMode: (testMode: TestTypeMode) => void;
  isActive: boolean;
  activeOption: ActiveOption;
  setActiveOption: Dispatch<SetStateAction<ActiveOption>>;
}
export default function Timeselector({
  setTestLengthMode,
  testLengthMode,
  time,
  testMode,
  setTestKey,
  generateTimeTest,
  isActive,
  setActiveOption,
}: TimeSelectProp) {
  const [isOpen, setIsOpen] = useState(false);

  // logic for closing the dropdown on any area click
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
            setTestLengthMode("time");
            generateTimeTest(30);
            setActiveOption("length");
            setTestKey((prev) => prev + 1);
          }}
          // className={` ${testLengthMode === "time" ? "text-[#33241e] flex items-center gap-1.5 hover:scale-95 hover:cursor-pointer" : "flex items-center gap-1.5 hover:scale-95 hover:cursor-pointer"}`}
          className={`relative z-10 flex items-center gap-1.5  rounded-2xl px-6 py-1 transition-colors ${
            testLengthMode === "time"
              ? "text-[#33241e] hover:cursor-pointer "
              : "hover:scale-95 hover:cursor-pointer"
          }`}
        >
          <AlarmClock size={16} />
          Time
        </button>
        {isOpen && testLengthMode === "time" && (
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
                generateTimeTest(15);
                setIsOpen(false);
                setTestKey((prev) => prev + 1);
                setActiveOption(testMode === "normal" ? "length" : "test");
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${time === 15 ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              15
            </button>
            <button
              onClick={() => {
                generateTimeTest(30);
                setIsOpen(false);
                setTestKey((prev) => prev + 1);
                setActiveOption(testMode === "normal" ? "length" : "test");
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${time === 30 ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              30
            </button>
            <button
              onClick={() => {
                generateTimeTest(60);
                setIsOpen(false);
                setTestKey((prev) => prev + 1);
                setActiveOption(testMode === "normal" ? "length" : "test");
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${time === 60 ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              60
            </button>
          </div>
        )}
      </div>
    </>
  );
}
