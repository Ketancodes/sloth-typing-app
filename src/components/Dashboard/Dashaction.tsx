import { Recycle, EthernetPort, ScreenShare, RotateCcw } from "lucide-react";

interface DashactionProp {
  onReset: () => void;
  onRepeat: () => void;
}

const hoverClass =
  "pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-[#46362b] px-2 py-1 text-md text-[#d4c4bd] opacity-0 transition-opacity duration-150 group-hover:opacity-100 ";
const groupHoverClass =
  "group relative hover:cursor-pointer hover:text-[#382a21]";

export default function Dashaction({ onReset, onRepeat }: DashactionProp) {
  return (
    <>
      <div className="mt-14 w-full flex items-center justify-center">
        <div className="flex w-[25%] items-center justify-between text-[#614f43]">
          {/* Retry */}
          <div className={groupHoverClass} onClick={onRepeat}>
            <Recycle size={24} />

            <span className={hoverClass}>Retry Test</span>
          </div>

          {/* Input History */}
          <div className={groupHoverClass}>
            <EthernetPort size={24} />

            <span className={hoverClass}>Input History</span>
          </div>

          {/* Share */}
          <div className={groupHoverClass}>
            <ScreenShare size={24} />

            <span className={hoverClass}>Share Result</span>
          </div>

          {/* Reset */}
          <div className={groupHoverClass} onClick={onReset}>
            <RotateCcw size={24} />

            <span className={hoverClass}>Reset Test</span>
          </div>
        </div>
      </div>
    </>
  );
}
