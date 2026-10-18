export interface Person {
  name: string;
  fullName: string;
  father: string;
  mother: string;
  photo: string;
}

export interface Couple {
  groom: Person;
  bride: Person;
}

export interface WeddingEvent {
  name: string;
  /** Rentang waktu dalam WIB, contoh: "10.00 - 12.00 WIB" */
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

export interface DressCode {
  label: string;
  palette: string[];
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
}

export interface Verse {
  text: string;
  source: string;
}

export interface Wedding {
  couple: Couple;
  /** Tanggal pernikahan dalam format ISO (YYYY-MM-DD), zona waktu WIB */
  date: string;
  city: string;
  events: WeddingEvent[];
  dressCode: DressCode;
  gallery: GalleryPhoto[];
  story: StoryMilestone[];
  verses: {
    opening: Verse;
    closing: Verse;
  };
  music: {
    src: string;
    title: string;
  };
}
