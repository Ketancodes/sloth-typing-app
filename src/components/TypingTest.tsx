import { RotateCcw } from "lucide-react";
import type { TestLengthMode, WordsOption } from "../types/test";
import { useState } from "react";
import TypingText from "./TypingText";
import Timer from "./Timer";

interface TypingTestProp {
  testLengthMode: TestLengthMode;
  words: WordsOption | null;
  text: string;
  duration: number;
}
export default function TypingTest({
  //   testLengthMode,
  //   words,
  text,
  duration,
}: TypingTestProp) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [mistake, setMistake] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  return (
    <>
      <main className="relative mt-20  w-full font-[Roboto_Mono] flex flex-col gap-8 items-center justify-center ">
        <Timer duration={duration} isStarted={isStarted} />
        <div className="h-38 w-[95%] px-4 py-2 text-[2rem] text-[#856d63] leading-12 overflow-hidden">
          <TypingText
            text={text}
            currentIndex={currentIndex}
            typedText={typedText}
          />
        </div>

        <button>
          <RotateCcw size={24} className="text-[#6d564d] font-semibold" />
        </button>

        {/* invisible input tracking words keys logic */}
        <input
          type="text"
          autoFocus
          className="absolute opacity-0"
          onKeyDown={(event) => {
            const expectedChar = text[currentIndex];

            if (!isStarted) {
              setIsStarted(true);
            }

            if (event.key === "Backspace") {
              setTypedText((prev) => prev.slice(0, -1));
              setCurrentIndex((prev) => Math.max(0, prev - 1));
              return;
            }

            if (event.key.length === 1) {
              setTypedText((prev) => prev + event.key);
              setCurrentIndex((prev) => prev + 1);
              if (event.key !== expectedChar) {
                setMistake((prev) => prev + 1);
              }
            }
          }}
        />
        {mistake}
      </main>
    </>
  );
}
