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
      <div className="mt-2 mx-3 sm:ml-6 sm:mr-0 font-[Courier_Prime] font-medium">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-0">
          <div className="w-full lg:w-[30%]">
            <Dashtop result={result} />
          </div>

          <div className="h-62.5 w-full md:mx-auto md:w-[75%] lg:w-[70%]">
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
