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

interface OptionbarProps {
  words: WordsOption | null;
  setWords: Dispatch<SetStateAction<WordsOption | null>>;
  testLengthMode: TestLengthMode;
  setTestLengthMode: Dispatch<SetStateAction<TestLengthMode>>;
  generateNewTest: (WordCount: WordsOption) => void;
  testMode: TestTypeMode;
  setTestMode: Dispatch<SetStateAction<TestTypeMode>>;
  time: number;
  setTime: Dispatch<SetStateAction<TimeOption>>;
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
  setTime,
}: OptionbarProps) {
  return (
    <>
      <section className="flex items-center justify-between  mt-4 ">
        <div className="h-10 w-[40%] mt-2 text-[#72584e] font-[Roboto_Mono]] font-medium bg-[#c9b0a6] flex items-center justify-around mx-auto rounded-xl">
          {/* Time selector */}
          <Timeselector
            testLengthMode={testLengthMode}
            setTestLengthMode={setTestLengthMode}
            time={time}
            setTime={setTime}
          />
          {/* Words select */}
          <WordSelector
            words={words}
            setWords={setWords}
            testLengthMode={testLengthMode}
            setTestLengthMode={setTestLengthMode}
            generateNewTest={generateNewTest}
          />

          {/* Test type select */}
          <TestSelector testMode={testMode} setTestMode={setTestMode} />
          {/* Custom test */}
          <button className={`${ButtonEffects}`}>
            <ClipboardPenLine size={16} />
            Custom
          </button>
        </div>
      </section>
    </>
  );
}
