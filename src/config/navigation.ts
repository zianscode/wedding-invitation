/** Id setiap section di halaman undangan — dipakai sebagai anchor (#id) */
export const SECTION_ID = {
  opening: "opening",
  couple: "couple",
  events: "events",
  countdown: "countdown",
  gallery: "gallery",
  story: "story",
  rsvp: "rsvp",
  closing: "closing",
} as const;

export type SectionId = (typeof SECTION_ID)[keyof typeof SECTION_ID];

export const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: SECTION_ID.couple, label: "Mempelai" },
  { id: SECTION_ID.events, label: "Acara" },
  { id: SECTION_ID.gallery, label: "Galeri" },
  { id: SECTION_ID.story, label: "Cerita" },
  { id: SECTION_ID.rsvp, label: "RSVP" },
];
