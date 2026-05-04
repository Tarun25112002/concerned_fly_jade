import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { PlayerBar } from './components/PlayerBar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto h-screen">
        <div className="sticky top-0 h-16 bg-slate-950/60 backdrop-blur-md z-40 flex items-center px-8">
          <div className="flex gap-4">
            <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">‹</button>
            <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">›</button>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<div className="p-8">Search Page Placeholder</div>} />
          <Route path="/library" element={<div className="p-8">Library Page Placeholder</div>} />
        </Routes>
      </main>
      <PlayerBar />
    </div>
  );
};

export default App;
