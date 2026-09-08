import { useEffect, useRef, useState } from "react";

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
  // Line changing whole logic
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const containerRef = useRef<HTMLParagraphElement>(null);
  const activeCharRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    const activeChar = activeCharRef.current;
    if (!container || !activeChar) return;
    const characters = Array.from(container.children);
    const activeTop = activeChar.offsetTop;
    const lineTops = [
      ...new Set(characters.map((char) => (char as HTMLElement).offsetTop)),
    ];

    const activeLineIndex = lineTops.indexOf(activeTop);
    if (activeLineIndex >= 2) {
      const secondLineTop = lineTops[1];

      const secondLineStart = characters.find(
        (char) =>
          Math.abs((char as HTMLElement).offsetTop - secondLineTop) <= 2,
      );

      const startIndex = secondLineStart?.getAttribute("data-index");

      if (startIndex) {
        setVisibleStartIndex(Number(startIndex));
      }
    }
  }, [currentIndex]);

  return (
    <>
      <p ref={containerRef}>
        {text
          .slice(visibleStartIndex)
          .split("")
          .map((char, index) => {
            const absoluteIndex = visibleStartIndex + index;
            const isTyped = absoluteIndex < typedText.length;
            const isCorrect = isTyped && char === typedText[absoluteIndex];
            const isCurrent = absoluteIndex === currentIndex;

            return (
              <span
                key={index}
                ref={isCurrent ? activeCharRef : null}
                data-index={absoluteIndex}
                className={`relative ${
                  isTyped
                    ? isCorrect
                      ? "text-[#4E3A2B]"
                      : "text-[#C72121]"
                    : "text-[#856D63]"
                }`}
              >
                {isCurrent && (
                  <span
                    className="
                  absolute
                  left-0
                  top-1.5
                  w-0.75
                  h-[2.2rem]
                  bg-[#8A5A3B]
                  transition-all
                  duration-75
                  animate-blink
                "
                  />
                )}
                {char}
              </span>
            );
          })}
      </p>
    </>
  );
}
