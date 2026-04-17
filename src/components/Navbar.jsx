// import { NavLink } from 'react-router-dom';
// import { Home, Clock, BarChart3 } from 'lucide-react';

// const Navbar = () => {
//   return (
//     <nav className="bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between sticky top-0 z-50 shadow-sm">
//       <div className="flex items-center gap-3">

//         <span className="font-semibold text-2xl tracking-tight">Keen<span className='text-emerald-600'>Keeper</span></span>
//       </div>

//       <div className="flex gap-8 text-sm font-medium">
//         <NavLink 
//           to="/" 
//           className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
//         >
//           <Home size={20} /> Home
//         </NavLink>
//         <NavLink 
//           to="/timeline" 
//           className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
//         >
//           <Clock size={20} /> Timeline
//         </NavLink>
//         <NavLink 
//           to="/stats" 
//           className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
//         >
//           <BarChart3 size={20} /> Stats
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart3, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="font-semibold text-xl md:text-2xl tracking-tight">
          Keen<span className="text-emerald-600">Keeper</span>
        </span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "text-emerald-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`
          }
        >
          <Home size={20} /> Home
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "text-emerald-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`
          }
        >
          <Clock size={20} /> Timeline
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "text-emerald-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`
          }
        >
          <BarChart3 size={20} /> Stats
        </NavLink>
      </div>
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col items-start p-4 gap-4 md:hidden">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-emerald-600 font-semibold"
                  : "text-gray-600"
              }`
            }
          >
            <Home size={20} /> Home
          </NavLink>

          <NavLink
            to="/timeline"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-emerald-600 font-semibold"
                  : "text-gray-600"
              }`
            }
          >
            <Clock size={20} /> Timeline
          </NavLink>

          <NavLink
            to="/stats"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-emerald-600 font-semibold"
                  : "text-gray-600"
              }`
            }
          >
            <BarChart3 size={20} /> Stats
          </NavLink>
        </div>
      )}
    </nav>
  );
}