interface TypingTextProp {
  text: string;
  currentIndex: number;
  typedText: string;
}
export default function TypingText({
  text,
  currentIndex,
  typedText,
}: TypingTextProp) {
  console.log("TypingText props:", { text, currentIndex, typedText });
  return (
    <>
      <p>
        {text.split("").map((char, index) => {
          const isTyped = index < typedText.length;
          const isCorrect = isTyped && char === typedText[index];

          return (
            <span
              key={index}
              className={
                isTyped
                  ? isCorrect
                    ? "text-[#4E3A2B]"
                    : "text-[#C72121]"
                  : "text-[#856D63]"
              }
            >
              {char}
            </span>
          );
        })}
      </p>
    </>
  );
}
