import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

import type { TestResult } from "../../types/test";

interface DashGraphProps {
  result: TestResult;
}

interface ErrorMarkerProps {
  cx?: number;
  cy?: number;
  payload?: {
    errorsAtSecond?: number;
  };
}

function ErrorMarker({ cx, cy, payload }: ErrorMarkerProps) {
  if (cx === undefined || cy === undefined || !payload?.errorsAtSecond) {
    return null;
  }

  return (
    <text
      x={cx}
      y={cy - 12}
      textAnchor="middle"
      fill="#d11c1c" // a33a32
      fontSize={14}
      fontWeight="bold"
    >
      *
    </text>
  );
}

export default function DashGraph({ result }: DashGraphProps) {
  const graphData = result.chartData.wpm.map((wpm, index) => {
    const currentErrors = result.chartData.err[index];
    const previousErrors = index > 0 ? result.chartData.err[index - 1] : 0;

    return {
      second: index + 1,
      wpm,
      raw: result.chartData.raw[index],
      err: currentErrors,
      errorsAtSecond: currentErrors - previousErrors,
    };
  });

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={graphData}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid
            horizontal={true}
            vertical={true}
            stroke="#6f5548"
            strokeDasharray="3 3"
            opacity={0.4}
          />
          <XAxis
            dataKey="second"
            tick={{ fill: "#6f5548", fontSize: 14 }}
            axisLine={{
              stroke: "#6f5548",

              strokeWidth: 1,
            }}
            tickLine={{
              stroke: "#6f5548",
              strokeWidth: 1,
            }}
          />

          <YAxis
            tick={{ fill: "#6f5548", fontSize: 14 }}
            axisLine={{
              stroke: "#6f5548",
              strokeWidth: 1,
            }}
            tickLine={{
              stroke: "#6f5548",
              strokeWidth: 1,
            }}
            label={{
              value: "wpm",
              angle: -90,
              position: "insideLeft",
              fill: "#6f5548",
              fontSize: 14,
            }}
          />
          <Tooltip
            cursor={{
              stroke: "#6f5548",
              strokeDasharray: "3 3",
              opacity: 0.5,
            }}
            content={({ active, payload, label }) => {
              if (!active || !payload || payload.length === 0) {
                return null;
              }

              const data = payload[0].payload;

              return (
                <div className="rounded-sm border border-[#6f5548]/40 bg-[#c7afa5] px-4 py-3 font-mono text-[#4b3025]">
                  <div className="mb-2 text-sm opacity-70">{label}s</div>

                  <div className="flex justify-between gap-6 text-sm">
                    <span>wpm</span>
                    <span>{data.wpm.toFixed(1)}</span>
                  </div>

                  <div className="flex justify-between gap-6 text-sm">
                    <span>raw</span>
                    <span>{data.raw.toFixed(1)}</span>
                  </div>

                  <div className="flex justify-between gap-6 text-sm">
                    <span>errors</span>
                    <span>{data.err}</span>
                  </div>
                </div>
              );
            }}
          />
          <Line
            type="monotone"
            dataKey="wpm"
            stroke="#4b3025"
            strokeWidth={2}
            dot={{
              r: 2.5,
              fill: "#c7afa5",
              stroke: "#4b3025",
              strokeWidth: 1.5,
            }}
            activeDot={{
              r: 5,
              fill: "#4b3025",
            }}
          />

          <Line
            type="monotone"
            dataKey="wpm"
            stroke="transparent"
            strokeWidth={0}
            dot={<ErrorMarker />}
            activeDot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
