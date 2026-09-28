import { useState, useEffect } from "react";
import type { TestResult } from "../../types/test";
interface ResultProp {
  result: TestResult;
}
export default function Dashtop({ result }: ResultProp) {
  const [displayWpm, setDisplayWpm] = useState(0); // state for wpm animation
  const [displayAccuracy, setDisplayAccuracy] = useState(0); // state for acc animatino
  const [wpmFinished, setWpmFinished] = useState(false); // state for to store when effect ends

  // effect for running wpm n acc animation
  useEffect(() => {
    const targetWpm = Math.round(result.wpm);
    const targetAccuracy = Math.round(result.accuracy);

    let currentWpm = 0;
    let currentAccuracy = 0;

    const interval = setInterval(() => {
      currentWpm += Math.max(1, Math.ceil(targetWpm / 20));
      currentAccuracy += Math.max(1, Math.ceil(targetAccuracy / 20));

      if (currentWpm >= targetWpm) {
        currentWpm = targetWpm;
        setWpmFinished(true);
      }

      if (currentAccuracy >= targetAccuracy) {
        currentAccuracy = targetAccuracy;
      }

      setDisplayWpm(currentWpm);
      setDisplayAccuracy(currentAccuracy);

      if (currentWpm === targetWpm && currentAccuracy === targetAccuracy) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [result]);
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-start">
          <p className="text-3xl font-normal text-[#72645d] tracking-normal font-mono">
            wpm
          </p>
          <h1
            className={`text-7xl font-semibold text-[#46362b] leading-tight font-mono ${
              wpmFinished ? "animate-[result-pop_600ms_ease-out]" : ""
            }`}
          >
            {displayWpm}
          </h1>
        </div>
        <div>
          <p className="text-3xl font-normal text-[#72645d] tracking-normal font-mono">
            accuracy
          </p>
          <h1 className="text-7xl font-semibold text-[#46362b] leading-tight font-mono">
            {displayAccuracy}%
          </h1>
        </div>
      </div>
    </>
  );
}
