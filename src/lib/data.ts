import type { TicketTier, Artist, ScheduleDay, GalleryImage } from './types';

export const ticketTiers: TicketTier[] = [
  {
    id: 'sports',
    name: 'Sports Pass',
    price: 3000,
    perks: ['Access to Sports Day', 'Free drink voucher', 'Merchandise discount'],
  },
  {
    id: 'party',
    name: 'Party Pass',
    price: 5000,
    perks: ['Entry to Party Night', '2 free drink vouchers', 'Glow sticks'],
  },
  {
    id: 'all-access',
    name: 'All-Access Pass',
    price: 7500,
    perks: [
      'Access to Sports Day & Party Night',
      'Exclusive VIP lounge access',
      'Meet & greet with artists',
      'Complimentary food & drinks',
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
    items: [
      { time: '12:00 PM', title: 'Opening Ceremony', location: 'Main Field', description: 'Kick-off with a bang!', type: 'Entertainment' },
      { time: '1:00 PM', title: 'Football Match: Uni A vs Uni B', location: 'Stadium', description: 'The rivalry begins.', type: 'Sports' },
      { time: '3:00 PM', title: 'Basketball Finals', location: 'Indoor Court', description: 'Slam dunks and high stakes.', type: 'Sports' },
      { time: '5:00 PM', title: 'Live Performance by Local Band', location: 'Main Stage', description: 'Chill vibes before the night.', type: 'Entertainment' },
    ],
  },
  {
    day: 'Day 2: Party Night',
    date: 'December 23, 2025',
    items: [
      { time: '7:00 PM', title: 'Gates Open for Party Night', location: 'Concert Ground', description: 'Get ready to party.', type: 'Entertainment' },
      { time: '8:00 PM', title: 'DJ Set by DJ Spinall', location: 'Main Stage', description: 'The party starts now.', type: 'Entertainment' },
      { time: '10:00 PM', title: 'Headline Performance', location: 'Main Stage', description: 'Surprise headline act!', type: 'Entertainment' },
      { time: '12:00 AM', title: 'Afterparty with Guest DJs', location: 'VIP Lounge', description: 'The night is young.', type: 'Entertainment' },
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
