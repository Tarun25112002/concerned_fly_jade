import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { usePlayerStore } from '../store/playerStore';

export const PlayerBar: React.FC = () => {
  const { currentSong, isPlaying, setIsPlaying, volume, setVolume, playNext, playPrevious } = usePlayerStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      }
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 px-4 flex items-center justify-between z-50">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
      />
      
      <div className="flex items-center gap-4 w-1/3">
        <img src={currentSong.cover} alt={currentSong.title} className="w-14 h-14 rounded-md object-cover shadow-lg" />
        <div className="overflow-hidden">
          <h4 className="text-sm font-semibold truncate">{currentSong.title}</h4>
          <p className="text-xs text-slate-400 truncate">{currentSong.artist}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-6">
          <button className="text-slate-400 hover:text-white transition"><Shuffle size={18} /></button>
          <button onClick={playPrevious} className="text-slate-400 hover:text-white transition"><SkipBack size={22} fill="currentColor" /></button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition"
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
          </button>
          <button onClick={playNext} className="text-slate-400 hover:text-white transition"><SkipForward size={22} fill="currentColor" /></button>
          <button className="text-slate-400 hover:text-white transition"><Repeat size={18} /></button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-[10px] text-slate-400 w-8 text-right">{formatTime(progress)}</span>
          <input 
            type="range" 
            min="0" 
            max={duration || 0} 
            value={progress} 
            onChange={handleSeek}
            className="flex-1 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <span className="text-[10px] text-slate-400 w-8">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 w-1/3">
        <Volume2 size={18} className="text-slate-400" />
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
      </div>
    </div>
  );
};