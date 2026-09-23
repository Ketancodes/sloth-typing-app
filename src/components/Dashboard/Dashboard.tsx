import type { CharStatus, TestResult } from "../../types/test";

interface DashProps {
  charStatus: CharStatus[];
  result: TestResult;
}
export default function Dashboard({ result }: DashProps) {
  console.log("dashboard props:", result);
  return (
    <>
      <div>
        <p>Test is basically finished...!</p>

        <p>wpm:{Math.round(result.wpm)}</p>
        <p>accuracy:{result.accuracy}</p>
        <p>correct:{result.correct}</p>
        <p>incorrect:{result.incorrect}</p>
        <p>missed:{result.missed}</p>
        <p>extra:{result.extra}</p>
      </div>
    </>
  );
}
