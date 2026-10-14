import { useSettings } from "../../../hooks/useSettings";
import type { ThemeOption } from "../types/Settingstypes";

const themeOptions: { value: ThemeOption; label: string; colors: string[] }[] =
  [
    {
      value: "coffee",
      label: "Coffee",
      colors: ["#c7afa5", "#d8c5bb", "#46362b"],
    },
    {
      value: "coffee-night",
      label: "Coffee Night",
      colors: ["#211a17", "#302520", "#ead8c5"],
    },
  ];

export default function AppearanceSettings() {
  const { theme, setTheme } = useSettings();

  return (
    <section className="mt-14">
      <h2 className="mb-4 font-[Courier_Prime] text-2xl font-semibold text-[#806c5f]">
        Appearance
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {themeOptions.map((option, index) => {
          const isSelected = theme === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setTheme(option.value)}
              className={`rounded-2xl border p-4 text-left transition-colors ${
                isSelected ? "border-(--text)" : "border-(--border)"
              } ${index === 3 ? "sm:col-start-2" : ""}`}
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--text)",
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-[Roboto_Mono] text-md font-medium">
                  {option.label}
                </span>

                <div className="flex items-center gap-2">
                  {option.colors.map((color, colorIndex) => (
                    <span
                      key={colorIndex}
                      className="h-8 w-8 shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-2 flex justify-end">
                {isSelected && (
                  <span className="text-md" aria-label="Selected">
                    ✓
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
