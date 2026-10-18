"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_ID } from "@/config/navigation";
import { wedding } from "@/data/wedding";
import { parseTimeRange, toWibDate } from "@/lib/date";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const TARGET_TIME = toWibDate(wedding.date, parseTimeRange(wedding.events[0].time).start).getTime();

const TIME_UNITS = [
  { label: "Hari", extract: (ms: number) => Math.floor(ms / DAY) },
  { label: "Jam", extract: (ms: number) => Math.floor((ms % DAY) / HOUR) },
  { label: "Menit", extract: (ms: number) => Math.floor((ms % HOUR) / MINUTE) },
  { label: "Detik", extract: (ms: number) => Math.floor((ms % MINUTE) / SECOND) },
];

function getTimeUnits(remaining: number | null) {
  return TIME_UNITS.map(({ label, extract }) => ({
    label,
    display: remaining === null ? "––" : extract(remaining).toString().padStart(2, "0"),
  }));
}

function useNow() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    const frame = requestAnimationFrame(tick);
    const timer = setInterval(tick, SECOND);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, []);

  return now;
}

export function CountdownSection() {
  const now = useNow();
  const remaining = now === null ? null : Math.max(0, TARGET_TIME - now);
  const isOver = remaining === 0;

  return (
    <section id={SECTION_ID.countdown} className="bg-ink px-4 py-20 text-paper sm:px-8 sm:py-28 lg:px-12">
      <SectionHeading
        index="03"
        eyebrow="Hitung Mundur"
        tone="dark"
        title={
          isOver ? (
            <>
              Hari bahagia <em className="text-clay">telah tiba</em>
            </>
          ) : (
            <>
              Menuju hari <em className="text-clay">bahagia</em>
            </>
          )
        }
      />

      <Reveal
        delay={0.1}
        className="mx-auto mt-14 grid max-w-4xl grid-cols-4 divide-x divide-paper/15 border-y border-paper/15 sm:mt-16"
      >
        {getTimeUnits(remaining).map((unit) => (
          <div key={unit.label} className="py-7 text-center sm:py-10">
            <span className="block font-display text-[2.6rem] leading-none font-light tabular-nums lining-nums sm:text-7xl lg:text-8xl">
              {unit.display}
            </span>
            <span className="mt-3 block text-[0.58rem] tracking-[0.3em] text-paper/50 uppercase sm:text-xs">
              {unit.label}
            </span>
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-10 max-w-md text-center font-display text-xl text-balance text-paper/70 italic sm:text-2xl">
          {isOver
            ? "Terima kasih telah menjadi bagian dari hari bahagia kami."
            : "Tak sabar menanti hari bahagia bersama orang-orang terkasih."}
        </p>
      </Reveal>
    </section>
  );
}
