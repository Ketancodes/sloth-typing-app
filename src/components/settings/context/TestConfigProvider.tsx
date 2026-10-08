import { useState, type ReactNode } from "react";
import type {
  TestDifficulty,
  TestLengthMode,
  TestTypeMode,
  TimeOption,
  WordsOption,
} from "../../../types/test";
import { TestConfigContext } from "./TestConfigContext";

export function TestConfigProvider({ children }: { children: ReactNode }) {
  const [testLengthMode, setTestLengthMode] = useState<TestLengthMode>("time");

  const [testMode, setTestMode] = useState<TestTypeMode>("normal");

  const [time, setTime] = useState<TimeOption>(30);

  const [words, setWords] = useState<WordsOption | null>(30);

  const [difficulty, setDifficulty] = useState<TestDifficulty>("normal");

  return (
    <TestConfigContext.Provider
      value={{
        testLengthMode,
        testMode,
        time,
        words,
        difficulty,
        setTestLengthMode,
        setTestMode,
        setTime,
        setWords,
        setDifficulty,
      }}
    >
      {children}
    </TestConfigContext.Provider>
  );
}
