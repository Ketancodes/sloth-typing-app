import type { TestResult } from "../../types/test";
interface ResultProp {
  result: TestResult;
}
export default function Dashtop({ result }: ResultProp) {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-start">
          <p className="text-3xl font-normal text-[#72645d] tracking-normal font-mono">
            wpm
          </p>
          <h1 className="text-7xl font-semibold text-[#46362b] leading-tight font-mono">
            {Math.round(result.wpm)}
          </h1>
        </div>
        <div>
          <p className="text-3xl font-normal text-[#72645d] tracking-normal font-mono">
            accuracy
          </p>
          <h1 className="text-7xl font-semibold text-[#46362b] leading-tight font-mono">
            {Math.round(result.accuracy)}%
          </h1>
        </div>
      </div>
    </>
  );
}
