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
    <div className="flex flex-col items-start md:flex-row md:justify-between py-5">
      <div className="flex w-[90%] items-start md:w-auto md:flex-1 gap-3">
        {icon && (
          <div className="mt-1 shrink-0 text-(--muted-text)">{icon}</div>
        )}

        <div>
          <h3 className="font-[Roboto_Mono] text-[20px] font-semibold text-(--settings-row-title)">
            {title}
          </h3>

          <p className="mt-1 max-w-xl font-[Roboto_Mono] text-[15px] text-(--settings-row-description)">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-4 w-fit max-w-full md:w-auto md:shrink-0">
        {children}
      </div>
    </div>
  );
}
