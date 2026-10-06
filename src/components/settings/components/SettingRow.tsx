interface SettingRowProps {
  title: string;
  description: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function SettingRow({
  title,
  description,
  children,
  icon,
}: SettingRowProps) {
  return (
    <div className="flex items-start justify-between py-5">
      <div className="flex items-start gap-3">
        {icon && <div className="mt-1 shrink-0 text-[#7a6a5f]">{icon}</div>}

        <div>
          <h3 className="font-[Roboto_Mono] text-[20px] font-semibold text-[#49372a]">
            {title}
          </h3>

          <p className="mt-1 max-w-xl font-[Roboto_Mono] text-[15px] text-[#664f45]">
            {description}
          </p>
        </div>
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}
