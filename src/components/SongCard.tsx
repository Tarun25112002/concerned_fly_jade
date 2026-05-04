import React from 'react';
import { Play } from 'lucide-react';
import { usePlayerStore } from '../store/playerStore';
import { Song } from '../data/mockData';

interface SongCardProps {
  song: Song;
}

export const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const { setCurrentSong, currentSong, isPlaying, setIsPlaying } = usePlayerStore();
  
  const isCurrent = currentSong?.id === song.id;

  const handlePlay = () => {
    if (isCurrent) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
    }
  };

  return (
    <div 
      onClick={handlePlay}
      className="group bg-slate-900/40 p-4 rounded-xl hover:bg-slate-800/60 transition-all duration-300 cursor-pointer border border-slate-800/50 hover:border-indigo-500/30"
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg shadow-xl">
        <img 
          src={song.cover} 
          alt={song.title} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isCurrent && isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {isCurrent && isPlaying ? (
              <div className="flex gap-1 items-end h-5">
                <div className="w-1 bg-white animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1 bg-white animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1 bg-white animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            ) : (
              <Play fill="white" className="ml-1" />
            )}
          </div>
        </div>
      </div>
      <h3 className="font-bold text-slate-100 truncate">{song.title}</h3>
      <p className="text-sm text-slate-400 truncate">{song.artist}</p>
    </div>
  );
};