import { useState, type ReactNode } from "react";

import type {
  TestDifficulty,
  TestLengthMode,
  TestTypeMode,
  TimeOption,
  WordsOption,
} from "../../types/test";
import { SettingsContext } from "./context/settingsContext";

const DEFAULT_SETTINGS = {
  defaultMode: "time" as TestLengthMode,
  defaultTime: 30 as TimeOption,
  defaultWords: 30 as WordsOption,
  defaultTestType: "normal" as TestTypeMode,
  defaultDifficulty: "normal" as TestDifficulty,
};

export function SettingsProvider({ children }: { children: ReactNode }) {
  const saveSettings = (settings: {
    defaultMode: TestLengthMode;
    defaultTime: TimeOption;
    defaultWords: WordsOption;
    defaultTestType: TestTypeMode;
    defaultDifficulty: TestDifficulty;
  }) => {
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

  const setDefaultMode = (mode: TestLengthMode) => {
    setDefaultModeState(mode);

    saveSettings({
      defaultMode: mode,
      defaultTime,
      defaultWords,
      defaultTestType,
      defaultDifficulty,
    });
  };

  const setDefaultTime = (time: TimeOption) => {
    setDefaultTimeState(time);

    saveSettings({
      defaultMode,
      defaultTime: time,
      defaultWords,
      defaultTestType,
      defaultDifficulty,
    });
  };

  const setDefaultWords = (words: WordsOption) => {
    setDefaultWordsState(words);

    saveSettings({
      defaultMode,
      defaultTime,
      defaultWords: words,
      defaultTestType,
      defaultDifficulty,
    });
  };

  const setDefaultTestType = (testType: TestTypeMode) => {
    setDefaultTestTypeState(testType);

    saveSettings({
      defaultMode,
      defaultTime,
      defaultWords,
      defaultTestType: testType,
      defaultDifficulty,
    });
  };

  const setDefaultDifficulty = (difficulty: TestDifficulty) => {
    setDefaultDifficultyState(difficulty);

    saveSettings({
      defaultMode,
      defaultTime,
      defaultWords,
      defaultTestType,
      defaultDifficulty: difficulty,
    });
  };
  const resetToDefaults = () => {
    setDefaultModeState(DEFAULT_SETTINGS.defaultMode);
    setDefaultTimeState(DEFAULT_SETTINGS.defaultTime);
    setDefaultWordsState(DEFAULT_SETTINGS.defaultWords);
    setDefaultTestTypeState(DEFAULT_SETTINGS.defaultTestType);
    setDefaultDifficultyState(DEFAULT_SETTINGS.defaultDifficulty);
    saveSettings(DEFAULT_SETTINGS);
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
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
