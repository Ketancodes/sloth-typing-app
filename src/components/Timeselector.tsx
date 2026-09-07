import { AlarmClock } from "lucide-react";
import { useState } from "react";
import type { TimeOption } from "../types/test";
import type { TestLengthMode } from "../types/test";
import type { Dispatch, SetStateAction } from "react";

interface TimeSelectProp {
  testLengthMode?: TestLengthMode;
  setTestLengthMode: Dispatch<SetStateAction<TestLengthMode>>;
}
export default function Timeselector({ setTestLengthMode }: TimeSelectProp) {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<TimeOption>(30);
  return (
    <>
      <div className="relative">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setTestLengthMode("time");
          }}
          className="flex items-center gap-1.5 hover:scale-95 hover:cursor-pointer"
        >
          <AlarmClock size={16} />
          Time
        </button>
        {isOpen && (
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-xl bg-[#b89c91] px-2.5 py-1.5 shadow-md   before:absolute
    before:-top-1.5
    before:left-1/2
    before:-translate-x-1/2
    before:border-l-8
    before:border-r-8
    before:border-b-8
    before:border-l-transparent
    before:border-r-transparent
    before:border-b-[#b89c91] "
          >
            <button
              onClick={() => {
                setTime(15);
                setIsOpen(false);
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${time === 15 ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              15
            </button>
            <button
              onClick={() => {
                setTime(30);
                setIsOpen(false);
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${time === 30 ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              30
            </button>
            <button
              onClick={() => {
                setTime(60);
                setIsOpen(false);
              }}
              className={`px-2 py-1 text-sm hover:text-white hover:cursor-pointer ${time === 60 ? "text-[#473329] font-bold" : "text-[#81675a] "}`}
            >
              60
            </button>
          </div>
        )}
      </div>
    </>
  );
}
