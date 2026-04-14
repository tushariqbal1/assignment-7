import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
          K
        </div>
        <span className="font-semibold text-2xl tracking-tight">KeenKeeper</span>
      </div>

      <div className="flex gap-8 text-sm font-medium">
        <NavLink 
          to="/" 
          className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <Home size={20} /> Home
        </NavLink>
        <NavLink 
          to="/timeline" 
          className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <Clock size={20} /> Timeline
        </NavLink>
        <NavLink 
          to="/stats" 
          className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <BarChart3 size={20} /> Stats
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;