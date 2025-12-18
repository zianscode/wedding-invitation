'use client'

import { useState, useEffect, useRef } from 'react'

interface UseAudioProps {
  src: string
  volume?: number
  loop?: boolean
  autoplay?: boolean
}

export function useAudio({
  volume = 0.5,
  loop = true,
}: UseAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentVolume, setCurrentVolume] = useState(volume)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = currentVolume
    audio.loop = loop
    audio.muted = isMuted

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentVolume, isMuted, loop])

  const play = () => {
    audioRef.current?.play().catch(console.error)
  }

  const pause = () => {
    audioRef.current?.pause()
  }

  const togglePlay = () => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const setVolume = (vol: number) => {
    const clampedVol = Math.max(0, Math.min(1, vol))
    setCurrentVolume(clampedVol)
    setIsMuted(clampedVol === 0)
  }

  return {
    audioRef,
    isPlaying,
    isMuted,
    volume: currentVolume,
    play,
    pause,
    togglePlay,
    toggleMute,
    setVolume
  }
}