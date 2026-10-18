"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_ID } from "@/config/navigation";
import { wedding } from "@/data/wedding";
import type { GalleryPhoto } from "@/types/wedding";

// Pola grid editorial, berulang setiap 4 foto
const GRID_PATTERN = [
  "col-span-2 aspect-4/5 lg:col-span-7 lg:row-span-2 lg:aspect-auto",
  "aspect-3/4 lg:col-span-5 lg:aspect-5/4",
  "aspect-3/4 lg:col-span-5 lg:aspect-5/4",
  "col-span-2 aspect-16/10 lg:col-span-12 lg:aspect-21/9",
];

const padNumber = (value: number) => value.toString().padStart(2, "0");

interface LightboxProps {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
}

function Lightbox({ photos, index, onClose, onStep }: LightboxProps) {
  const photo = photos[index];

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onStep(1);
      if (event.key === "ArrowLeft") onStep(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onStep]);

  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
      onClick={onClose}
      className="fixed inset-0 z-60 flex flex-col bg-ink/95 text-paper backdrop-blur-sm"
    >
      <div className="eyebrow flex h-16 items-center justify-between px-4 text-paper/60 sm:px-8">
        <span>
          {padNumber(index + 1)} / {padNumber(photos.length)}
        </span>
        <button type="button" onClick={onClose} autoFocus className="transition-colors hover:text-paper">
          Tutup ✕
        </button>
      </div>

      <div onClick={stopPropagation} className="relative mx-4 flex-1 sm:mx-20">
        <Image key={photo.src} src={photo.src} alt={photo.alt} fill sizes="100vw" className="animate-fade-in object-contain" />
      </div>

      <div
        onClick={stopPropagation}
        className="flex items-center justify-between gap-4 px-4 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:px-8"
      >
        <button
          type="button"
          onClick={() => onStep(-1)}
          aria-label="Foto sebelumnya"
          className="p-2 text-paper/60 transition-colors hover:text-paper"
        >
          <ArrowIcon direction="left" className="h-3 w-8" />
        </button>
        <p className="text-center font-display text-lg italic sm:text-2xl">{photo.caption}</p>
        <button
          type="button"
          onClick={() => onStep(1)}
          aria-label="Foto berikutnya"
          className="p-2 text-paper/60 transition-colors hover:text-paper"
        >
          <ArrowIcon className="h-3 w-8" />
        </button>
      </div>
    </div>
  );
}

export function GallerySection() {
  const photos = wedding.gallery;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) => (current === null ? null : (current + delta + photos.length) % photos.length)),
    [photos.length]
  );

  return (
    <section id={SECTION_ID.gallery} className="scroll-mt-16 px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
      <SectionHeading
        index="04"
        eyebrow="Galeri"
        title={
          <>
            Potret <em className="text-clay">kebersamaan</em>
          </>
        }
      />

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-12">
        {photos.map((photo, index) => (
          <Reveal key={photo.src} delay={(index % 4) * 0.08} className={GRID_PATTERN[index % GRID_PATTERN.length]}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Perbesar foto: ${photo.caption}`}
              className="group relative block h-full w-full overflow-hidden bg-moss/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 60vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-[50%_35%] transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-ink/60 to-transparent px-4 pt-12 pb-3.5 text-left text-paper sm:px-5 sm:pb-4">
                <span className="font-display text-base leading-tight italic sm:text-xl">{photo.caption}</span>
                <span className="text-[0.6rem] tracking-[0.3em] text-paper/70">{padNumber(index + 1)}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {openIndex !== null && <Lightbox photos={photos} index={openIndex} onClose={close} onStep={step} />}
    </section>
  );
}
