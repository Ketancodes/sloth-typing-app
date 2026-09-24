import type { TestResult } from "../../types/test";
import Dashtop from "./Dashtop";
import Dashgraph from "./Dashgraph";
import Dashstats from "./Dashstats";

interface DashProps {
  result: TestResult;
}
export default function Dashboard({ result }: DashProps) {
  console.log("dashboard props:", result);
  return (
    <>
      <div className="mt-2 ml-6 font-[Courier_Prime] font-medium">
        <div className="flex justify-between">
          <Dashtop result={result} />
          <div className="w-[70%] h-62.5 bg-[#867467]">
            <Dashgraph />
          </div>
        </div>
        <Dashstats result={result} />
      </div>
    </>
  );
}
