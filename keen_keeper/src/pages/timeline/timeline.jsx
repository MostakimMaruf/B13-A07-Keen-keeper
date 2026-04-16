import { useState } from "react";
// Feather and Font Awesome sets match your UI style best
import {
  FiMessageSquare,
  FiVideo,
  FiPhone,
  FiChevronDown,
} from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

const timelineData = [
  {
    type: "Meetup",
    contact: "Tom Baker",
    date: "March 29, 2026",
    icon: FaUsers,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    type: "Text",
    contact: "Sarah Chen",
    date: "March 28, 2026",
    icon: FiMessageSquare,
    color: "text-gray-400",
    bg: "bg-gray-50",
  },
  {
    type: "Meetup",
    contact: "Olivia Martinez",
    date: "March 26, 2026",
    icon: FaUsers,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    type: "Video",
    contact: "Aisha Patel",
    date: "March 23, 2026",
    icon: FiVideo,
    color: "text-slate-500",
    bg: "bg-slate-50",
  },
  {
    type: "Meetup",
    contact: "Sarah Chen",
    date: "March 21, 2026",
    icon: FaUsers,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    type: "Call",
    contact: "Marcus Johnson",
    date: "March 19, 2026",
    icon: FiPhone,
    color: "text-gray-600",
    bg: "bg-gray-50",
  },
  {
    type: "Meetup",
    contact: "Aisha Patel",
    date: "March 17, 2026",
    icon: FaUsers,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    type: "Text",
    contact: "Olivia Martinez",
    date: "March 13, 2026",
    icon: FiMessageSquare,
    color: "text-gray-400",
    bg: "bg-gray-50",
  },
  {
    type: "Call",
    contact: "Lisa Nakamura",
    date: "March 11, 2026",
    icon: FiPhone,
    color: "text-gray-600",
    bg: "bg-gray-50",
  },
  {
    type: "Call",
    contact: "Sarah Chen",
    date: "March 11, 2026",
    icon: FiPhone,
    color: "text-gray-600",
    bg: "bg-gray-50",
  },
  {
    type: "Video",
    contact: "Marcus Johnson",
    date: "March 6, 2026",
    icon: FiVideo,
    color: "text-slate-500",
    bg: "bg-slate-50",
  },
  {
    type: "Video",
    contact: "Ryan O'Brien",
    date: "February 24, 2026",
    icon: FiVideo,
    color: "text-slate-500",
    bg: "bg-slate-50",
  },
];

export default function Timeline() {
  const [filter, setFilter] = useState("All");

  // Logic to filter the list
  const filteredItems = timelineData.filter((item) =>
    filter === "All" ? true : item.type === filter,
  );

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
          <option value="All">Filter timeline (All)</option>
          <option value="Meetup">Meetups</option>
          <option value="Text">Texts</option>
          <option value="Call">Calls</option>
          <option value="Video">Videos</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
          <FiChevronDown size={16} />
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 bg-white p-5 rounded-xl border border-[#ecefef] animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-lg ${item.bg} ${item.color}`}
            >
              <item.icon size={18} />
            </div>

            <div className="flex flex-col">
              <div className="text-[15px]">
                <span className="font-bold text-[#1a2b2b]">{item.type}</span>
                <span className="text-gray-400 font-normal">
                  {" "}
                  with {item.contact}
                </span>
              </div>
              <span className="text-xs text-gray-400 mt-0.5">{item.date}</span>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            No items found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
