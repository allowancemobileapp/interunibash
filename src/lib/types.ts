export type TicketTier = {
  id: string;
  name: string;
  price: number;
  perks: string[];
  blurb?: string;
};

export type Artist = {
  name: string;
  imageUrl: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  location: string;
  description: string;
  type: 'Sports' | 'Entertainment';
};

export type ScheduleDay = {
  day: string;
  date: string;
  items: ScheduleItem[];
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  hint: string;
};
