// utils/generatePunctuationText.ts

import { words } from "../data/words";
const punctuation = [",", ",", ",", ".", ".", "?", "!"];
const contractions = [
  "it's",
  "don't",
  "can't",
  "won't",
  "you're",
  "they're",
  "isn't",
  "doesn't",
  "didn't",
  "that's",
  "there's",
  "we're",
  "I've",
  "I'll",
];

export default function generatePunctuationText(wordCount: number) {
  const generatedWords: string[] = [];

  for (let i = 0; i < wordCount; i++) {
    let word = words[Math.floor(Math.random() * words.length)];

    const useContraction = Math.random() < 0.1;

    if (useContraction) {
      word = contractions[Math.floor(Math.random() * contractions.length)];
    } else if (Math.random() < 0.25) {
      const mark = punctuation[Math.floor(Math.random() * punctuation.length)];

      word += mark;
    }

    generatedWords.push(word);
  }
  return generatedWords.join(" ");
}
