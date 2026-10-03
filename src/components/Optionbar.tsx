import { ClipboardPenLine } from "lucide-react";
import Timeselector from "./Timeselector";
import WordSelector from "./WordSelector";
import type {
  WordsOption,
  TestLengthMode,
  TestTypeMode,
  TimeOption,
  ActiveOption,
} from "../types/test";
import type { Dispatch, SetStateAction } from "react";
import TestSelector from "./TestSelector";
import { motion } from "framer-motion";

// All props received from app
interface OptionbarProps {
  words: WordsOption | null;
  setWords: Dispatch<SetStateAction<WordsOption | null>>;
  testLengthMode: TestLengthMode;
  setTestLengthMode: Dispatch<SetStateAction<TestLengthMode>>;
  generateNewTest: (WordCount: WordsOption) => void;
  generateTimeTest: (time: TimeOption) => void;
  testMode: TestTypeMode;
  setTestMode: (testMode: TestTypeMode) => void;
  time: TimeOption;
  // setTime: Dispatch<SetStateAction<TimeOption>>;
  setTestKey: Dispatch<SetStateAction<number>>;
  activeOption: ActiveOption;
  setActiveOption: Dispatch<SetStateAction<ActiveOption>>;
  isCustomOpen: boolean;
  setIsCustomOpen: Dispatch<SetStateAction<boolean>>;
}
// const ButtonEffects = "flex items-center gap-2 text-sm";

export default function Optionbar({
  words,
  setWords,
  testLengthMode,
  setTestLengthMode,
  generateNewTest,
  testMode,
  setTestMode,
  time,
  // setTime,
  setTestKey,
  generateTimeTest,
  activeOption,
  setActiveOption,
  // isCustomOpen,
  setIsCustomOpen,
}: OptionbarProps) {
  //#c9b0a6
  return (
    <>
      <section className="flex items-center justify-between  mt-4 ">
        <div className="h-8 w-[36%] mt-2 px-2 text-[#634e46] text-[14px] font-[Roboto_Mono] font-medium bg-[#bda298] flex items-center justify-center gap-5 mx-auto rounded-2xl">
          {/* Time selector */}
          <Timeselector
            testLengthMode={testLengthMode}
            setTestLengthMode={setTestLengthMode}
            time={time}
            // setTime={setTime}
            setTestKey={setTestKey}
            generateTimeTest={generateTimeTest}
            isActive={activeOption === "length" && testLengthMode === "time"}
            testMode={testMode}
            setTestMode={setTestMode}
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />

          {/* Words select */}
          <WordSelector
            words={words}
            setWords={setWords}
            testLengthMode={testLengthMode}
            setTestLengthMode={setTestLengthMode}
            generateNewTest={generateNewTest}
            isActive={activeOption === "length" && testLengthMode === "words"}
            testMode={testMode}
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />

          {/* Test type select */}
          <TestSelector
            testMode={testMode}
            setTestMode={setTestMode}
            isActive={activeOption === "test" && testMode !== "normal"}
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />

          {/* Custom test */}
          <button
            onClick={() => {
              setActiveOption("custom");
              setIsCustomOpen(true);
            }}
            className={`relative z-10 flex items-center gap-1.5 rounded-2xl px-6 py-1 transition-colors ${
              activeOption === "custom"
                ? "text-[#33241e] hover:cursor-pointer"
                : "hover:scale-95 hover:cursor-pointer"
            }`}
          >
            {activeOption === "custom" && (
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
            <span className="relative z-10 flex items-center gap-2">
              <ClipboardPenLine size={16} />
              Custom
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
