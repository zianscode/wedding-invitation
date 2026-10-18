"use client";

import { useAudio } from "@/providers/audio-provider";

/** Tinggi batang equalizer saat musik dijeda */
const IDLE_BAR_HEIGHTS = ["40%", "75%", "55%", "30%"];

export function MusicToggle() {
  const { isPlaying, toggle } = useAudio();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
      aria-pressed={isPlaying}
      className="group eyebrow flex items-center gap-3 text-ink/60 transition-colors hover:text-ink"
    >
      <span className="hidden sm:inline">{isPlaying ? "Musik" : "Putar Musik"}</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/25 transition-colors duration-300 group-hover:border-ink/60">
        <span aria-hidden className="flex h-3.5 items-end gap-0.75">
          {IDLE_BAR_HEIGHTS.map((height, index) => (
            <span
              key={index}
              className={`w-0.5 bg-current ${isPlaying ? "eq-bar" : ""}`}
              style={isPlaying ? { animationDelay: `${index * 0.15}s` } : { height }}
            />
          ))}
        </span>
      </span>
    </button>
  );
}
