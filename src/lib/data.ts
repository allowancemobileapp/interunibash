import type { TicketTier, Artist, ScheduleDay, GalleryImage } from './types';

export const ticketTiers: TicketTier[] = [
  {
    id: 'sports',
    name: 'Sports Pass',
    price: 3000,
    perks: ['Entry for Sports Day (Dec 22)'],
  },
  {
    id: 'party',
    name: 'Party Pass',
    price: 5000,
    perks: ['Entry for Party Night (Dec 23)'],
  },
  {
    id: 'all-access',
    name: 'All-Access Pass',
    price: 7500,
    perks: [
      'Both days',
      'Fast-track entry',
      'Free drink'
    ],
  },
];

export const artists: Artist[] = [
  { name: 'DJ Spinall', imageUrl: 'artist-1' },
  { name: 'Wizkid', imageUrl: 'artist-2' },
  { name: 'Tems', imageUrl: 'artist-3' },
  { name: 'Burna Boy', imageUrl: 'artist-4' },
  { name: 'Asake', imageUrl: 'artist-5' },
  { name: 'Rema', imageUrl: 'artist-6' },
];

export const schedule: ScheduleDay[] = [
  {
    day: 'Day 1: Sports Day',
    date: 'December 22, 2025',
    time: '12PM – 6PM',
    items: [
      { title: 'University Matchups (Football & Basketball)', location: 'Main Field', description: 'Fierce competition between universities.', type: 'Sports' },
      { title: 'Entertainment', location: 'Various', description: 'Hype crews, halftime shows, prizes.', type: 'Entertainment' },
    ],
  },
  {
    day: 'Day 2: Party Night',
    date: 'December 23, 2025',
    time: '6PM – Late',
    items: [
      { title: 'Unplugged Party Vibes', location: 'Concert Ground', description: 'Chill and enjoy the music.', type: 'Entertainment' },
      { title: 'Live performances', location: 'Main Stage', description: "Nigeria's hottest artists perform.", type: 'Entertainment' },
      { title: 'Fashion showcase', location: 'Runway', description: 'Latest trends on display.', type: 'Entertainment' },
      { title: 'Dance floor + games', location: 'Party Zone', description: 'Dance the night away and play fun games.', type: 'Entertainment' },
      { title: 'Photo booth & food court', location: 'Social Area', description: 'Capture memories and grab a bite.', type: 'Entertainment' },
    ],
  },
];

export const galleryImages: GalleryImage[] = [
    { id: '1', src: 'gallery-1', alt: 'People dancing', width: 600, height: 800, hint: 'people dancing' },
    { id: '2', src: 'gallery-2', alt: 'Football match', width: 800, height: 600, hint: 'football match' },
    { id: '3', src: 'gallery-3', alt: 'Event venue', width: 800, height: 600, hint: 'event venue' },
    { id: '4', src: 'gallery-4', alt: 'Artist performing', width: 600, height: 800, hint: 'artist performing' },
    { id: '5', src: 'gallery-5', alt: 'Friends posing', width: 800, height: 600, hint: 'friends posing' },
    { id: '6', src: 'gallery-6', alt: 'Stage lights', width: 600, height: 800, hint: 'stage lights' },
]
