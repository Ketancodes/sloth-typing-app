export type TimeOption = 15 | 30 | 60; // time option
export type WordsOption = 15 | 30 | 50; // words option
export type TestLengthMode = "time" | "words"; // testlenght mode option
export type TestTypeMode = "normal" | "punctuation" | "numbers"; // testype mode option
export type TestState = "idle" | "running" | "finished"; // test state tradking
export type CharStatus = "correct" | "incorrect" | "missed" | "untyped"; // char status
export type TestResult = {
  // type for result data [dashboard]
  wpm: number;
  rawWpm: number;
  accuracy: number;
  correct: number;
  incorrect: number;
  extra: number;
  missed: number;
  charStatus: CharStatus[];
  totalKeystrokes: number;
  typedText: string;
  text: string;
  chartData: {
    wpm: number[];
    raw: number[];
    err: number[];
  };
};

// type for config data for dashboard test type
export type TestConfig = {
  testLengthMode: TestLengthMode;
  testMode: TestTypeMode;
  timeOption: TimeOption;
  wordOption: WordsOption | null;
};

export type ExtraCharacter = {
  anchorIndex: number;
  character: string;
};

export type ActiveOption = "length" | "test" | "custom";

export type CustomTestConfig = {
  text: string;
  time: TimeOption;
};
