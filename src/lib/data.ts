
export type Event = {
  time: string;
  title: string;
  stage: 'Main Stage' | 'Indie Grove';
  description: string;
};

export const scheduleData: Event[] = [
  { time: '03:00 PM', title: 'Gates Open', stage: 'Main Stage', description: 'Welcome to the Panpacific Festival! Find your spot and get ready for an amazing day.' },
  { time: '06:00 PM', title: 'Cosplay and Hiphop Competition', stage: 'Indie Grove', description: 'The show kicks off with amazing costumes and fresh hip-hop talent.' },
  { time: '07:00 PM', title: 'Battle of the Bands', stage: 'Main Stage', description: 'Bands compete for the ultimate title, rocking the main stage.' },
  { time: '08:00 PM', title: 'Guest Band: Zepultura', stage: 'Main Stage', description: 'Pangasinan\'s own progressive metal powerhouse takes the stage.' },
  { time: '09:00 PM', title: 'Special Guest: Gloc-9', stage: 'Main Stage', description: 'The one and only Aristotle Pollisco, a.k.a. Gloc-9, performs his hits.' },
  { time: '10:30 PM', title: 'Closing Set: DJ Ixia', stage: 'Main Stage', description: 'Acclaimed local DJ Ixia Española ends the night with an electrifying set.' },
];

export type Talent = {
  id: string;
  name: string;
  genre: string;
  bio: string;
  imageId: string;
};

export const talentData: Talent[] = [
  {
    id: 'gloc-9',
    name: 'Gloc-9',
    genre: 'Rap / Hip-Hop',
    bio: 'Aristotle Pollisco, known by his stage name Gloc-9, is a Filipino rapper, singer, and songwriter recognized as a pioneer and enduring icon of Philippine hip-hop. With a career spanning more than two decades, he has consistently earned industry awards and acclaim for both his recordings and live performances. Widely regarded as one of the greatest Filipino rappers of all time, his fast-flowing lyrical style and sharp social storytelling have made him one of the country’s best-selling and most influential hip-hop artists.',
    imageId: 'talent-gloc-9',
  },
  {
    id: 'ixia-espanola',
    name: 'Ixia Española',
    genre: 'High-Energy EDM / Future Bass',
    bio: 'A premier local DJ from Pangasinan, Ixia Española is celebrated for her electrifying sets that ignite dance floors. She frequently collaborates with top artists in the Manila club scene, blending future bass, trap, and hardstyle with a dynamic stage presence that makes her a must-see act.',
    imageId: 'talent-ixia',
  },
  {
    id: 'zepultura',
    name: 'Zepultura',
    genre: 'Progressive Metal / Djent',
    bio: 'Hailing from Pangasinan, Zepultura is a local progressive metal powerhouse known for their complex rhythms, heavy riffs, and melodic passages. Their music often weaves intricate stories of modern-day struggles and resilience, creating a powerful and immersive sonic experience.',
    imageId: 'talent-zepultura',
  },
];

export type LeaderboardEntry = {
    rank: number;
    name: string;
    score: number;
}

export const battleOfTheBandsLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Crimson Cascade', score: 9.8 },
    { rank: 2, name: 'Static Surge', score: 9.5 },
    { rank: 3, name: 'Emerald Echo', score: 9.2 },
    { rank: 4, name: 'Solar Flare', score: 8.9 },
    { rank: 5, name: 'Neon Ghosts', score: 8.7 },
];

export const cosplayLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Kael "Cyborg"', score: 9.9 },
    { rank: 2, name: 'Lira "Valkyrie"', score: 9.6 },
    { rank: 3, name: 'Jax "Glitch"', score: 9.4 },
    { rank: 4, name: 'Seraphina "Aether"', score: 9.1 },
    { rank: 5, name: 'Ryo "Oni"', score: 8.8 },
];

export type PlaylistSong = {
    title: string;
    src: string;
};

export const festivalPlaylist: PlaylistSong[] = [
    { title: 'Bagsakan', src: 'Bagsakan.mp3' },
    { title: 'Halik', src: 'Halik.mp3' },
    { title: 'Hari Ng Tondo', src: 'Hari ng Tondo.mp3' },
    { title: 'Hoy', src: 'Hoy.mp3' },
    { title: 'Kaleidoscope World', src: 'Kaleidoscope World.mp3' },
    { title: 'Martyr Nyebera', src: 'Martyr Nyebera.mp3' },
    { title: 'Simpleng Tao', src: 'Simpleng Tao.mp3' },
    { title: 'Sirena', src: 'Sirena.mp3' },
    { title: 'Sumayaw Ka', src: 'Sumayaw Ka.mp3' },
    { title: 'Tropa', src: 'Tropa.mp3' },
    { title: 'Upuan', src: 'Upuan.mp3' },
];
