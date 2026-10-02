import { useState } from "react";
import { ClipboardPenLine, X } from "lucide-react";
import { motion } from "framer-motion";
import type { TimeOption } from "../types/test";

interface CustomTestConfig {
  text: string;
  time: TimeOption;
}

interface CustomModalProps {
  setIsCustomOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (config: CustomTestConfig) => void;
  onPractice: (config: CustomTestConfig) => void;
  customTest: CustomTestConfig | null;
}

export default function CustomModal({
  setIsCustomOpen,
  onSave,
  onPractice,
  customTest,
}: CustomModalProps) {
  const [customText, setCustomText] = useState("");

  const [time, setTime] = useState<TimeOption>(30);

  const [isTimeOpen, setIsTimeOpen] = useState(false);

  const [isSaved, setIsSaved] = useState(false);

  const wordCount = customText.trim()
    ? customText.trim().split(/\s+/).length
    : 0;

  const isValidText = wordCount >= 15;
  const config: CustomTestConfig = {
    text: customText.trim().replace(/\s+/g, " "),
    time,
  };

  const handleTimeClick = (newTime: TimeOption) => {
    setTime(newTime);
    setIsSaved(false);

    setIsTimeOpen(false);
  };

  const handleSave = () => {
    if (!isValidText) return;

    onSave(config);
    setIsSaved(true);
    setCustomText("");
  };

  const handlePractice = () => {
    if (!customText.trim()) return;

    onPractice(config);
    setIsCustomOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#33241e]/25 backdrop-blur-md"
        onClick={() => setIsCustomOpen(false)}
      />

      {/* Modal */}
      <div className="relative z-10 w-190 rounded-2xl border border-[#a98b80]/40 bg-[#d4bdb3] p-6 shadow-lg">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ClipboardPenLine size={19} className="text-[#72584e]" />

            <h2 className="font-[Roboto_Mono] text-lg font-semibold text-[#33241e]">
              Custom Test
            </h2>
          </div>

          <button
            onClick={() => setIsCustomOpen(false)}
            className="text-[#72584e] transition-transform hover:scale-90 hover:cursor-pointer"
          >
            <X size={19} />
          </button>
        </div>

        {/* Main content */}
        <div className="flex gap-6">
          {/* Left side */}
          <div className="flex w-[68%] flex-col">
            <label className="mb-2 font-[Roboto_Mono] text-sm font-medium text-[#72584e]">
              Enter your text
            </label>

            <textarea
              value={customText}
              onChange={(e) => {
                setCustomText(e.target.value);
                setIsSaved(false);
              }}
              placeholder="Type or paste your text here..."
              className="h-62.5 w-full resize-none rounded-xl border border-[#a98b80]/50 bg-[#c7afa5]/45 p-4 font-[Roboto_Mono] text-sm leading-6 text-[#33241e] outline-none transition-colors placeholder:text-[#72584e]/60 focus:border-[#8f7166]"
            />

            <div className="mt-2 flex items-center justify-between">
              <span className="font-[Roboto_Mono] text-xs text-[#72584e]">
                {wordCount} {wordCount === 1 ? "word" : "words"}
              </span>

              {wordCount > 0 && wordCount < 15 && (
                <span className="font-[Roboto_Mono] text-xs text-[#8f5f52]">
                  Minimum 15 words
                </span>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="flex w-[32%] flex-col gap-4">
            {/* Time */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsTimeOpen((prev) => !prev);
                }}
                className={`relative text-[#33241e] flex w-full items-center justify-between rounded-xl px-4 py-2 font-[Roboto_Mono] text-sm transition-colors 
                
                 hover:cursor-pointer`}
              >
                <motion.div
                  layoutId="custom-length-option"
                  className="absolute inset-0 -z-10 rounded-xl bg-[#a98b80]"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 35,
                  }}
                />

                <span>Time</span>

                <span className="text-xs text-[#72584e]">{time}s</span>
              </button>

              {/* Time options */}
              {isTimeOpen && (
                <div className="mt-1 flex items-center justify-center gap-1 rounded-xl bg-[#c7afa5] p-1">
                  {([15, 30, 60] as TimeOption[]).map((option) => (
                    <button
                      key={option}
                      onClick={() => handleTimeClick(option)}
                      className={`relative rounded-lg px-3 py-1.5 font-[Roboto_Mono] text-xs ${
                        time === option ? "text-[#33241e]" : "text-[#72584e]"
                      } hover:cursor-pointer`}
                    >
                      {time === option && (
                        <motion.div
                          layoutId="custom-time-option"
                          className="absolute inset-0 -z-10 rounded-lg bg-[#bda298]"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 35,
                          }}
                        />
                      )}

                      <span className="relative z-10">{option}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Words */}
            <button
              onClick={() => {
                setIsTimeOpen(false);
              }}
              disabled
              className="flex w-full items-center justify-between rounded-xl px-4 py-2 font-[Roboto_Mono] text-sm text-[#72584e]/50 cursor-not-allowed"
            >
              <span>Words</span>

              <span className="text-xs text-[#72584e]/50">Coming soon</span>
            </button>
          </div>
        </div>

        {/* Bottom actions */}
        {/* <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={handleSave}
            disabled={!isValidText}
            className="rounded-xl border border-[#a98b80]/50 px-5 py-2 font-[Roboto_Mono] text-sm text-[#72584e] transition-all hover:cursor-pointer hover:bg-[#c7afa5] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isSaved ? "Saved" : "Save"}
          </button>

          <button
            onClick={handlePractice}
            disabled={!isValidText || !isSaved}
            className="rounded-xl bg-[#a98b80] px-5 py-2 font-[Roboto_Mono] text-sm text-[#33241e] transition-all hover:scale-[0.98] hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
          >
            Practice
          </button>
          {customTest && !customText && (
            <button
              onClick={() => {
                setCustomText(customTest.text);
                setTime(customTest.time);
                setIsSaved(true);
              }}
              className="rounded-xl bg-[#a98b80] px-5 py-2 font-[Roboto_Mono] text-sm text-[#33241e] transition-all hover:scale-[0.98] hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
            >
              Saved Text
            </button>
          )}
        </div> */}

        <div className="mt-6 flex items-center justify-between">
          <div>
            {customTest && !customText && (
              <button
                onClick={() => {
                  setCustomText(customTest.text);
                  setTime(customTest.time);
                  setIsSaved(true);
                }}
                className="rounded-xl bg-[#a98b80] px-5 py-2 font-[Roboto_Mono] text-sm text-[#33241e] transition-all hover:scale-[0.98] hover:cursor-pointer"
              >
                Saved Text
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              disabled={!isValidText}
              className="rounded-xl border border-[#a98b80]/50 px-5 py-2 font-[Roboto_Mono] text-sm text-[#72584e] transition-all hover:cursor-pointer hover:bg-[#c7afa5] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isSaved ? "Saved" : "Save"}
            </button>

            <button
              onClick={handlePractice}
              disabled={!isValidText || !isSaved}
              className="rounded-xl bg-[#a98b80] px-5 py-2 font-[Roboto_Mono] text-sm text-[#33241e] transition-all hover:scale-[0.98] hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
            >
              Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
