import { useEffect, useState } from "react";

export default function StatsRow() {
  const [friends, setFriends] = useState([]);
  console.log(friends);
  const [loading, setLoading] = useState(true);

  // fetch data

  useEffect(() => {
    fetch("../../../public/friends.json")
      .then((response) => response.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const stats = [
    { value: friends.length, label: "Total Friends" },

    {
      value: friends.filter((f) => f.status === "on-track").length,
      label: "On Track",
    },

    {
      value: friends.filter(
        (f) => f.status === "almost due" || f.status === "overdue",
      ).length,
      label: "Need Attention",
    },

    {
      value: friends.filter((f) => {
        const d = new Date(f.next_due_date);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      }).length,
      label: "Interactions This Month",
    },
  ];

  if (loading)
    return <div className="p-10 text-center">Loading statcounts...</div>;

  return (
    <div className="bg-[#f0f2f0] p-4 w-full max-w-5xl mx-auto rounded">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-[#e2e8e8] p-5 text-center"
          >
            <p className="text-3xl font-bold text-[#1e4034] mb-1">
              {stat.value}
            </p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
