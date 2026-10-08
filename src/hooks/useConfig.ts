import { useContext } from "react";
import { TestConfigContext } from "../components/settings/context/TestConfigContext";

export function useTestConfig() {
  const context = useContext(TestConfigContext);

  if (!context) {
    throw new Error("useTestConfig must be used within TestConfigProvider");
  }

  return context;
}
