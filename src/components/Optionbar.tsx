import { ClipboardPenLine } from "lucide-react";
import Timeselector from "./Timeselector";
import WordSelector from "./WordSelector";
import type {
  WordsOption,
  TestLengthMode,
  TestTypeMode,
  TimeOption,
} from "../types/test";
import type { Dispatch, SetStateAction } from "react";
import TestSelector from "./TestSelector";

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
}
const ButtonEffects = "flex items-center gap-2 text-sm";

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
}: OptionbarProps) {
  //#c9b0a6
  return (
    <>
      <section className="flex items-center justify-between  mt-4 ">
        <div className="h-8 w-[34%] mt-2 text-[#72584e] font-[Roboto_Mono]] font-medium bg-[#bda298] flex items-center justify-center gap-5 mx-auto rounded-2xl">
          {/* Time selector */}
          <Timeselector
            testLengthMode={testLengthMode}
            setTestLengthMode={setTestLengthMode}
            time={time}
            // setTime={setTime}
            setTestKey={setTestKey}
            generateTimeTest={generateTimeTest}
            isActive={testLengthMode === "time"}
          />

          {/* Words select */}
          <WordSelector
            words={words}
            setWords={setWords}
            testLengthMode={testLengthMode}
            setTestLengthMode={setTestLengthMode}
            generateNewTest={generateNewTest}
            isActive={testLengthMode === "words"}
          />

          {/* Test type select */}
          <TestSelector testMode={testMode} setTestMode={setTestMode} />

          {/* Custom test */}
          <button
            className={`${ButtonEffects} relative z-10 rounded-xl px-4 py-1.5 hover:scale-95 hover:cursor-pointer`}
          >
            <ClipboardPenLine size={16} />
            Custom
          </button>
        </div>
      </section>
    </>
  );
}
