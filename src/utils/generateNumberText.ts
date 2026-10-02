// utils/generateNumberText.ts

import { words } from "../data/words";
export default function generateNumberText(wordCount: number): string {
  const generatedWords: string[] = [];

  for (let i = 0; i < wordCount; i++) {
    const randomWords = Math.floor(Math.random() * words.length);
    generatedWords.push(words[randomWords]);

    if (Math.random() < 0.2) {
      const number = Math.floor(Math.random() * 1000);
      generatedWords.push(String(number));
    }
  }

  return generatedWords.join(" ");
}
