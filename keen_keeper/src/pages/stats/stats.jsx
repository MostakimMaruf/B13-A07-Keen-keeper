/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function Stats() {
  const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

  const data = useMemo(() => {
    const count = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    timeline.forEach((item) => {
      if (item.type === "Call") count.Call++;
      if (item.type === "Text") count.Text++;
      if (item.type === "Video") count.Video++;
    });

    return [
      { name: "Text", value: count.Text, color: "#8b5cf6" },
      { name: "Call", value: count.Call, color: "#1e3a2f" },
      { name: "Video", value: count.Video, color: "#34a853" },
    ];
  }, [timeline]);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#f8fafb] min-h-screen">
      <h1 className="text-3xl font-bold text-[#1a2b2b] mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-xl border border-[#ecefef] p-8 shadow-sm">
        <h2 className="text-[#3a5a40] font-medium mb-4 text-sm">
          By Interaction Type
        </h2>

        <div className="h-75 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={8}
                cornerRadius={10}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center gap-6 mt-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-gray-500 font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
