import { create } from 'zustand';
import { Song } from '../data/mockData';

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  queue: Song[];
  setCurrentSong: (song: Song) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setVolume: (volume: number) => void;
  setQueue: (songs: Song[]) => void;
  playNext: () => void;
  playPrevious: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  volume: 0.7,
  queue: [],
  setCurrentSong: (song) => set({ currentSong: song, isPlaying: true }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
  setQueue: (queue) => set({ queue }),
  playNext: () => {
    const { currentSong, queue } = get();
    if (!currentSong || queue.length === 0) return;
    const currentIndex = queue.findIndex((s) => s.id === currentSong.id);
    const nextSong = queue[(currentIndex + 1) % queue.length];
    set({ currentSong: nextSong, isPlaying: true });
  },
  playPrevious: () => {
    const { currentSong, queue } = get();
    if (!currentSong || queue.length === 0) return;
    const currentIndex = queue.findIndex((s) => s.id === currentSong.id);
    const prevSong = queue[(currentIndex - 1 + queue.length) % queue.length];
    set({ currentSong: prevSong, isPlaying: true });
  },
}));