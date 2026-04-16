/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiClock, FiActivity, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", path: "/", icon: FiHome },
  { label: "Timeline", path: "/timeline", icon: FiClock },
  { label: "Stats", path: "/stats", icon: FiActivity },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#e2e8e8] px-4 md:px-6 h-14 flex items-center justify-between w-full relative">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="text-base tracking-tight">
          <span className="font-bold text-[#1a2b2b] text-xl md:text-2xl">
            Keen
          </span>
          <span className="font-normal text-[#244D3F] text-xl md:text-2xl">
            Keeper
          </span>
        </div>
      </div>

      {/*dextop menu */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) => `
              flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${
                isActive
                  ? "bg-[#1e4034] text-white"
                  : "text-[#4a5a5a] hover:bg-[#f0f2f0]"
              }
            `}
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu */}

      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-[#1e4034]">
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}

      {open && (
        <div className="absolute top-14 left-0 w-full bg-white border-t border-[#e2e8e8] flex flex-col md:hidden z-50">
          {navItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-2 px-4 py-3 text-sm font-medium
                ${
                  isActive
                    ? "bg-[#1e4034] text-white"
                    : "text-[#4a5a5a] hover:bg-[#f0f2f0]"
                }
              `}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
