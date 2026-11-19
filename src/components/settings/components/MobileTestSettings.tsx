import { X } from "lucide-react";
import type {
  TimeOption,
  TestTypeMode,
  TestLengthMode,
  ActiveOption,
  WordsOption,
} from "../../../types/test";
import type { Dispatch, SetStateAction } from "react";

interface MobileTestSettingsProps {
  onClose: () => void;
  time: TimeOption;
  testMode: TestTypeMode;
  generateTimeTest: (time: TimeOption) => void;
  setTestLengthMode: Dispatch<SetStateAction<TestLengthMode>>;
  setTestKey: Dispatch<SetStateAction<number>>;
  setActiveOption: Dispatch<SetStateAction<ActiveOption>>;
  words: WordsOption | null;
  generateNewTest: (wordCount: WordsOption) => void;
  testLengthMode: TestLengthMode;
  setTestMode: (testMode: TestTypeMode) => void;
  setIsCustomOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileTestSettings({
  onClose,
  time,
  testMode,
  generateTimeTest,
  setTestLengthMode,
  setTestKey,
  setActiveOption,
  words,
  generateNewTest,
  testLengthMode,
  setTestMode,
  setIsCustomOpen,
}: MobileTestSettingsProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#33241e]/25 backdrop-blur-md p-4">
      {/* Modal */}
      <div className="relative w-full max-w-md max-h-[85vh] overflow-y-auto rounded-2xl border border-(--option-bar-background) bg-(--surface) p-5 shadow-lg">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-[Roboto_Mono] text-lg font-semibold text-(--text)">
            Test Settings
          </h2>

          <button
            onClick={onClose}
            className="text-(--muted-text) transition-transform hover:scale-90 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Settings content */}
        <div className="flex flex-col gap-5">
          {/* Time */}

          {/* Time */}
          <section>
            <h3 className="mb-3 font-[Roboto_Mono] text-sm font-medium text-(--muted-text)">
              Time
            </h3>

            <div className="flex items-center gap-3">
              {([15, 30, 60] as TimeOption[]).map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setTestLengthMode("time");
                    generateTimeTest(option);
                    setTestKey((prev) => prev + 1);
                    setActiveOption(testMode === "normal" ? "length" : "test");
                    onClose();
                  }}
                  className={`flex-1 rounded-xl py-2.5 font-[Roboto_Mono] text-sm transition-colors cursor-pointer ${
                    time === option
                      ? "bg-(--option-active-background) text-(--option-active-text) font-semibold"
                      : "bg-(--option-bar-background) text-(--option-bar-text) hover:opacity-80"
                  }`}
                >
                  {option}s
                </button>
              ))}
            </div>
          </section>

          {/* Words */}
          {/* Words */}
          <section>
            <h3 className="mb-3 font-[Roboto_Mono] text-sm font-medium text-(--muted-text)">
              Words
            </h3>

            <div className="flex items-center gap-3">
              {([15, 30, 50] as WordsOption[]).map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setTestLengthMode("words");
                    generateNewTest(option);
                    setActiveOption(testMode === "normal" ? "length" : "test");
                    onClose();
                  }}
                  className={`flex-1 rounded-xl py-2.5 font-[Roboto_Mono] text-sm transition-colors cursor-pointer ${
                    words === option && testLengthMode === "words"
                      ? "bg-(--option-active-background) text-(--option-active-text) font-semibold"
                      : "bg-(--option-bar-background) text-(--option-bar-text) hover:opacity-80"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>

          {/* Test Type */}
          {/* Test Type */}
          <section>
            <h3 className="mb-3 font-[Roboto_Mono] text-sm font-medium text-(--muted-text)">
              Test Type
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              {(["normal", "punctuation", "numbers"] as TestTypeMode[]).map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setTestMode(option);
                      setActiveOption(option === "normal" ? "length" : "test");
                      onClose();
                    }}
                    className={`flex-1 rounded-xl px-3 py-2.5 font-[Roboto_Mono] text-sm capitalize transition-colors cursor-pointer ${
                      testMode === option
                        ? "bg-(--option-active-background) text-(--option-active-text) font-semibold"
                        : "bg-(--option-bar-background) text-(--option-bar-text) hover:opacity-80"
                    }`}
                  >
                    {option}
                  </button>
                ),
              )}
            </div>
          </section>

          {/* Custom */}
          <section>
            <h3 className="mb-3 font-[Roboto_Mono] text-sm font-medium text-(--muted-text)">
              Custom
            </h3>

            <button
              onClick={() => {
                onClose();
                setIsCustomOpen(true);
              }}
              className="w-full rounded-xl py-2.5 font-[Roboto_Mono] text-sm font-medium
      bg-(--option-bar-background) text-(--option-bar-text)
      hover:opacity-80 transition-opacity cursor-pointer"
            >
              Create Custom Test
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
