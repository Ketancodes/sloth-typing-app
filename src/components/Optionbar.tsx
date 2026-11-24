import { ClipboardPenLine, SlidersHorizontal, ChevronDown } from "lucide-react";
import Timeselector from "./Timeselector";
import WordSelector from "./WordSelector";
import type {
  WordsOption,
  TestLengthMode,
  TestTypeMode,
  TimeOption,
  ActiveOption,
} from "../types/test";
import { useState, type Dispatch, type SetStateAction } from "react";
import TestSelector from "./TestSelector";
import MobileTestSettings from "./settings/components/MobileTestSettings";
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
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <section className="flex items-center max-md:justify-center justify-between max-lg:mt-12  mt-4 ">
        <div className="max-md:hidden h-8  w-fit  mt-2 max-lg:px-0 md:max-w-[calc(100vw-2rem)] text-(--option-bar-text) text-[14px] font-[Roboto_Mono] font-medium bg-(--option-bar-background) flex items-center justify-center sm:gap-2 gap-5 mx-auto rounded-2xl">
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
            className={`relative z-10 flex items-center gap-1.5 rounded-2xl sm:px-3 px-6 py-1 transition-colors ${
              activeOption === "custom"
                ? "text-(--option-active-text) hover:cursor-pointer"
                : "hover:scale-95 hover:cursor-pointer"
            }`}
          >
            {activeOption === "custom" && (
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
            <span className="relative z-10 flex items-center gap-2">
              <ClipboardPenLine size={16} />
              Custom
            </span>
          </button>
        </div>

        {/* Mobile Test Settings */}
        <div className="md:hidden mt-12 flex justify-center">
          <button
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            className="flex items-center justify-center gap-2 rounded-2xl px-5 py-2 text-sm font-[Roboto_Mono] font-medium text-(--option-bar-text) bg-(--option-bar-background)"
          >
            <SlidersHorizontal size={16} />
            Test Settings
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isSettingsOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* for mobile dropdown settings */}
        {isSettingsOpen && (
          <MobileTestSettings
            onClose={() => setIsSettingsOpen(false)}
            time={time}
            testMode={testMode}
            generateTimeTest={generateTimeTest}
            setTestLengthMode={setTestLengthMode}
            setTestKey={setTestKey}
            setActiveOption={setActiveOption}
            words={words}
            generateNewTest={generateNewTest}
            testLengthMode={testLengthMode}
            setTestMode={setTestMode}
            setIsCustomOpen={setIsCustomOpen}
          />
        )}
      </section>
    </>
  );
}
