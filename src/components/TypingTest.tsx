import { RotateCcw } from "lucide-react";
import type {
  TestLengthMode,
  WordsOption,
  TestState,
  CharStatus,
} from "../types/test";
import { useEffect, useRef, useState } from "react";
import TypingText from "./TypingText";
import Timer from "./Timer";
import Dashboard from "./Dashboard/Dashboard";

interface TypingTestProp {
  testLengthMode: TestLengthMode;
  words: WordsOption | null;
  text: string;
  duration: number;
  resetTest: () => void;
}

export default function TypingTest({
  testLengthMode,
  //   words,
  text,
  duration,
  resetTest,
}: TypingTestProp) {
  const [currentIndex, setCurrentIndex] = useState(0); // state for tracking the index
  const [typedText, setTypedText] = useState(""); //state for tracking types text
  const [mistake, setMistake] = useState(0); // state for counting mistakes
  const [testState, setTestState] = useState<TestState>("idle"); //state for 3 state updates
  const [wpm, setWpm] = useState(0); // state for wpm
  const [extra, setExtra] = useState(0); // state for tarcking extra typed chars
  const [charStatus, setCharStatus] = useState<CharStatus[]>(
    Array(text.length).fill("untyped"),
  ); // state for tracking char status

  const startTime = useRef<number | null>(null); // ref for tracking start time

  // calculate the elapsed time for majorly word mode n time mode
  useEffect(() => {
    if (testState === "finished" && startTime.current !== null) {
      const finishTime = Date.now();
      const elapsedTime = finishTime - startTime.current;

      let timeinSeconds;
      if (testLengthMode === "time") {
        timeinSeconds = duration;
      } else {
        timeinSeconds = elapsedTime / 1000;
      }
      const calculateWpm = typedText.length / 5 / (timeinSeconds / 60);
      setWpm(calculateWpm);
    }
  }, [testState]);

  return (
    <>
      <main className="relative mt-20 w-full font-[Roboto_Mono] flex flex-col gap-10 items-center justify-center">
        {testState === "finished" ? (
          <Dashboard wpm={wpm} />
        ) : (
          <>
            {testLengthMode === "time" && (
              <Timer
                duration={duration}
                testState={testState}
                onTimeUp={() => setTestState("finished")}
              />
            )}
            <div className="h-38 w-[95%] px-4 py-2 text-[2rem] text-[#856d63] leading-12 overflow-hidden">
              <TypingText
                text={text}
                currentIndex={currentIndex}
                typedText={typedText}
              />
            </div>
            <button onClick={resetTest}>
              <RotateCcw
                size={24}
                className="text-[#6d564d] font-semibold hover:cursor-pointer"
              />
            </button>
            {/* invisible input tracking words keys logic */}
            <input
              type="text"
              autoFocus
              className="absolute opacity-0"
              onKeyDown={(event) => {
                const expectedChar = text[currentIndex];

                // when we click the backspace
                if (event.key === "Backspace") {
                  setTypedText((prev) => prev.slice(0, -1));
                  setCurrentIndex((prev) => Math.max(0, prev - 1)); //move the curidx -1back , math.max(0,)coz we dont' want idex to become -ve
                  return;
                }

                // when user types the first char
                if (event.key.length === 1) {
                  // check for extra typed chars
                  if (currentIndex >= text.length) {
                    setExtra((prev) => prev + 1);
                    return;
                  }

                  // tracking start time
                  if (testState === "idle") {
                    setTestState("running");
                    startTime.current = Date.now();
                  }

                  setTypedText((prev) => prev + event.key); // means take everything until typed words + add current typed char
                  setCurrentIndex((prev) => {
                    const nextIndex = prev + 1;

                    // text finish logic
                    if (nextIndex >= text.length) {
                      setTestState("finished");
                    }
                    return nextIndex;
                  });

                  // correct / incorrect  counting condition
                  if (event.key === expectedChar) {
                    // correct
                  } else {
                    // incorrect
                    setMistake((prev) => prev + 1);
                  }
                }
              }}
            />
            {mistake >= 0 ? "" : ""}
          </>
        )}
      </main>
    </>
  );
}
