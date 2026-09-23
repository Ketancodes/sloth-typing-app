import { RotateCcw } from "lucide-react";
import type {
  TestLengthMode,
  WordsOption,
  TestState,
  CharStatus,
  TestResult,
} from "../types/test";
import { useRef, useState } from "react";
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
  const [incorrect, setInCorrect] = useState(0); // state for acc incorrect counting
  const [correct, setCorrect] = useState(0); // state for correct char counting
  const [testState, setTestState] = useState<TestState>("idle"); //state for 3 state updates

  const [missed, setMissed] = useState(0); // state for missed char
  const [extra, setExtra] = useState(0); // state for tarcking extra typed chars
  const [charStatus, setCharStatus] = useState<CharStatus[]>(
    Array(text.length).fill("untyped"),
  ); // state for tracking char status
  const [result, setResult] = useState<TestResult | null>(null); // state for testresult

  const startTime = useRef<number | null>(null); // ref for tracking start time

  // fun for calculating  result of wpm n accuracy
  const calculateResult = (
    finalCorrect: number,
    finalIncorrect: number,
    finalTypedText: string,
  ) => {
    const accuracy =
      finalCorrect + finalIncorrect > 0
        ? (finalCorrect / (finalCorrect + finalIncorrect)) * 100
        : 100;

    let wpm = 0;
    if (startTime.current !== null) {
      const finishTime = Date.now();
      const elapsedTime = finishTime - startTime.current;

      let timeinSeconds;
      if (testLengthMode === "time") {
        timeinSeconds = duration;
      } else {
        timeinSeconds = elapsedTime / 1000;
      }
      wpm = finalTypedText.length / 5 / (timeinSeconds / 60);
    }
    console.log("INSIDE calculateResult:", {
      accuracy,
      wpm,
      correct: finalCorrect,
      incorrect: finalIncorrect,
      missed,
      extra,
    });
    return {
      accuracy,
      wpm,
      correct: finalCorrect,
      incorrect: finalIncorrect,
      missed,
      extra,
    };
  };

  // fun for cal/storing correct/incor/typedtext
  const finishTest = (
    finalCorrect: number,
    finalIncorrect: number,
    finalTypedText: string,
  ) => {
    const result: TestResult = calculateResult(
      finalCorrect,
      finalIncorrect,
      finalTypedText,
    );
    console.log("FINAL RESULT:", {
      wpm: result.wpm,
      accuracy: result.accuracy,
      correct: finalCorrect,
      incorrect: finalIncorrect,
    });
    setResult(result);
    setTestState("finished");
  };

  return (
    <>
      <main className="relative mt-20 w-full font-[Roboto_Mono] flex flex-col gap-10 items-center justify-center">
        {testState === "finished" && result ? (
          <Dashboard charStatus={charStatus} result={result} />
        ) : (
          <>
            {testLengthMode === "time" && (
              <Timer
                duration={duration}
                testState={testState}
                onTimeUp={() => {
                  finishTest(correct, incorrect, typedText);
                }}
              />
            )}
            <div className="h-38 w-[95%] px-4 py-2 text-[2rem] text-[#856d63] leading-12 overflow-hidden">
              <TypingText
                text={text}
                currentIndex={currentIndex}
                typedText={typedText}
                charStatus={charStatus}
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

                // only space can move to next word
                if (
                  currentIndex < text.length &&
                  text[currentIndex] === " " &&
                  event.key !== " "
                ) {
                  setExtra((prev) => prev + 1);
                  setInCorrect((prev) => prev + 1);
                  return;
                }

                // missed space handling
                if (event.key === " ") {
                  // preventing space on word
                  if (currentIndex === 0 || text[currentIndex - 1] === " ") {
                    return;
                  }
                  //space is a expected char
                  if (text[currentIndex] === " ") {
                    setCorrect((prev) => prev + 1);
                  } else {
                    setInCorrect((prev) => prev + 1);
                  }

                  const nextSpaceIndex = text.indexOf(" ", currentIndex);

                  if (nextSpaceIndex !== -1) {
                    // mark characters skipped in the current word as missed
                    const missedCount = nextSpaceIndex - currentIndex;
                    setMissed((prev) => prev + missedCount);
                    setCharStatus((prev) => {
                      const updated = [...prev];

                      for (let i = currentIndex; i < nextSpaceIndex; i++) {
                        if (updated[i] === "untyped") {
                          updated[i] = "missed";
                        }
                      }

                      return updated;
                    });

                    // Space itself was typed, so keep it in typedText
                    setTypedText((prev) => prev + " ");

                    // Jump to first character of next word
                    setCurrentIndex(nextSpaceIndex + 1);
                  }

                  return;
                }

                // when user types the first char
                if (event.key.length === 1) {
                  // check for extra typed chars
                  if (currentIndex >= text.length) {
                    setExtra((prev) => prev + 1);
                    return;
                  }
                  const isCorrect = event.key === expectedChar;

                  const finalCorrect = isCorrect ? correct + 1 : correct;
                  const finalIncorrect = isCorrect ? incorrect : incorrect + 1;
                  const finalTypedText = typedText + event.key;

                  // tracking start time
                  if (testState === "idle") {
                    setTestState("running");
                    startTime.current = Date.now();
                  }

                  setTypedText((prev) => prev + event.key); // means take everything until typed words + add current typed char
                  setCurrentIndex((prev) => {
                    const nextIndex = prev + 1;

                    return nextIndex;
                  });

                  // correct / incorrect  counting condition

                  if (event.key === expectedChar) {
                    // correct
                    setCorrect((prev) => prev + 1);
                    setCharStatus((prev) => {
                      const updated = [...prev];
                      updated[currentIndex] = "correct";
                      return updated;
                    });
                  } else {
                    // incorrect
                    setMistake((prev) => prev + 1);
                    setInCorrect((prev) => prev + 1);
                    setCharStatus((prev) => {
                      const updated = [...prev];
                      updated[currentIndex] = "incorrect";
                      return updated;
                    });
                  }

                  if (currentIndex + 1 >= text.length) {
                    finishTest(finalCorrect, finalIncorrect, finalTypedText);
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
