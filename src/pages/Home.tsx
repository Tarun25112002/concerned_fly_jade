import React, { useEffect } from 'react';
import { songs } from '../data/mockData';
import { SongCard } from '../components/SongCard';
import { usePlayerStore } from '../store/playerStore';

const Home: React.FC = () => {
  const setQueue = usePlayerStore((state) => state.setQueue);

  useEffect(() => {
    setQueue(songs);
  }, [setQueue]);

  return (
    <div className="p-8 pb-32">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Good evening
        </h1>
        <p className="text-slate-400">Your daily dose of Bollywood magic.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {songs.slice().reverse().map((song) => (
            <SongCard key={`recent-${song.id}`} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;