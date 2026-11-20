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
      <div className="mx-auto grid w-fit grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-16 lg:mx-0 lg:grid-cols-[max-content_max-content] lg:gap-x-24">
        <div className="flex flex-col items-center text-center lg:items-start sm:text-left">
          <p className="text-3xl font-normal text-(--dashboard-label) tracking-normal font-mono">
            wpm
          </p>
          <h1
            className={`text-7xl font-semibold text-(--dashboard-stat) leading-tight font-mono ${
              wpmFinished ? "animate-[result-pop_600ms_ease-out]" : ""
            }`}
          >
            {displayWpm}
          </h1>
        </div>
        <div className="flex flex-col items-center text-center lg:items-start sm:text-left">
          {" "}
          <p className="text-3xl font-normal text-(--dashboard-label) tracking-normal font-mono">
            accuracy
          </p>
          <h1 className="text-7xl font-semibold text-(--dashboard-stat) leading-tight font-mono">
            {displayAccuracy}%
          </h1>
        </div>
      </div>
    </>
  );
}
