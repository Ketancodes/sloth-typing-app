interface SettingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function SettingButton({
  children,
  onClick,
}: SettingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        rounded-full
        border border-[#b29a8e]
        bg-[#f7e7d6]
        px-4
        py-2
        font-[Roboto_Mono]
        text-xs
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
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}
