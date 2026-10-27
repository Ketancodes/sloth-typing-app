import { useState, type ReactNode } from "react";
import type {
  QuickRestartOption,
  LiveStatsOption,
  ThemeOption,
  CaretStyleOption,
  TypingSoundOption,
} from "./types/Settingstypes";
import type {
  TestDifficulty,
  TestLengthMode,
  TestTypeMode,
  TimeOption,
  WordsOption,
} from "../../types/test";
import { SettingsContext } from "./context/settingsContext";
import type { SettingsContextType } from "./context/settingsContext";

const DEFAULT_SETTINGS = {
  defaultMode: "time" as TestLengthMode,
  defaultTime: 30 as TimeOption,
  defaultWords: 30 as WordsOption,
  defaultTestType: "normal" as TestTypeMode,
  defaultDifficulty: "normal" as TestDifficulty,
  // for theme
  theme: "coffee" as ThemeOption,

  //behaviour related
  stopOnError: false,
  quickRestart: "off" as QuickRestartOption,
  blindMode: false,
  liveStats: "off" as LiveStatsOption,

  // caret related
  caretStyle: "line" as CaretStyleOption,

  // sound
  typingSound: "off" as TypingSoundOption,
};

export function SettingsProvider({ children }: { children: ReactNode }) {
  type SavedSettings = Omit<
    SettingsContextType,
    | "setDefaultMode"
    | "setDefaultTime"
    | "setDefaultWords"
    | "setDefaultTestType"
    | "setDefaultDifficulty"
    | "setStopOnError"
    | "setQuickRestart"
    | "setBlindMode"
    | "setLiveStats"
    | "resetToDefaults"
    | "setTheme"
    | "setCaretStyle"
    | "setTypingSound"
  >;

  const saveSettings = (settings: SavedSettings) => {
    localStorage.setItem("sloth-settings-defaults", JSON.stringify(settings));
  };

  function getSavedSettings() {
    const saved = localStorage.getItem("sloth-settings-defaults");

    if (!saved) {
      return DEFAULT_SETTINGS;
    }

    try {
      return {
        ...DEFAULT_SETTINGS,
        ...JSON.parse(saved),
      };
    } catch {
      return DEFAULT_SETTINGS;
    }
  }
  const savedSettings = getSavedSettings();

  const [defaultMode, setDefaultModeState] = useState<TestLengthMode>(
    savedSettings.defaultMode,
  );

  const [defaultTime, setDefaultTimeState] = useState<TimeOption>(
    savedSettings.defaultTime,
  );

  const [defaultWords, setDefaultWordsState] = useState<WordsOption>(
    savedSettings.defaultWords,
  );

  const [defaultTestType, setDefaultTestTypeState] = useState<TestTypeMode>(
    savedSettings.defaultTestType,
  );

  const [defaultDifficulty, setDefaultDifficultyState] =
    useState<TestDifficulty>(savedSettings.defaultDifficulty);

  // states for behaviour related settings
  const [stopOnError, setStopOnErrorState] = useState<boolean>(
    savedSettings.stopOnError,
  );

  const [quickRestart, setQuickRestartState] = useState<QuickRestartOption>(
    savedSettings.quickRestart,
  );

  const [blindMode, setBlindModeState] = useState<boolean>(
    savedSettings.blindMode,
  );

  const [liveStats, setLiveStatsState] = useState<LiveStatsOption>(
    savedSettings.liveStats,
  );

  const [theme, setThemeState] = useState<ThemeOption>(savedSettings.theme); // state for theme

  const [caretStyle, setCaretStyleState] = useState<CaretStyleOption>(
    savedSettings.caretStyle,
  ); // state for caret

  const [typingSound, setTypingSoundState] = useState<TypingSoundOption>(
    savedSettings.typingSound,
  ); // sound

  const getCurrentSettings = (): SavedSettings => ({
    defaultMode,
    defaultTime,
    defaultWords,
    defaultTestType,
    defaultDifficulty,
    stopOnError,
    quickRestart,
    blindMode,
    liveStats,
    theme,
    caretStyle,
    typingSound,
  });

  const setDefaultMode = (mode: TestLengthMode) => {
    setDefaultModeState(mode);

    saveSettings({
      ...getCurrentSettings(),
      defaultMode: mode,
    });
  };

  const setDefaultTime = (time: TimeOption) => {
    setDefaultTimeState(time);

    saveSettings({
      ...getCurrentSettings(),
      defaultTime: time,
    });
  };

  const setDefaultWords = (words: WordsOption) => {
    setDefaultWordsState(words);

    saveSettings({
      ...getCurrentSettings(),
      defaultWords: words,
    });
  };

  const setDefaultTestType = (testType: TestTypeMode) => {
    setDefaultTestTypeState(testType);

    saveSettings({
      ...getCurrentSettings(),
      defaultTestType: testType,
    });
  };

  const setDefaultDifficulty = (difficulty: TestDifficulty) => {
    setDefaultDifficultyState(difficulty);

    saveSettings({
      ...getCurrentSettings(),
      defaultDifficulty: difficulty,
    });
  };

  // behaviour related setters
  const setStopOnError = (enabled: boolean) => {
    setStopOnErrorState(enabled);

    saveSettings({
      ...getCurrentSettings(),
      stopOnError: enabled,
    });
  };

  const setQuickRestart = (option: QuickRestartOption) => {
    setQuickRestartState(option);

    saveSettings({
      ...getCurrentSettings(),
      quickRestart: option,
    });
  };

  const setBlindMode = (enabled: boolean) => {
    setBlindModeState(enabled);

    saveSettings({
      ...getCurrentSettings(),
      blindMode: enabled,
    });
  };

  const setLiveStats = (option: LiveStatsOption) => {
    setLiveStatsState(option);

    saveSettings({
      ...getCurrentSettings(),
      liveStats: option,
    });
  };

  // setter for theme

  const setTheme = (theme: ThemeOption) => {
    setThemeState(theme);

    saveSettings({
      ...getCurrentSettings(),
      theme,
    });
  };

  // setter for caret
  const setCaretStyle = (style: CaretStyleOption) => {
    setCaretStyleState(style);

    saveSettings({
      ...getCurrentSettings(),
      caretStyle: style,
    });
  };

  // for sound
  const setTypingSound = (value: TypingSoundOption) => {
    setTypingSoundState(value);
    saveSettings({
      ...getCurrentSettings(),
      typingSound: value,
    });
  };

  const resetToDefaults = () => {
    setDefaultModeState(DEFAULT_SETTINGS.defaultMode);
    setDefaultTimeState(DEFAULT_SETTINGS.defaultTime);
    setDefaultWordsState(DEFAULT_SETTINGS.defaultWords);
    setDefaultTestTypeState(DEFAULT_SETTINGS.defaultTestType);
    setDefaultDifficultyState(DEFAULT_SETTINGS.defaultDifficulty);

    setStopOnErrorState(DEFAULT_SETTINGS.stopOnError);
    setQuickRestartState(DEFAULT_SETTINGS.quickRestart);
    setBlindModeState(DEFAULT_SETTINGS.blindMode);
    setLiveStatsState(DEFAULT_SETTINGS.liveStats);
    setTypingSoundState(DEFAULT_SETTINGS.typingSound);

    saveSettings(DEFAULT_SETTINGS);
    setTheme(DEFAULT_SETTINGS.theme);
    setCaretStyleState(DEFAULT_SETTINGS.caretStyle);
  };

  return (
    <SettingsContext.Provider
      value={{
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

        // behaviour related
        stopOnError,
        quickRestart,
        blindMode,
        liveStats,

        setStopOnError,
        setQuickRestart,
        setBlindMode,
        setLiveStats,

        // theme related
        theme,
        setTheme,

        // caret
        caretStyle,
        setCaretStyle,

        // sound
        typingSound,
        setTypingSound,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
