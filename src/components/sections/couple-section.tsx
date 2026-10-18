import Image from "next/image";
import { ArchFrame } from "@/components/ui/arch-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_ID } from "@/config/navigation";
import { wedding } from "@/data/wedding";
import type { Person } from "@/types/wedding";

interface PersonProfileProps {
  person: Person;
  role: string;
  parentLabel: string;
  delay?: number;
  className?: string;
}

function PersonProfile({ person, role, parentLabel, delay = 0, className = "" }: PersonProfileProps) {
  return (
    <Reveal delay={delay} className={`flex flex-col items-center text-center ${className}`}>
      <ArchFrame className="aspect-3/4 w-[min(68vw,16rem)] lg:w-72">
        <Image
          src={person.photo}
          alt={`Foto ${person.fullName}`}
          fill
          sizes="(min-width: 1024px) 288px, 68vw"
          className="object-cover"
        />
      </ArchFrame>

      <p className="eyebrow mt-9 text-moss">{role}</p>
      <h3 className="mt-3 font-display text-[2.5rem] leading-none font-light sm:text-5xl">{person.fullName}</h3>
      <p className="mt-5 text-sm leading-relaxed text-ink/60">
        {parentLabel}
        <br />
        <span className="text-ink/85">{person.father}</span>
        <span className="mx-1.5 font-display text-clay italic">&amp;</span>
        <span className="text-ink/85">{person.mother}</span>
      </p>
    </Reveal>
  );
}

export function CoupleSection() {
  const { groom, bride } = wedding.couple;

  return (
    <section id={SECTION_ID.couple} className="scroll-mt-16 px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
      <SectionHeading
        index="01"
        eyebrow="Mempelai"
        title={
          <>
            Dua hati, <em className="text-clay">satu janji</em>
          </>
        }
      />

      <div className="mx-auto mt-16 grid max-w-5xl items-start gap-6 sm:mt-20 md:grid-cols-[1fr_auto_1fr] md:gap-4 lg:gap-10">
        <PersonProfile person={groom} role="Mempelai Pria" parentLabel="Putra dari" />

        <Reveal
          delay={0.15}
          className="self-center justify-self-center py-4 font-display text-7xl font-light text-clay italic md:py-0 md:text-8xl lg:text-9xl"
        >
          <span aria-hidden>&amp;</span>
        </Reveal>

        <PersonProfile person={bride} role="Mempelai Wanita" parentLabel="Putri dari" delay={0.2} className="md:mt-28" />
      </div>
    </section>
  );
}
