import type { TestResult } from "../../types/test";
import mapTypedWords from "../../utils/mapTypedWords";

interface InputhistoryProps {
  result: TestResult;
}

export default function Inputhistory({ result }: InputhistoryProps) {
  const wordMap = mapTypedWords(result.text, result.typedText);
  const typedWordCount = result.typedText.trim()
    ? result.typedText.trim().split(/\s+/).length
    : 0;

  return (
    //     <div>
    //       {result.text
    //         .slice(0, result.typedText.length)
    //         .split("")
    //         .map((char, index) => {
    //           const status = result.charStatus[index];

    //           return (
    //             <span
    //               key={index}
    //               className={
    //                 status === "correct"
    //                   ? "text-[#352820] font-medium font-[Roboto_Mono]"
    //                   : status === "incorrect"
    //                     ? "text-[#d81e1e] font-[Roboto_Mono] underline "
    //                     : status === "missed"
    //                       ? "text-[#6e5447]"
    //                       : "text-[#6b5247]"
    //               }
    //             >
    //               {char}
    //             </span>
    //           );
    //         })}
    //     </div>
    //   );
    <>
      <div className="flex flex-wrap gap-x-0.5  font-[Roboto_Mono]">
        {wordMap
          .slice(0, typedWordCount)
          .map(({ expectedWord, typedWord }, wordIndex) => {
            const wordStartIndex = wordMap
              .slice(0, wordIndex)
              .reduce((total, word) => total + word.expectedWord.length + 1, 0);

            return (
              <span
                key={wordIndex}
                className="group relative inline-flex rounded-sm border border-transparent px-1 py-0.5 hover:border-[#6d564d] hover:bg-[#d4c4bd]"
              >
                {expectedWord.split("").map((char, charIndex) => {
                  const status = result.charStatus[wordStartIndex + charIndex];

                  return (
                    <span
                      key={charIndex}
                      className={
                        status === "correct"
                          ? "text-[#352820]"
                          : status === "incorrect"
                            ? "text-[#d81e1e] underline"
                            : status === "missed"
                              ? "text-[#6e5447]"
                              : "text-[#6b5247]"
                      }
                    >
                      {char}
                    </span>
                  );
                })}

                <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-[#46362b] px-2 py-1 text-sm text-[#d4c4bd] opacity-0 transition-opacity group-hover:opacity-100">
                  {typedWord || "(skipped)"}
                </span>
              </span>
            );
          })}
      </div>
    </>
  );
}
