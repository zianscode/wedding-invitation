'use client'

import React, { createContext, useContext, useState, useEffect, useRef, useCallback, ReactNode } from 'react'

interface AudioContextType {
  isPlaying: boolean
  isLoading: boolean
  togglePlay: () => Promise<void>
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hasTriedAutoPlay = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!audioRef.current) {
      const audio = new Audio('/audio/about-you.mp3')
      audio.loop = true
      audio.preload = 'auto'
      audio.volume = 1 
      
      audio.addEventListener('play', () => setIsPlaying(true))
      audio.addEventListener('pause', () => setIsPlaying(false))
      audio.addEventListener('ended', () => setIsPlaying(false))
      audio.addEventListener('error', (e) => {
        console.error('Audio error:', e)
        setIsPlaying(false)
        setIsLoading(false)
      })
      
      audioRef.current = audio
    }

    setHasInitialized(true)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!hasInitialized || hasTriedAutoPlay.current || !audioRef.current) return

    const tryAutoPlay = () => {
      if (hasTriedAutoPlay.current) return
      
      hasTriedAutoPlay.current = true
      setIsLoading(true)
      
      setTimeout(() => {
        if (!audioRef.current) return
        
        const playPromise = audioRef.current.play()
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
              setIsLoading(false)
            })
            .catch((error) => {
              console.log('Auto-play dicegah:', error)
              setIsPlaying(false)
              setIsLoading(false)
              hasTriedAutoPlay.current = false
            })
        }
      }, 500)
    }

    tryAutoPlay()

    const handleGlobalClick = () => {
      if (!hasTriedAutoPlay.current && audioRef.current && !isPlaying) {
        tryAutoPlay()
      }
    }

    document.addEventListener('click', handleGlobalClick)
    
    return () => {
      document.removeEventListener('click', handleGlobalClick)
    }
  }, [hasInitialized, isPlaying])

  const togglePlay = useCallback(async () => {
    if (!audioRef.current) return
    
    setIsLoading(true)
    
    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        const playPromise = audioRef.current.play()
        
        if (playPromise !== undefined) {
          await playPromise
          setIsPlaying(true)
        }
      }
    } catch (error) {
      console.error('Error saat mengontrol pemutaran audio:', error)
      setIsPlaying(false)
    } finally {
      setIsLoading(false)
    }
  }, [isPlaying])

  const value = {
    isPlaying,
    isLoading,
    togglePlay,
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}