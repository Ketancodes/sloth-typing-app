export default function mapTypedWords(expectedText: string, typedText: string) {
  const expectedWords = expectedText.split(" ");
  const typedWords = typedText.split(" ");

  return expectedWords.map((expectedWord, index) => ({
    expectedWord,
    typedWord: typedWords[index] ?? "",
  }));
}
