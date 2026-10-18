import type { ReactNode } from "react";

interface ArchFrameProps {
  children: ReactNode;
  /** Ukuran & posisi bingkai */
  className?: string;
  /** Kelas tambahan untuk area foto (mis. animasi) */
  innerClassName?: string;
  /** Kelas tambahan untuk garis bingkai di belakang foto */
  outlineClassName?: string;
  /** Arah geser garis bingkai */
  outline?: "right" | "left";
}

/** Bingkai foto berbentuk lengkung (arch) dengan garis bingkai yang bergeser */
export function ArchFrame({
  children,
  className = "",
  innerClassName = "",
  outlineClassName = "",
  outline = "right",
}: ArchFrameProps) {
  const offset = outline === "right" ? "translate-x-3" : "-translate-x-3";

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className={`absolute inset-0 ${offset} -translate-y-3 rounded-t-full border border-clay/50 ${outlineClassName}`}
      />
      <div className={`relative h-full overflow-hidden rounded-t-full bg-moss/10 ${innerClassName}`}>{children}</div>
    </div>
  );
}
