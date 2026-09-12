import { useEffect, useState } from "react";
import type { TestState } from "../types/test";

interface TimeProps {
  duration: number;
  testState: TestState;
  onTimeUp: () => void;
}
export default function Timer({ duration, testState, onTimeUp }: TimeProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (testState !== "running" || timeLeft <= 0) return; //logic for stoping timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, testState]);

  useEffect(() => {
    if (testState === "running" && timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, testState, onTimeUp]);
  return (
    <>
      <div className="absolute right-[7%] -top-9 text-[28px] font-normal text-[#4E3A2B]">
        <p>{timeLeft}</p>
      </div>
    </>
  );
}
