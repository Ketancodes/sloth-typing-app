import { motion } from "framer-motion";

interface SettingCapsuleProps {
  options: string[];
  value: string;
  onChange?: (value: string) => void;
}

export default function SettingCapsule({
  options,
  value,
  onChange,
}: SettingCapsuleProps) {
  return (
    <div className="relative flex items-center gap-1 rounded-full bg-[#b8a097] p-1 shadow-[inset_0_1px_2px_rgba(73,55,42,0.12)]">
      {options.map((option) => {
        const isActive = option === value;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange?.(option)}
            className="
              relative
              z-10
              min-w-22
              rounded-full
              px-4.5
              py-2.5
              font-[Roboto_Mono]
              text-[14px]
              font-medium
              text-[#614f43]
              transition-colors
              duration-200
              cursor-pointer
            "
          >
            {isActive && (
              <motion.div
                layoutId="settings-active-capsule"
                className="
                  absolute
                  inset-0
                  -z-10
                  rounded-full
                  bg-[#f7e7d6]
                  shadow-[0_2px_0_#aa9688,0_3px_6px_rgba(73,55,42,0.12)]
                "
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}

            <span className={isActive ? "text-[#49372a]" : "text-[#72584e]"}>
              {option}
            </span>
          </button>
        );
      })}
    </div>
  );
}
