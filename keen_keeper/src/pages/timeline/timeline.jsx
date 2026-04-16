import { useState, useEffect } from "react";
import {
  FiMessageSquare,
  FiVideo,
  FiPhone,
  FiChevronDown,
} from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

export default function Timeline() {
  const [filter, setFilter] = useState("All");

  const [timelineData, setTimelineData] = useState(() => {
    const stored = localStorage.getItem("timeline");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const handleFocus = () => {
      const stored = localStorage.getItem("timeline");
      if (stored) setTimelineData(JSON.parse(stored));
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  // ✅ Filtering logic
  const filteredItems = timelineData.filter((item) =>
    filter === "All" ? true : item.type === filter,
  );

  // ✅ Icon mapping (UI same)
  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return FiPhone;
      case "Text":
        return FiMessageSquare;
      case "Video":
        return FiVideo;
      default:
        return FiMessageSquare;
    }
  };

  // ✅ Color mapping (UI same)
  const getColor = (type) => {
    switch (type) {
      case "Call":
        return "text-gray-600 bg-gray-50";
      case "Text":
        return "text-gray-400 bg-gray-50";
      case "Video":
        return "text-slate-500 bg-slate-50";
      case "Meetup":
        return "text-amber-500 bg-amber-50";
      default:
        return "text-gray-400 bg-gray-50";
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#f8fafb] min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-[#1a2b2b] mb-8">Timeline</h1>

      {/* Filter Dropdown */}
      <div className="relative inline-block mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="appearance-none bg-white border border-[#e2e8f0] rounded-lg pl-4 pr-10 py-2 text-sm text-gray-500 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e4034]/20"
        >
          <option value="All"> (All)</option>
          <option value="Text">Texts</option>
          <option value="Call">Calls</option>
          <option value="Video">Videos</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
          <FiChevronDown size={16} />
        </div>
      </div>

      {/* Timeline List */}
      <div className="flex flex-col gap-3">
        {filteredItems.map((item, index) => {
          const Icon = getIcon(item.type);
          const colorClass = getColor(item.type);

          return (
            <div
              key={index}
              className="flex items-center gap-5 bg-white p-5 rounded-xl border border-[#ecefef] animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-lg ${colorClass}`}
              >
                <Icon size={18} />
              </div>

              <div className="flex flex-col">
                <div className="text-[15px]">
                  <span className="font-bold text-[#1a2b2b]">{item.type}</span>
                  <span className="text-gray-400 font-normal">
                    {" "}
                    with {item.contact}
                  </span>
                </div>

                <span className="text-xs text-gray-400 mt-0.5">
                  {item.date}
                </span>
              </div>
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            No items found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
