import { Reveal } from "@/components/ui/reveal";
import { SECTION_ID } from "@/config/navigation";
import { wedding } from "@/data/wedding";
import { formatLongDate } from "@/lib/date";

interface OpeningSectionProps {
  guest?: string;
}

export function OpeningSection({ guest }: OpeningSectionProps) {
  const verse = wedding.verses.opening;

  return (
    <section
      id={SECTION_ID.opening}
      className="flex min-h-[calc(100svh-3.5rem-env(safe-area-inset-bottom))] flex-col justify-center px-4 pt-20 pb-12 sm:px-8 sm:pt-24 sm:pb-16 md:min-h-svh"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <p className="eyebrow text-ink/50 sm:text-xs">Kepada Yth.</p>
          <p className="mt-2 font-display text-2xl wrap-break-word sm:text-3xl">{guest || "Bapak/Ibu/Saudara/i"}</p>
        </Reveal>

        <Reveal delay={0.1} className="my-7 h-8 w-px bg-ink/25 sm:my-9 sm:h-10" />

        <Reveal delay={0.15} as="figure">
          <blockquote className="font-display text-[1.9rem] leading-[1.15] font-light text-balance italic sm:text-[2.6rem] lg:text-[3.25rem] 2xl:text-[3.9rem]">
            &ldquo;{verse.text}&rdquo;
          </blockquote>
          <figcaption className="eyebrow mt-6 text-clay sm:text-xs">{verse.source}</figcaption>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 max-w-xl text-[0.95rem] leading-relaxed text-pretty text-ink/70 sm:mt-10 sm:text-base">
            Dengan penuh rasa syukur dan sukacita di dalam Tuhan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir
            dalam pemberkatan dan resepsi pernikahan kami pada{" "}
            <span className="text-ink">{formatLongDate(wedding.date)}</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
