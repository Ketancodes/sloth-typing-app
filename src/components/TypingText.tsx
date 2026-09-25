import { memo, useEffect, useRef, useState } from "react";
import type { CharStatus } from "../types/test";

interface TypingTextProp {
  text: string;
  currentIndex: number;
  typedText?: string;
  charStatus: CharStatus[];
}
function TypingText({
  text,
  currentIndex,

  charStatus,
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

            const status = charStatus[absoluteIndex];
            const isCurrent = absoluteIndex === currentIndex;

            return (
              <span
                key={index}
                ref={isCurrent ? activeCharRef : null}
                data-index={absoluteIndex}
                className={`relative ${
                  status === "correct"
                    ? "text-[#46362b]"
                    : status === "incorrect"
                      ? "text-[#C72121]"
                      : status === "missed"
                        ? "text-[#c72121]"
                        : "text-[#72645d]"
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
export default memo(TypingText);
