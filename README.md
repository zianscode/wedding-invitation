# Wedding Invitation

Undangan pernikahan digital Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

## Menjalankan

```bash
npm install
npm run dev    
npm run build   
npm run lint
```

## Halaman

| URL | Isi |
| --- | --- |
| `/` | Redirect ke `/landing` |
| `/landing` | Halaman sampul + tombol "Buka Undangan" |
| `/invitation` | Undangan lengkap (mempelai, acara, countdown, galeri, cerita, RSVP) |

Tambahkan `?to=Nama Tamu` untuk menampilkan nama tamu, contoh: `/landing?to=Budi%20Santoso`.
Nama tamu ikut terbawa ke `/invitation` dan mengisi otomatis form RSVP.

## Mengubah isi undangan

Semua konten ada di **`src/data/wedding.ts`** nama mempelai, tanggal, acara, dress code, galeri,
cerita, ayat, dan musik. Tanggal cukup ditulis sekali (`date`); hari, bulan, countdown, dan link
kalender dihitung otomatis.

## Struktur

```
src/
├── app/                  
├── components/
│   ├── layout/           
│   ├── sections/        
│   └── ui/               
├── config/navigation.ts  
├── data/wedding.ts       
├── hooks/                
├── lib/                 
├── providers/            
└── types/wedding.ts      

public/
├── audio/background-music.mp3
└── images/
    ├── cover.png         
    ├── couple/           
    └── gallery/          
```

## Konvensi

- **Nama file & folder:** `kebab-case` (`site-header.tsx`, `use-active-section.ts`, `beach-sunset.png`).
- **Komponen:** `PascalCase` dengan named export (`export function SiteHeader`). Default export hanya
  untuk file khusus Next.js (`page.tsx`, `layout.tsx`).
- **Section:** berakhiran `-section.tsx`, id-nya diambil dari `SECTION_ID` di `config/navigation.ts`.
- **Import:** selalu lewat alias `@/` (contoh: `@/components/ui/reveal`).
- **Client component:** tambahkan `"use client"` hanya bila butuh state, efek, atau event browser.
- **Styling:** utility Tailwind. Token warna (`paper`, `ink`, `moss`, `clay`) dan utility bersama
  (`eyebrow`, `text-link`, `button-primary`, `paper-grain`) didefinisikan di `src/app/globals.css`.

## Catatan

- Form RSVP belum tersimpan ke mana pun lihat `TODO` di `src/components/sections/rsvp-section.tsx`.
- Musik diputar pada klik pertama pengunjung karena browser memblokir autoplay.
