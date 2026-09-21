import type { CharStatus } from "../../types/test";

interface DashProps {
  wpm: number;
  charStatus: CharStatus[];
}
export default function Dashboard({ wpm }: DashProps) {
  return (
    <>
      <div>
        <p>Test is basically finished...!</p>

        <p>wpm:{Math.round(wpm)}</p>
      </div>
    </>
  );
}
