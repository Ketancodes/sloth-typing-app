import { useEffect, useState } from "react";

interface TimeProps {
  duration: number;
  isStarted: boolean;
}
export default function Timer({ duration, isStarted }: TimeProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (!isStarted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isStarted]);

  return (
    <>
      <div className="absolute right-[7%] -top-9 text-[28px] font-normal text-[#4E3A2B]">
        <p>{timeLeft}</p>
      </div>
    </>
  );
}
