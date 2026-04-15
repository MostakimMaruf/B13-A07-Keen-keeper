const stats = [
  { value: 10, label: "Total Friends" },
  { value: 3,  label: "On Track" },
  { value: 6,  label: "Need Attention" },
  { value: 12, label: "Interactions This Month" },
];

export default function StatsRow() {
  return (
    <div className="bg-[#f0f2f0] p-4 w-full max-w-5xl mx-auto rounded">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-[#e2e8e8] p-5 text-center"
          >
            <p className="text-3xl font-bold text-[#1e4034] mb-1">{stat.value}</p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}