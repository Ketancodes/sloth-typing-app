import { createContext } from "react";
import type {
  TestDifficulty,
  TestLengthMode,
  TestTypeMode,
  TimeOption,
  WordsOption,
} from "../../../types/test";
import type {
  QuickRestartOption,
  LiveStatsOption,
  ThemeOption,
} from "../types/Settingstypes";

export type SettingsContextType = {
  // test type related
  defaultMode: TestLengthMode;
  defaultTime: TimeOption;
  defaultWords: WordsOption;
  defaultTestType: TestTypeMode;
  defaultDifficulty: TestDifficulty;

  setDefaultMode: (mode: TestLengthMode) => void;
  setDefaultTime: (time: TimeOption) => void;
  setDefaultWords: (words: WordsOption) => void;
  setDefaultTestType: (testType: TestTypeMode) => void;
  setDefaultDifficulty: (difficulty: TestDifficulty) => void;

  resetToDefaults: () => void;

  // behaviour realted
  stopOnError: boolean;
  quickRestart: QuickRestartOption;
  blindMode: boolean;
  liveStats: LiveStatsOption;

  setStopOnError: (enabled: boolean) => void;
  setQuickRestart: (enabled: QuickRestartOption) => void;
  setBlindMode: (enabled: boolean) => void;
  setLiveStats: (enabled: LiveStatsOption) => void;

  // for theme
  theme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
};

export const SettingsContext = createContext<SettingsContextType | null>(null);
