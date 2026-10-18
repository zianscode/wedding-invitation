import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { wedding } from "@/data/wedding";
import { AudioProvider } from "@/providers/audio-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const { groom, bride } = wedding.couple;

export const metadata: Metadata = {
  title: `The Wedding of ${groom.name} & ${bride.name}`,
  description: `Undangan pernikahan ${groom.name} & ${bride.name}`,
  keywords: ["wedding", "invitation", "pernikahan", "undangan"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}
