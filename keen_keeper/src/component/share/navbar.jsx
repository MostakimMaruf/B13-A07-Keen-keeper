import { NavLink } from "react-router-dom";
import { FiHome, FiClock, FiActivity, FiUser } from "react-icons/fi";

const navItems = [
  { label: "Home",     path: "/",         icon: FiHome },
  { label: "Timeline", path: "/timeline", icon: FiClock },
  { label: "Stats",    path: "/stats",    icon: FiActivity },
];

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-[#e2e8e8] px-6 h-14 flex items-center justify-between w-full">
    
    <div className="flex items-center gap-2 cursor-pointer">
       
        <div className=" text-base tracking-tight">
          <span className="font-bold text-[#1a2b2b] text-2xl ">Keen</span>
          <span className="font-normal text-[#244D3F] text-2xl">Keeper</span>
        </div>
      </div>
    
      <div className="flex items-center gap-1">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) => `
              flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${isActive 
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
    </nav>
  );
}