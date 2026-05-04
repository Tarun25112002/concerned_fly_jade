export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
  url: string;
  duration: number;
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Kesariya',
    artist: 'Arijit Singh',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: 268
  },
  {
    id: '2',
    title: 'Raataan Lambiyan',
    artist: 'Jubin Nautiyal',
    cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&auto=format&fit=crop&q=60',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: 230
  },
  {
    id: '3',
    title: 'Chaiya Chaiya',
    artist: 'Sukhwinder Singh',
    cover: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=800&auto=format&fit=crop&q=60',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: 342
  },
  {
    id: '4',
    title: 'Tum Hi Ho',
    artist: 'Arijit Singh',
    cover: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?w=800&auto=format&fit=crop&q=60',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    duration: 262
  },
  {
    id: '5',
    title: 'Pasoori',
    artist: 'Ali Sethi',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    duration: 224
  }
];