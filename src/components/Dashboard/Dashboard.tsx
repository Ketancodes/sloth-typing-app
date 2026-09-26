import type { TestResult } from "../../types/test";
import Dashtop from "./Dashtop";
import Dashgraph from "./Dashgraph";
import Dashstats from "./Dashstats";
import getConsistency from "../../utils/getConsistency";
import Dashaction from "./Dashaction";

interface DashProps {
  result: TestResult;
  onReset: () => void;
  onRepeat: () => void;
}
export default function Dashboard({ result, onReset, onRepeat }: DashProps) {
  console.log("get consistency wpm:", getConsistency(result.chartData.wpm));
  console.log("get consistency raw:", getConsistency(result.chartData.raw));

  return (
    <>
      <div className="mt-2 ml-6 font-[Courier_Prime] font-medium">
        <div className="flex justify-between">
          <Dashtop result={result} />
          <div className="w-[70%] h-62.5 ">
            <Dashgraph result={result} />
          </div>
        </div>
        <Dashstats result={result} />
        <Dashaction onReset={onReset} onRepeat={onRepeat} />
      </div>
    </>
  );
}
