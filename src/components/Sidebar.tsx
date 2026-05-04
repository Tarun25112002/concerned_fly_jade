import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, Music2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Library, label: 'Your Library', path: '/library' },
  ];

  return (
    <div className="w-64 bg-black h-screen flex flex-col border-r border-slate-800/50">
      <div className="p-6 flex items-center gap-2 text-indigo-500">
        <Music2 size={32} />
        <span className="text-2xl font-bold tracking-tight text-white">Orbitify</span>
      </div>

      <nav className="flex-1 px-3">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group ${
                location.pathname === item.path 
                  ? 'bg-slate-800 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <item.icon size={22} className={location.pathname === item.path ? 'text-indigo-500' : 'group-hover:text-indigo-400'} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 space-y-1">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-white transition-colors group">
            <div className="bg-slate-400 group-hover:bg-white p-1 rounded-sm transition-colors">
              <PlusSquare size={16} className="text-black" />
            </div>
            <span className="font-medium">Create Playlist</span>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-white transition-colors group">
            <div className="bg-gradient-to-br from-indigo-700 to-purple-400 p-1 rounded-sm">
              <Heart size={16} className="text-white" fill="currentColor" />
            </div>
            <span className="font-medium">Liked Songs</span>
          </button>
        </div>
      </nav>

      <div className="p-6 border-t border-slate-800/50">
        <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800/50">
          <p className="text-xs text-slate-400 mb-2">Enjoying the beats?</p>
          <button className="w-full py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition">
            Go Premium
          </button>
        </div>
      </div>
    </div>
  );
};