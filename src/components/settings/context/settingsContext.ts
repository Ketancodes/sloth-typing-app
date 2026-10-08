import { createContext } from "react";
import type {
  TestDifficulty,
  TestLengthMode,
  TestTypeMode,
  TimeOption,
  WordsOption,
} from "../../../types/test";

export type SettingsContextType = {
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
};

export const SettingsContext = createContext<SettingsContextType | null>(null);
