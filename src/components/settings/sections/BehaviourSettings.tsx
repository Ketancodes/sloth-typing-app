import SettingRow from "../components/SettingRow";
import SettingOptions from "../components/SettingsOptions";
import {
  ShieldAlert,
  RotateCcw,
  EyeOff,
  ChartNoAxesCombined,
} from "lucide-react";
import { useSettings } from "../../../hooks/useSettings";

export default function BehaviorSettings() {
  const {
    stopOnError,
    setStopOnError,
    quickRestart,
    setQuickRestart,
    blindMode,
    setBlindMode,
    liveStats,
    setLiveStats,
  } = useSettings();

  return (
    <section className="mt-20">
      <h2 className="font-[Courier_Prime] text-2xl font-semibold text-(--settings-heading)">
        Behavior
      </h2>

      <div className="mt-3 divide-y divide-[#bda69a] border-y border-[#bda69a]">
        <SettingRow
          title="Stop on Error"
          description="Stay on the current character until you type it correctly."
          icon={<ShieldAlert size={22} />}
        >
          <SettingOptions
            options={["Off", "Turn On"]}
            value={stopOnError ? "Turn On" : "Off"}
            onChange={(value) => setStopOnError(value === "Turn On")}
            layoutId="stop-on-error"
          />
        </SettingRow>

        <SettingRow
          title="Quick Restart"
          description="Choose a key to quickly restart the current test."
          icon={<RotateCcw size={22} />}
        >
          <SettingOptions
            options={["Off", "Tab", "Esc"]}
            value={
              quickRestart === "tab"
                ? "Tab"
                : quickRestart === "esc"
                  ? "Esc"
                  : "Off"
            }
            onChange={(value) =>
              setQuickRestart(
                value === "Tab" ? "tab" : value === "Esc" ? "esc" : "off",
              )
            }
            layoutId="quick-restart"
          />
        </SettingRow>

        <SettingRow
          title="Blind Mode"
          description="Hide typing errors while you are taking the test."
          icon={<EyeOff size={22} />}
        >
          <SettingOptions
            options={["Off", "Turn On"]}
            value={blindMode ? "Turn On" : "Off"}
            onChange={(value) => setBlindMode(value === "Turn On")}
            layoutId="blind-mode"
          />
        </SettingRow>

        <SettingRow
          title="Live Stats"
          description="Show your WPM and accuracy while you are typing."
          icon={<ChartNoAxesCombined size={22} />}
        >
          <SettingOptions
            options={["Off", "WPM", "Accuracy", "Both"]}
            value={
              liveStats === "wpm"
                ? "WPM"
                : liveStats === "accuracy"
                  ? "Accuracy"
                  : liveStats === "both"
                    ? "Both"
                    : "Off"
            }
            onChange={(value) =>
              setLiveStats(
                value === "WPM"
                  ? "wpm"
                  : value === "Accuracy"
                    ? "accuracy"
                    : value === "Both"
                      ? "both"
                      : "off",
              )
            }
            layoutId="live-stats"
          />
        </SettingRow>
      </div>
    </section>
  );
}
