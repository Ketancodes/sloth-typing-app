import type { TestResult } from "../../types/test";
interface DashStasProp {
  result: TestResult;
}
export default function Dashstats({ result }: DashStasProp) {
  return (
    <>
      <div className="grid grid-cols-4 gap-10 mt-6">
        {/* typed words data */}
        <div className="flex flex-col">
          <p className="text-xl font-normal text-[#72645d] font-mono">
            typed words
          </p>
          <h1 className="text-[34px] text-[#46362b] font-semibold leading-tight font-mono">
            {result.correct}/{result.incorrect}/{result.missed}/{result.extra}
          </h1>
        </div>

        {/* consistency data */}
        <div className="flex flex-col">
          <p className="text-xl font-normal text-[#72645d] font-mono">
            consistency
          </p>
          <h1 className="text-[34px] text-[#46362b] font-semibold leading-tight font-mono">
            80%
          </h1>
        </div>

        {/* raw wpm+acc data */}
        <div>
          <p className="text-xl font-normal text-[#72645d] font-mono">raw</p>
          <h1 className="text-[34px] text-[#46362b] font-semibold leading-tight font-mono">
            {result.rawWpm}/{result.accuracy.toFixed(2)}%
          </h1>
        </div>

        {/* test type  */}
        <div>
          <p className="text-xl font-normal text-[#72645d] font-mono">
            test type
          </p>
          <h1 className="text-[34px] text-[#46362b] font-semibold leading-tight font-mono">
            english 30s
          </h1>
        </div>
      </div>
    </>
  );
}
