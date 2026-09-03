import { useState } from "react";
import generateText from "../utils/generateText";
import { RotateCcw } from "lucide-react";
export default function TypingTest() {
  const [text, setText] = useState(() => generateText(300));
  return (
    <>
      <main className="mt-20  w-full font-[Roboto_Mono] flex flex-col gap-8 items-center justify-center ">
        <div className="h-38 w-[95%] px-4 py-2 text-[2rem] text-[#856d63] leading-12 overflow-hidden">
          <p>{text}</p>
        </div>

        <button onClick={() => setText(generateText(300))}>
          <RotateCcw size={24} className="text-[#6d564d] font-semibold" />
        </button>
      </main>
    </>
  );
}
