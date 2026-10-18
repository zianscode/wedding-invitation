import { ExternalLinkIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_ID } from "@/config/navigation";
import { wedding } from "@/data/wedding";
import { getGoogleCalendarUrl } from "@/lib/calendar";
import { getDateParts, parseTimeRange } from "@/lib/date";
import type { WeddingEvent } from "@/types/wedding";

const CALENDAR_TITLE = `Pernikahan ${wedding.couple.groom.name} & ${wedding.couple.bride.name}`;

function EventItem({ event, delay }: { event: WeddingEvent; delay: number }) {
  const { start, end } = parseTimeRange(event.time);

  return (
    <Reveal
      as="li"
      delay={delay}
      className="grid gap-x-10 gap-y-4 border-b border-ink/15 py-9 sm:grid-cols-[7.5rem_1fr] sm:py-11"
    >
      <div>
        <p className="font-display text-5xl leading-none font-light lining-nums">{start}</p>
        <p className="mt-2 text-[0.65rem] tracking-[0.3em] text-ink/50 uppercase">s.d. {end} WIB</p>
      </div>

      <div>
        <h3 className="font-display text-3xl leading-tight sm:text-4xl">{event.name}</h3>
        <p className="mt-3 text-ink/85">{event.venue}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink/60">{event.address}</p>

        <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
          <a href={event.mapUrl} target="_blank" rel="noopener noreferrer" className="text-link">
            Petunjuk Arah <ExternalLinkIcon />
          </a>
          <a
            href={getGoogleCalendarUrl(event, wedding.date, CALENDAR_TITLE)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Simpan ke Kalender <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export function EventsSection() {
  const { weekday, day, month, year } = getDateParts(wedding.date);
  const { dressCode } = wedding;

  return (
    <section id={SECTION_ID.events} className="scroll-mt-16 bg-paper-deep px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            index="02"
            eyebrow="Acara"
            align="split"
            title={
              <>
                Hari yang <em className="text-clay">dinanti</em>
              </>
            }
          />

          <Reveal delay={0.1} className="mt-10 flex items-end justify-center gap-5 lg:mt-14 lg:justify-start">
            <span className="font-display text-[7.5rem] leading-[0.75] font-light lining-nums sm:text-[9rem] lg:text-[11rem]">
              {day}
            </span>
            <span className="pb-1 text-left">
              <span className="eyebrow block text-moss">{weekday}</span>
              <span className="mt-2 block font-display text-2xl leading-none sm:text-3xl">
                {month} {year}
              </span>
            </span>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ol className="border-t border-ink/15">
            {wedding.events.map((event, index) => (
              <EventItem key={event.name} event={event} delay={index * 0.1} />
            ))}
          </ol>

          <Reveal delay={0.2} className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow text-moss">Dress Code</p>
              <p className="mt-2 font-display text-2xl">{dressCode.label}</p>
            </div>
            <ul aria-label="Palet warna yang disarankan" className="flex gap-2.5">
              {dressCode.palette.map((color) => (
                <li
                  key={color}
                  title={color}
                  className="h-9 w-9 rounded-full border border-ink/10"
                  style={{ backgroundColor: color }}
                />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
