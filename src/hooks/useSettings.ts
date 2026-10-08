import { useContext } from "react";
import { SettingsContext } from "../components/settings/context/settingsContext";

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used within SettingsProvider");
  }

  return context;
}
