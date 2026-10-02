import { words } from "../data/words";
import type { TestTypeMode } from "../types/test";
import generatePunctuationText from "./generatePunctuationText";
import generateNumberText from "./generateNumberText";

export default function generateText(
  textnum: number,
  testMode: TestTypeMode = "normal",
): string {
  if (testMode === "punctuation") {
    return generatePunctuationText(textnum);
  }
  if (testMode === "numbers") {
    return generateNumberText(textnum);
  }
  const generateWords: string[] = [];
  for (let i = 0; i < textnum; i++) {
    const randomWords = Math.floor(Math.random() * words.length);
    generateWords.push(words[randomWords]);
  }

  return generateWords.join(" ");
}
