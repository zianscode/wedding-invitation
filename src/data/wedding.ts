import type { Wedding } from "@/types/wedding";

/**
 * Seluruh konten undangan. Ubah data di sini — tampilan akan mengikuti.
 */
export const wedding = {
  couple: {
    groom: {
      name: "Alexander",
      fullName: "Alexander Evans",
      father: "Bapak Michael Evans",
      mother: "Ibu Claire Evans",
      photo: "/images/couple/groom.png",
    },
    bride: {
      name: "Chloe",
      fullName: "Chloe Li",
      father: "Bapak Wei Chen Li",
      mother: "Ibu Mei Lin Li",
      photo: "/images/couple/bride.png",
    },
  },

  date: "2026-12-12",
  city: "Jakarta Pusat",

  events: [
    {
      name: "Pemberkatan Nikah",
      time: "10.00 - 12.00 WIB",
      venue: "Gereja Katolik St. Petrus",
      address: "Jl. Diponegoro No. 45, Jakarta Pusat",
      mapUrl: "https://maps.google.com/?q=Gereja+Katolik+St+Petrus+Jakarta",
    },
    {
      name: "Resepsi Pernikahan",
      time: "18.00 - 21.00 WIB",
      venue: "Grand Ballroom Hotel Majestic",
      address: "Jl. Sudirman No. 456, Jakarta Pusat",
      mapUrl: "https://maps.google.com/?q=Hotel+Majestic+Jakarta",
    },
  ],

  dressCode: {
    label: "Pastel / Formal Attire",
    palette: ["#E6CFC2", "#D8DECB", "#E9DFCA", "#CBD4DC"],
  },

  gallery: [
    {
      src: "/images/gallery/tree-lane.png",
      alt: "Prewedding di taman",
      caption: "Kebersamaan di taman bunga",
    },
    {
      src: "/images/gallery/park-path.png",
      alt: "Foto candid di jalan setapak taman",
      caption: "Momen tawa bahagia",
    },
    {
      src: "/images/gallery/beach-sunset.png",
      alt: "Foto berdua di pantai saat senja",
      caption: "Senja bersama",
    },
    {
      src: "/images/gallery/city-street.png",
      alt: "Foto formal di jalanan kota",
      caption: "Elegant moments",
    },
  ],

  story: [
    {
      year: "2022",
      title: "Pertemuan di Youth Fellowship",
      description:
        "Kami pertama kali bertemu di acara persekutuan pemuda gereja. Tuhan mempertemukan kami di tempat yang indah untuk memulai perjalanan iman bersama.",
    },
    {
      year: "2023",
      title: "Menjalin Hubungan dalam Kasih Kristus",
      description:
        "Setahun kemudian, kami memutuskan untuk menjalin hubungan dengan prinsip kasih yang diajarkan Tuhan Yesus, saling membangun dalam iman.",
    },
    {
      year: "2024",
      title: "Komitmen di Hadapan Tuhan",
      description:
        "Kami berkomitmen untuk saling mendukung dan mempercayakan hubungan kami pada rencana Tuhan yang terbaik.",
    },
    {
      year: "2025",
      title: "Lamaran di Gereja",
      description:
        "Di hadapan altar gereja yang penuh makna, Alexander melamar Chloe dengan doa dan berkat dari keluarga serta jemaat gereja.",
    },
    {
      year: "2026",
      title: "Hari Pernikahan",
      description:
        "Hari yang dinantikan untuk mengikat janji suci di hadapan Tuhan, keluarga, dan sahabat-sahabat terkasih.",
    },
  ],

  verses: {
    opening: {
      text: "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Tuhan, tidak boleh diceraikan manusia.",
      source: "Matius 19:6",
    },
    closing: {
      text: "Kasih itu sabar; kasih itu murah hati; ia tidak cemburu. Ia tidak memegahkan diri dan tidak sombong.",
      source: "1 Korintus 13:4",
    },
  },

  music: {
    src: "/audio/background-music.mp3",
    title: "About You",
  },
} satisfies Wedding;
