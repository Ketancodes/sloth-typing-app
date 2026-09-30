import type { TestResult, TestConfig } from "../../types/test";
import Dashtop from "./Dashtop";
import Dashgraph from "./Dashgraph";
import Dashstats from "./Dashstats";
import Dashaction from "./Dashaction";
import { useState } from "react";

interface DashProps {
  result: TestResult;
  onReset: () => void;
  onRepeat: () => void;
  testConfig: TestConfig;
}
export default function Dashboard({
  result,
  onReset,
  onRepeat,
  testConfig,
}: DashProps) {
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <>
      <div className="mt-2 ml-6 font-[Courier_Prime] font-medium">
        <div className="flex justify-between">
          <Dashtop result={result} />
          <div className="w-[70%] h-62.5 ">
            <Dashgraph result={result} testConfig={testConfig} />
          </div>
        </div>
        <Dashstats result={result} testConfig={testConfig} />
        <Dashaction
          onReset={onReset}
          onRepeat={onRepeat}
          onToggle={openHistory}
          onToggleHistory={() => setOpenHistory((prev) => !prev)}
          result={result}
        />
      </div>
    </>
  );
}
