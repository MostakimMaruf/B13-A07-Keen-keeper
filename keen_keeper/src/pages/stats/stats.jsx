import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Text', value: 300, color: '#8b5cf6' }, // Purple
  { name: 'Call', value: 450, color: '#1e3a2f' }, // Dark Green
  { name: 'Video', value: 250, color: '#34a853' }, // Emerald Green
];

export default function Stats() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#f8fafb] min-h-screen">
      <h1 className="text-3xl font-bold text-[#1a2b2b] mb-6">Friendship Analytics</h1>
      
      <div className="bg-white rounded-xl border border-[#ecefef] p-8 shadow-sm">
        <h2 className="text-[#3a5a40] font-medium mb-4 text-sm">By Interaction Type</h2>
        
        <div className="h-[300px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={8}   // This creates the gaps between segments
                cornerRadius={10}  // This gives the rounded edges
                dataKey="value"
                stroke="none"      // Removes the default white border
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend */}
        <div className="flex justify-center gap-6 mt-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: item.color }} 
              />
              <span className="text-xs text-gray-500 font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}