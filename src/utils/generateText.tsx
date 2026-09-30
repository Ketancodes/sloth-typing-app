import { words } from "../data/words";
import type { TestTypeMode } from "../types/test";
import generatePunctuationText from "./generatePunctuationText";

export default function generateText(
  textnum: number,
  testMode: TestTypeMode = "normal",
): string {
  if (testMode === "punctuation") {
    return generatePunctuationText(textnum);
  }
  const generateWords: string[] = [];
  for (let i = 0; i < textnum; i++) {
    const randomWords = Math.floor(Math.random() * words.length);
    generateWords.push(words[randomWords]);
  }
  console.log(generateText(30, "punctuation"));

  return generateWords.join(" ");
}
