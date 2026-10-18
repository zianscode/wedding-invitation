import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArchFrame } from "@/components/ui/arch-frame";
import { ArrowIcon } from "@/components/ui/icons";
import { Monogram } from "@/components/ui/monogram";
import { wedding } from "@/data/wedding";
import { formatDotDate, formatLongDate, formatRomanDate, getDateParts, parseTimeRange } from "@/lib/date";
import { getGuestName, withGuest, type GuestSearchParams } from "@/lib/guest";

/** Jeda animasi `.reveal` (detik) */
const revealDelay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export default async function LandingPage({ searchParams }: { searchParams: GuestSearchParams }) {
  const guest = getGuestName((await searchParams).to);
  const { groom, bride } = wedding.couple;
  const { day, month, year } = getDateParts(wedding.date);

  return (
    <main className="paper-grain flex min-h-svh flex-col overflow-hidden bg-paper text-ink">
      <header
        className="reveal mx-4 flex items-center justify-between border-b border-ink/15 py-4 text-[0.68rem] tracking-[0.3em] uppercase sm:mx-8 sm:py-5 sm:text-xs lg:mx-12"
        style={revealDelay(0.1)}
      >
        <Monogram className="text-base tracking-normal normal-case sm:text-lg" />
        <span className="hidden text-ink/60 sm:inline">Undangan Pernikahan</span>
        <span className="text-ink/60">{formatDotDate(wedding.date)}</span>
      </header>

      <div
        className="grid flex-1 items-center gap-8 px-4 py-8 sm:gap-10 sm:px-8 sm:py-10 lg:grid-cols-12 lg:gap-6 lg:px-12 lg:py-6 [@media(max-height:700px)]:gap-6 [@media(max-height:700px)]:py-5"
      >
        <figure className="relative justify-self-center lg:order-2 lg:col-span-5">
          <ArchFrame
            className="aspect-3/4 h-[min(40svh,24rem)] sm:h-[min(46svh,30rem)] lg:h-[min(74svh,44rem)]"
            innerClassName="arch-reveal"
            outlineClassName="reveal sm:translate-x-4 sm:-translate-y-4"
          >
            <Image
              src="/images/cover.png"
              alt={`${groom.name} dan ${bride.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="arch-settle object-cover object-[50%_45%]"
            />
          </ArchFrame>
          <figcaption
            className="reveal absolute bottom-0 -left-9 hidden rotate-180 text-[0.65rem] tracking-[0.4em] text-ink/50 uppercase [writing-mode:vertical-rl] lg:block"
            style={revealDelay(1.2)}
          >
            {wedding.city} — {formatRomanDate(wedding.date)}
          </figcaption>
        </figure>

        <section className="flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:pl-4 lg:text-left xl:pl-10">
          <p
            className="reveal eyebrow flex items-center gap-3 text-moss sm:text-xs [@media(max-height:700px)]:max-lg:hidden"
            style={revealDelay(0.3)}
          >
            <span className="h-px w-8 bg-moss/50" />
            The Wedding of
          </p>

          <h1
            className="reveal mt-4 font-display text-[3.4rem] leading-[0.9] font-light tracking-[-0.01em] sm:mt-5 sm:text-[5rem] lg:text-[min(6.25rem,13svh)] xl:text-[min(8.25rem,14.5svh)] [@media(max-height:700px)]:text-[3rem] [@media(max-height:700px)]:max-lg:mt-0"
            style={revealDelay(0.45)}
          >
            <span className="block">{groom.name}</span>
            <span className="block lg:pl-[0.9em]">
              <span className="text-clay italic">&amp;</span> {bride.name}
            </span>
          </h1>

          <p
            className="reveal mt-6 hidden max-w-md text-[0.95rem] leading-relaxed text-ink/70 sm:block lg:mt-[min(2rem,3.5svh)]"
            style={revealDelay(0.6)}
          >
            Dengan memohon rahmat dan berkat Tuhan, kami mengundang Anda untuk hadir dan berbagi sukacita di hari
            pernikahan kami.
          </p>

          <p className="reveal mt-3 font-display text-lg text-ink/70 italic sm:hidden" style={revealDelay(0.6)}>
            {formatLongDate(wedding.date)}
          </p>

          <dl
            className="reveal mt-8 hidden w-full max-w-md grid-cols-2 divide-x divide-ink/15 border-y border-ink/15 text-left sm:grid lg:mt-[min(2rem,3.5svh)]"
            style={revealDelay(0.7)}
          >
            {wedding.events.map((event) => (
              <div key={event.name} className="px-4 py-4 first:pl-0 last:pr-0">
                <dt className="eyebrow text-moss">{event.name.split(" ")[0]}</dt>
                <dd className="mt-1.5 font-display text-2xl leading-none">
                  {parseTimeRange(event.time).start}
                  <span className="ml-1.5 font-sans text-xs tracking-wider text-ink/50">WIB</span>
                </dd>
                <dd className="mt-1.5 text-xs leading-snug text-ink/60">{event.venue}</dd>
              </div>
            ))}
          </dl>

          <div
            className="reveal mt-7 flex w-full max-w-xs flex-col items-stretch gap-5 sm:mt-8 sm:max-w-md sm:flex-row sm:items-end sm:gap-8 [@media(max-height:700px)]:mt-5"
            style={revealDelay(0.85)}
          >
            <div className="text-center sm:flex-1 sm:text-left">
              <p className="eyebrow text-ink/50">Kepada Yth.</p>
              <p className="mt-1 font-display text-xl leading-tight wrap-break-word sm:text-2xl">
                {guest || "Bapak/Ibu/Saudara/i"}
              </p>
            </div>

            <Link href={withGuest("/invitation", guest)} className="button-primary group">
              Buka Undangan
              <ArrowIcon className="h-3 w-7 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </section>
      </div>

      <footer
        className="reveal mx-4 flex justify-center border-t border-ink/15 py-4 text-[0.62rem] tracking-[0.35em] text-ink/45 uppercase sm:mx-8 lg:mx-12 lg:justify-start"
        style={revealDelay(1.1)}
      >
        {wedding.city} · {day} {month} {year}
      </footer>
    </main>
  );
}
