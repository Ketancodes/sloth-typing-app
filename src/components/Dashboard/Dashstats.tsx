import type { TestResult, TestConfig } from "../../types/test";
import getConsistency from "../../utils/getConsistency";
interface DashStasProp {
  result: TestResult;
  testConfig: TestConfig;
}
export default function Dashstats({ result, testConfig }: DashStasProp) {
  // display test type
  const displayMode =
    testConfig.testMode === "normal" ? "english" : testConfig.testMode;

  const testTypeText =
    testConfig.testLengthMode === "time"
      ? `${displayMode} ${testConfig.timeOption}s`
      : `${displayMode} ${testConfig.wordOption} words`;
  return (
    <>
      <div className="grid grid-cols-4 gap-10 mt-6">
        {/* typed words data */}
        <div className="group flex flex-col relative w-fit">
          {/* typed words hover  */}
          <div
            className="
                    pointer-events-none absolute bottom-full left-0 mb-1
                    w-32 rounded-md bg-[#46362b] px-3 py-2
                    text-sm font-mono text-[#d4c4bd]
                    opacity-0 translate-y-1
                    transition-all duration-200 ease-out
                    group-hover:opacity-100 group-hover:translate-y-0
                  "
          >
            <div className="flex justify-between">
              <span>correct</span>
              <span>{result.correct}</span>
            </div>

            <div className="flex justify-between">
              <span>incorrect</span>
              <span>{result.incorrect}</span>
            </div>

            <div className="flex justify-between">
              <span>missed</span>
              <span>{result.missed}</span>
            </div>

            <div className="flex justify-between">
              <span>extra</span>
              <span>{result.extra}</span>
            </div>
          </div>
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
            {getConsistency(result.chartData.raw).toFixed(2)}%
          </h1>
        </div>

        {/* raw wpm n acc data */}
        <div className="group relative flex flex-col w-fit">
          {/* raw wpm n acc hover */}
          <div
            className="
      pointer-events-none absolute bottom-full left-0 -mb-1
      whitespace-nowrap rounded-md bg-[#46362b] px-3 py-2
      text-sm font-mono text-[#d4c4bd]
      opacity-0 translate-y-1
      transition-all duration-200 ease-out
      group-hover:opacity-100 group-hover:translate-y-0
    "
          >
            wpm / accuracy
          </div>

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
            {testTypeText}
          </h1>
        </div>
      </div>
    </>
  );
}
