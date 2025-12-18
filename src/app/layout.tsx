import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import './globals.css'
import { AudioProvider } from './context/AudioContext'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair' 
})
const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing' 
})

export const metadata: Metadata = {
  title: 'The Wedding of Alexander & Chloe',
  description: 'Undangan pernikahan Alexander & Chloe',
  keywords: 'wedding, invitation, pernikahan, undangan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.className} ${playfair.variable} ${dancing.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  )
}