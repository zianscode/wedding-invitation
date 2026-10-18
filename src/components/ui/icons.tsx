const ROTATION = {
  right: "",
  left: "rotate-180",
  up: "-rotate-90",
} as const;

interface ArrowIconProps {
  direction?: keyof typeof ROTATION;
  className?: string;
}

/** Panah garis tipis, dipakai di tombol dan navigasi */
export function ArrowIcon({ direction = "right", className = "h-3 w-7" }: ArrowIconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={`${ROTATION[direction]} ${className}`}
    >
      <path d="M0 6h30M25 1l5 5-5 5" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "h-2 w-2" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M1 9 9 1M3 1h6v6" />
    </svg>
  );
}
