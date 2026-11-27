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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-(--text)/25 backdrop-blur-md"
        onClick={() => setIsCustomOpen(false)}
      />

      {/* Modal */}
      <motion.div
        className="relative z-10 max-sm:w-[95%] max-w-190 max-h-[90dvh] overflow-y-auto rounded-2xl border border-(--border)/40 bg-(--surface) p-6 shadow-lg"
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 25,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {" "}
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ClipboardPenLine size={19} className="text-(--muted-text)" />

            <h2 className="font-[Roboto_Mono] text-lg font-semibold text-(--text)">
              Custom Test
            </h2>
          </div>

          <button
            onClick={() => setIsCustomOpen(false)}
            className="text-(--muted-text) transition-transform hover:scale-90 hover:cursor-pointer"
          >
            <X size={19} />
          </button>
        </div>
        {/* Main content */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,68fr)_minmax(0,32fr)] md:gap-6">
          {/* Left side */}
          <div className="flex flex-col">
            <label className="mb-2 font-[Roboto_Mono] text-sm font-medium text-(--muted-text)">
              Enter your text
            </label>

            <textarea
              value={customText}
              onChange={(e) => {
                setCustomText(e.target.value);
                setIsSaved(false);
              }}
              placeholder="Type or paste your text here..."
              className="h-62.5 w-full resize-none rounded-xl border border-(--border)/50 bg-(--background)/45 p-4 font-[Roboto_Mono] text-sm leading-6 text-(--text) outline-none transition-colors placeholder:text-(--muted-text)/60 focus:border-(--option-bar-background)"
            />

            <div className="mt-2 flex items-center justify-between">
              <span className="font-[Roboto_Mono] text-xs text-(--muted-text)">
                {wordCount} {wordCount === 1 ? "word" : "words"}
              </span>

              {wordCount > 0 && wordCount < 15 && (
                <span className="font-[Roboto_Mono] text-xs text-(--muted-text)">
                  Minimum 15 words
                </span>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-2 gap-3  sm:flex sm:flex-col sm:gap-4">
            {/* Time */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsTimeOpen((prev) => !prev);
                }}
                className={`relative text-(--text) flex w-full items-center justify-between rounded-xl px-4 py-2 font-[Roboto_Mono] text-sm transition-colors 
                
                 hover:cursor-pointer`}
              >
                <motion.div
                  layoutId="custom-length-option"
                  className="absolute inset-0 -z-10 rounded-xl bg-(--option-bar-background)"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 35,
                  }}
                />

                <span>Time</span>

                <span className="text-xs text-(--muted-text)">{time}s</span>
              </button>

              {/* Time options */}
              {isTimeOpen && (
                <div className="mt-1 flex items-center justify-center gap-1 rounded-xl bg-(--dropdown-background) p-1">
                  {([15, 30, 60] as TimeOption[]).map((option) => (
                    <button
                      key={option}
                      onClick={() => handleTimeClick(option)}
                      className={`relative rounded-lg px-3 py-1.5 font-[Roboto_Mono] text-xs ${
                        time === option
                          ? "text-(--dropdown-active-text)"
                          : "text-(--dropdown-text)"
                      } hover:cursor-pointer`}
                    >
                      {time === option && (
                        <motion.div
                          layoutId="custom-time-option"
                          className="absolute inset-0 -z-10 rounded-lg bg-(--option-active-background)"
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
              className="flex w-full items-center justify-between rounded-xl px-4 py-2 font-[Roboto_Mono] text-sm text-(--muted-text)/50 cursor-not-allowed"
            >
              <span>Words</span>

              <span className="text-xs text-(--muted-text)/50">
                Coming soon
              </span>
            </button>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            {customTest && !customText && (
              <button
                onClick={() => {
                  setCustomText(customTest.text);
                  setTime(customTest.time);
                  setIsSaved(true);
                }}
                className="rounded-xl bg-(--option-bar-background) max-[389px]:px-3 max-[389px]:py-1 px-5 py-2 font-[Roboto_Mono] text-sm text-(--text) transition-all hover:scale-[0.98] hover:cursor-pointer"
              >
                Saved Text
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              disabled={!isValidText}
              className="rounded-xl border border-(--border)/50 px-5 py-2 font-[Roboto_Mono] text-sm text-(--button-text) bg-(--button-background) transition-all hover:cursor-pointer hover:bg-(--button-hover) disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isSaved ? "Saved" : "Save"}
            </button>

            <button
              onClick={handlePractice}
              disabled={!isValidText || !isSaved}
              className="rounded-xl bg-(--button-background) px-5 py-2 font-[Roboto_Mono] text-sm text-(--button-text) transition-all hover:scale-[0.98] hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
            >
              Practice
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
