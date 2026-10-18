"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { wedding } from "@/data/wedding";

interface AudioContextValue {
  isPlaying: boolean;
  toggle: () => void;
}

const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(wedding.music.src);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const syncPlaying = () => setIsPlaying(!audio.paused);
    audio.addEventListener("play", syncPlaying);
    audio.addEventListener("pause", syncPlaying);

    const unlock = () => audio.play().catch(() => {});
    audio.play().catch(() => window.addEventListener("click", unlock, { once: true }));

    return () => {
      window.removeEventListener("click", unlock);
      audio.removeEventListener("play", syncPlaying);
      audio.removeEventListener("pause", syncPlaying);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  }, []);

  return <AudioContext.Provider value={{ isPlaying, toggle }}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio harus dipakai di dalam <AudioProvider>");
  return context;
}
