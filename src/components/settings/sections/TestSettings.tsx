import { MdMode } from "react-icons/md";
import SettingRow from "../components/SettingRow";
import SettingCapsule from "../components/SettingCapsule";
import { IoMdTime } from "react-icons/io";
import { BsAlphabet } from "react-icons/bs";
import { ClipboardType, Shapes } from "lucide-react";
import { RotateCcw } from "lucide-react";
import SettingButton from "../components/SettingButton";
import { useSettings } from "../../../hooks/useSettings";
import type { TimeOption, WordsOption } from "../../../types/test";

export default function TestSettings() {
  const {
    defaultMode,
    defaultTime,
    defaultWords,
    defaultTestType,
    defaultDifficulty,
    setDefaultMode,
    setDefaultTime,
    setDefaultWords,
    setDefaultTestType,
    setDefaultDifficulty,
    resetToDefaults,
  } = useSettings();
  return (
    <section>
      <div className="mb-5">
        <h2 className="font-[Courier_Prime] text-3xl font-semibold text-[#49372a]">
          Test
        </h2>
      </div>

      <div className="divide-y divide-[#b89e91]">
        {/* default mode setting */}
        <SettingRow
          icon={<MdMode size={22} />}
          title="Default mode"
          description="Choose the mode Sloth typing starts with in a new session.."
        >
          <SettingCapsule
            layoutId="default-mode"
            options={["Time", "Words"]}
            value={defaultMode === "time" ? "Time" : "Words"}
            onChange={(value) =>
              setDefaultMode(value === "Time" ? "time" : "words")
            }
          />
        </SettingRow>

        {/* time mode setting */}
        <SettingRow
          icon={<IoMdTime size={22} />}
          title="Default time"
          description="Choose the timer used when starting a new Time test."
        >
          <SettingCapsule
            layoutId="default-time"
            options={["15", "30", "60"]}
            value={String(defaultTime)}
            onChange={(value) => setDefaultTime(Number(value) as TimeOption)}
          />
        </SettingRow>

        {/* words mode setting */}
        <SettingRow
          icon={<BsAlphabet size={24} />}
          title="Default words"
          description="Choose the word count used when starting a new Words test."
        >
          <SettingCapsule
            layoutId="default-words"
            options={["15", "30", "50"]}
            value={String(defaultWords)}
            onChange={(value) => setDefaultWords(Number(value) as WordsOption)}
          />
        </SettingRow>

        {/* test type settting */}
        <SettingRow
          icon={<ClipboardType size={20} />}
          title="Default Test type"
          description="Choose the test type Sloth Typing starts with in a new session."
        >
          <SettingCapsule
            layoutId="default-test-type"
            options={["Normal", "Punctuations", "Numbers"]}
            value={
              defaultTestType === "normal"
                ? "Normal"
                : defaultTestType === "punctuation"
                  ? "Punctuations"
                  : "Numbers"
            }
            onChange={(value) => {
              const testTypeMap = {
                Normal: "normal",
                Punctuations: "punctuation",
                Numbers: "numbers",
              } as const;

              setDefaultTestType(
                testTypeMap[value as keyof typeof testTypeMap],
              );
            }}
          />
        </SettingRow>

        {/* test difficulty settting */}
        <SettingRow
          icon={<Shapes size={20} />}
          title="Default Test difficulty"
          description="Choose the difficulty Sloth Typing starts with in a new session."
        >
          <SettingCapsule
            layoutId="default-test-difficulty"
            options={["Normal", "Intermediate", "Advanced"]}
            value={
              defaultDifficulty === "normal"
                ? "Normal"
                : defaultDifficulty === "intermediate"
                  ? "Intermediate"
                  : "Advanced"
            }
            onChange={(value) => {
              const difficultyMap = {
                Normal: "normal",
                Intermediate: "intermediate",
                Advanced: "advanced",
              } as const;

              setDefaultDifficulty(
                difficultyMap[value as keyof typeof difficultyMap],
              );
            }}
          />
        </SettingRow>
        {/* reset test settings */}
        <SettingRow
          icon={<RotateCcw size={20} />}
          title="Set to default"
          description="Restore the original Sloth Typing test settings."
        >
          <SettingButton onClick={resetToDefaults}>
            Set to default
          </SettingButton>{" "}
        </SettingRow>
      </div>
    </section>
  );
}
