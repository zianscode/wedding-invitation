import Image from "next/image";
import { ArchFrame } from "@/components/ui/arch-frame";
import { Monogram } from "@/components/ui/monogram";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_ID } from "@/config/navigation";
import { wedding } from "@/data/wedding";
import { formatDotDate } from "@/lib/date";

const getSurname = (fullName: string) => fullName.split(" ").at(-1);

export function ClosingSection() {
  const { groom, bride } = wedding.couple;
  const photo = wedding.gallery[1] ?? wedding.gallery[0];
  const verse = wedding.verses.closing;

  return (
    <section id={SECTION_ID.closing} className="px-4 pt-20 sm:px-8 sm:pt-28 lg:px-12">
      <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-2 md:gap-16">
        <Reveal className="justify-self-center md:order-2">
          <ArchFrame outline="left" className="aspect-4/5 w-[min(76vw,22rem)]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 352px, 76vw"
              className="object-cover object-[45%_40%]"
            />
          </ArchFrame>
        </Reveal>

        <div className="md:order-1">
          <SectionHeading
            index="07"
            eyebrow="Terima Kasih"
            align="split"
            className="md:items-start md:text-left"
            title={
              <>
                Sampai jumpa di <em className="text-clay">hari bahagia</em>
              </>
            }
          />

          <Reveal delay={0.1} className="text-center md:text-left">
            <p className="mt-6 text-[0.95rem] leading-relaxed text-ink/65">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk
              memberikan doa restu.
            </p>

            <figure className="mt-8 border-l border-clay/60 pl-5 text-left">
              <blockquote className="font-display text-lg leading-snug text-ink/80 italic sm:text-xl">
                &ldquo;{verse.text}&rdquo;
              </blockquote>
              <figcaption className="eyebrow mt-2 text-ink/45">{verse.source}</figcaption>
            </figure>

            <p className="eyebrow mt-12 text-moss">Kami yang berbahagia</p>
            <p className="mt-3 font-display text-5xl leading-none font-light italic sm:text-6xl">
              {groom.name} <span className="text-clay">&amp;</span> {bride.name}
            </p>
            <p className="mt-4 text-sm text-ink/55">
              Keluarga {getSurname(groom.fullName)} &amp; Keluarga {getSurname(bride.fullName)}
            </p>
          </Reveal>
        </div>
      </div>

      <footer className="eyebrow mx-auto mt-20 flex max-w-6xl flex-col items-center gap-2 border-t border-ink/15 py-6 text-ink/45 sm:mt-28 sm:flex-row sm:justify-between">
        <Monogram className="text-base tracking-normal text-ink/70 normal-case" />
        <span>
          {formatDotDate(wedding.date)} · The Wedding of {groom.name} &amp; {bride.name}
        </span>
      </footer>
    </section>
  );
}
