import { words } from "../data/words";
export default function generateText(textnum: number): string {
  const generateWords: string[] = [];
  for (let i = 0; i < textnum; i++) {
    const randomWords = Math.floor(Math.random() * words.length);
    generateWords.push(words[randomWords]);
  }

  return generateWords.join(" ");
}
