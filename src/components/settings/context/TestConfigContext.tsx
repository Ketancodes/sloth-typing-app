import { createContext } from "react";
import type {
  TestDifficulty,
  TestLengthMode,
  TestTypeMode,
  TimeOption,
  WordsOption,
} from "../../../types/test";

export type TestConfigContextType = {
  testLengthMode: TestLengthMode;
  testMode: TestTypeMode;
  time: TimeOption;
  words: WordsOption | null;
  difficulty: TestDifficulty;

  setTestLengthMode: (mode: TestLengthMode) => void;
  setTestMode: (mode: TestTypeMode) => void;
  setTime: (time: TimeOption) => void;
  setWords: (words: WordsOption | null) => void;
  setDifficulty: (difficulty: TestDifficulty) => void;
};

export const TestConfigContext = createContext<TestConfigContextType | null>(
  null,
);
