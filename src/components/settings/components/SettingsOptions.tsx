import { motion } from "framer-motion";

interface SettingOptionsProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  layoutId: string;
}

export default function SettingOptions({
  options,
  value,
  onChange,
  layoutId,
}: SettingOptionsProps) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-2 ">
      {options.map((option) => {
        const isActive = value === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className="relative
              rounded-full
        border border-[#b29a8e]
        bg-[#b8a097]
        px-7
        py-2.5
        font-[Roboto_Mono]
        text-sm
        font-semibold
        text-[#49372a]
        shadow-[0_3px_0_#b09f8c]
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:bg-[#f2dfca]
        hover:shadow-[0_4px_0_#a48e80]
        active:translate-y-0.5
        active:shadow-[0_1px_0_#b09f8c]
        cursor-pointer"
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-[#f7e7d6] shadow-[0_2px_0_#aa9688,0_3px_6px_rgba(73,55,42,0.12)]"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span
              className={`relative z-10 ${
                isActive ? "text-[#49372a]" : "text-[#72584e]"
              }`}
            >
              {option}
            </span>
          </button>
        );
      })}
    </div>
  );
}
