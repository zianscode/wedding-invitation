import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_ID } from "@/config/navigation";
import { wedding } from "@/data/wedding";

export function LoveStorySection() {
  const { story } = wedding;

  return (
    <section id={SECTION_ID.story} className="scroll-mt-16 bg-paper-deep px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading
            index="05"
            eyebrow="Cerita Kami"
            align="split"
            title={
              <>
                Perjalanan <em className="text-clay">kasih</em>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-sm text-center text-[0.95rem] leading-relaxed text-ink/65 lg:mx-0 lg:text-left">
              Setiap bab membawa kami lebih dekat — dan kini kami siap menulis bab terindah bersama.
            </p>
          </Reveal>
        </div>

        <ol className="border-t border-ink/15 lg:col-span-8">
          {story.map((milestone, index) => {
            const isLatest = index === story.length - 1;
            return (
              <Reveal
                as="li"
                key={milestone.year}
                className="grid grid-cols-[5rem_1fr] gap-5 border-b border-ink/15 py-8 sm:grid-cols-[8.5rem_1fr] sm:gap-10 sm:py-10"
              >
                <span
                  className={`font-display text-4xl leading-none font-light lining-nums sm:text-6xl ${
                    isLatest ? "text-clay" : "text-ink/35"
                  }`}
                >
                  {milestone.year}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight sm:text-3xl">{milestone.title}</h3>
                  <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink/65">{milestone.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
