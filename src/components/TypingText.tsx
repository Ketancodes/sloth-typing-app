import { memo, useEffect, useRef, useState } from "react";
import type { CharStatus, ExtraCharacter } from "../types/test";

interface TypingTextProp {
  text: string;
  currentIndex: number;
  typedText?: string;
  charStatus: CharStatus[];
  extraChars: ExtraCharacter[];
}
function TypingText({
  text,
  currentIndex,

  charStatus,
  extraChars,
}: TypingTextProp) {
  const RENDER_WINDOW_SIZE = 300;
  // Line changing whole logic
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const containerRef = useRef<HTMLParagraphElement>(null);
  const activeCharRef = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null); // added for caret
  const blinkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // ref for caret blinking
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
  }, [currentIndex, text.length]);

  // new ref for caret
  useEffect(() => {
    const caret = caretRef.current;
    const activeChar = activeCharRef.current;

    if (!caret || !activeChar) return;

    caret.style.left = `${activeChar.offsetLeft}px`;
    caret.style.top = `${activeChar.offsetTop + 6}px`;
  }, [currentIndex, visibleStartIndex]);

  // effect for caret blinking
  useEffect(() => {
    const caret = caretRef.current;

    if (!caret) return;

    // User started typing again → immediately stop blinking
    caret.classList.remove("animate-blink");

    // Cancel the previous pause timer
    if (blinkTimeoutRef.current) {
      clearTimeout(blinkTimeoutRef.current);
    }

    // Start blinking only after 1 second of inactivity
    blinkTimeoutRef.current = setTimeout(() => {
      caret.classList.add("animate-blink");
    }, 1000);

    return () => {
      if (blinkTimeoutRef.current) {
        clearTimeout(blinkTimeoutRef.current);
      }
    };
  }, [currentIndex]);
  return (
    <>
      <p ref={containerRef} className="relative">
        {text
          .slice(visibleStartIndex, visibleStartIndex + RENDER_WINDOW_SIZE)
          .split("")
          .map((char, index) => {
            // var for extra char behavior
            const absoluteIndex = visibleStartIndex + index;

            const extrasAtIndex = extraChars.filter(
              (extraCharacter) => extraCharacter.anchorIndex === absoluteIndex,
            );
            const wordStart = text.lastIndexOf(" ", absoluteIndex - 1) + 1;

            const wordEndIndex = text.indexOf(" ", absoluteIndex);

            const wordStatusEnd =
              wordEndIndex === -1 ? text.length : wordEndIndex + 1;

            const wordHasError = charStatus
              .slice(wordStart, wordStatusEnd)
              .some((status) => status === "incorrect" || status === "missed");

            const isWordComplete =
              wordEndIndex === -1
                ? currentIndex >= text.length
                : currentIndex > wordEndIndex;

            const shouldUnderline =
              char !== " " && isWordComplete && wordHasError;

            const status = charStatus[absoluteIndex];
            const isCurrent = absoluteIndex === currentIndex;

            return (
              <span
                key={index}
                ref={isCurrent ? activeCharRef : null}
                data-index={absoluteIndex}
                className={`relative ${shouldUnderline ? "underline decoration-[#cf2323] decoration-2 underline-offset-4" : ""} ${
                  status === "correct"
                    ? "text-[#46362b]"
                    : status === "incorrect"
                      ? "text-[#C72121]"
                      : status === "missed"
                        ? "text-[#72645d]"
                        : "text-[#72645d]"
                }`}
              >
                {extrasAtIndex.slice(0, 3).map((extraCharacter, extraIndex) => (
                  <span
                    key={`${absoluteIndex}-${extraIndex}`}
                    className="text-[#C72121]"
                  >
                    {extraCharacter.character}
                  </span>
                ))}

                {extrasAtIndex.length > 3 && (
                  <span className="text-[#C72121]">...</span>
                )}

                {/* {isCurrent && (
                  <span
                    style={{
                      left: `${Math.min(extrasAtIndex.length, 3)}ch`,
                    }}
                    className="
                       absolute
                       top-1.5
                       w-0.75
                       h-[2.2rem]
                       bg-[#8A5A3B]
                       transition-[left]
                       duration-150
                       ease-out
                       animate-blink
                     "
                  />
                )} */}

                {char}
              </span>
            );
          })}
        <span
          ref={caretRef}
          aria-hidden="true"
          className="
                    pointer-events-none
                    absolute
                    top-0
                    left-0
                    w-0.75
                    h-[2.2rem]
                    bg-[#6d4931]
                    transition-[left,top]
                    duration-100
                    ease-out
                    animate-blink
      
                  "
        />
      </p>
    </>
  );
}
export default memo(TypingText);
