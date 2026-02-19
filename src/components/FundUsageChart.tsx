 "use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type FundUsageChartProps = {
  ngoName: string;
};

const COLORS = ["#0ea5e9", "#22c55e", "#f97316", "#6366f1", "#eab308"];

function buildSampleData(ngoName: string) {
  const baseSlices = [
    "Programs & Field Work",
    "Admin & Operations",
    "Fundraising & Outreach",
    "Monitoring & Evaluation",
  ];

  const seed = Array.from(ngoName).reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0,
  );

  const raw = baseSlices.map((label, index) => {
    const value = 20 + ((seed >> index) % 15);
    return { label, value };
  });

  const total = raw.reduce((sum, item) => sum + item.value, 0);

  return raw.map((item) => ({
    name: item.label,
    value: Math.round((item.value / total) * 100),
  }));
}

export function FundUsageChart({ ngoName }: FundUsageChartProps) {
  const data = buildSampleData(ngoName);

  return (
    <div className="h-64 w-full sm:h-72">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell
                // eslint-disable-next-line react/no-array-index-key
                key={`slice-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number | undefined) =>
              value !== undefined ? `${value}%` : "0%"
            }
            
            contentStyle={{
              borderRadius: 12,
              borderColor: "#e5e7eb",
              boxShadow:
                "0 18px 45px rgba(15, 23, 42, 0.08), 0 8px 18px rgba(15, 23, 42, 0.04)",
            }}
          />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconType="circle"
            wrapperStyle={{
              fontSize: 12,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

