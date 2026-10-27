import { TextCursor } from "lucide-react";
import { useSettings } from "../../../hooks/useSettings";
import SettingRow from "../components/SettingRow";
import SettingOptions from "../components/SettingsOptions";

export default function TypingExperienceSettings() {
  const { caretStyle, setCaretStyle } = useSettings();

  return (
    <section className="mt-20">
      <h2 className="font-[Courier_Prime] text-2xl font-semibold text-[#806c5f]">
        Typing Experience
      </h2>

      <div className="mt-3 divide-y divide-[#bda69a] border-y border-[#bda69a]">
        <SettingRow
          title="Caret Style"
          description="Choose how the cursor appears while you type."
          icon={<TextCursor size={22} />}
        >
          <SettingOptions
            options={["Line", "Block", "Underline", "Off"]}
            value={
              caretStyle === "line"
                ? "Line"
                : caretStyle === "block"
                  ? "Block"
                  : caretStyle === "underline"
                    ? "Underline"
                    : "Off"
            }
            onChange={(value) =>
              setCaretStyle(
                value === "Line"
                  ? "line"
                  : value === "Block"
                    ? "block"
                    : value === "Underline"
                      ? "underline"
                      : "off",
              )
            }
            layoutId="caret-style"
          />
        </SettingRow>
      </div>
    </section>
  );
}
