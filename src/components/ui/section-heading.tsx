import type { ReactNode } from "react";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "split";
  className?: string;
}

const ALIGNMENT = {
  center: "items-center text-center",
  split: "items-center text-center lg:items-start lg:text-left",
} as const;

export function SectionHeading({
  index,
  eyebrow,
  title,
  tone = "light",
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <Reveal className={`flex flex-col ${ALIGNMENT[align]} ${className}`}>
      <p className={`eyebrow flex items-center gap-3 sm:text-xs ${isDark ? "text-paper/60" : "text-moss"}`}>
        <span className="font-display text-sm normal-case italic tracking-normal text-clay">{index}</span>
        <span className={`h-px w-8 ${isDark ? "bg-paper/30" : "bg-moss/40"}`} />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-[2.75rem] font-light leading-[0.95] tracking-[-0.01em] sm:text-6xl lg:text-7xl">
        {title}
      </h2>
    </Reveal>
  );
}
