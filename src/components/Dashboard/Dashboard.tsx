import type { TestResult } from "../../types/test";
import Dashtop from "./Dashtop";
import Dashgraph from "./Dashgraph";
import Dashstats from "./Dashstats";
// import getConsistency from "../../utils/getConsistency";

interface DashProps {
  result: TestResult;
}
export default function Dashboard({ result }: DashProps) {
  // console.log("get consistency:", getConsistency(result.chartData.wpm));
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
      </div>
    </>
  );
}
