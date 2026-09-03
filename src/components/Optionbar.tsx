import {
  AlarmClock,
  CaseSensitive,
  ClipboardType,
  ClipboardPenLine,
} from "lucide-react";
const ButtonEffects = "flex items-center gap-2 text-sm";
export default function Optionbar() {
  return (
    <>
      <section className="flex items-center justify-between  mt-4 ">
        <div className="h-10 w-[40%] mt-2 text-[#72584e] font-[Roboto_Mono]] font-medium bg-[#c9b0a6] flex items-center justify-around mx-auto rounded-xl">
          <button className={`${ButtonEffects}`}>
            <AlarmClock size={16} />
            Time
          </button>
          <button className={`${ButtonEffects}`}>
            <CaseSensitive size={18} />
            Words
          </button>
          <button className={`${ButtonEffects}`}>
            <ClipboardType size={16} />
            Test
          </button>
          <button className={`${ButtonEffects}`}>
            <ClipboardPenLine size={16} />
            Custom
          </button>
        </div>
      </section>
    </>
  );
}
