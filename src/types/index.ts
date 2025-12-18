export interface Couple {
  groom: {
    name: string;
    fullName: string;
    father: string;
    mother: string;
    photo: string;
  };
  bride: {
    name: string;
    fullName: string;
    father: string;
    mother: string;
    photo: string;
  };
}

export interface Event {
  name: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  description?: string;
}

export interface LoveStoryStep {
  id: number;
  date: string;
  title: string;
  description: string;
}

export interface RSVPData {
  name: string;
  message: string;
  attendance: 'yes' | 'no';
}