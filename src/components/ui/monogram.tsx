import { wedding } from "@/data/wedding";

export function Monogram({ className = "" }: { className?: string }) {
  const { groom, bride } = wedding.couple;

  return (
    <span className={`font-display italic ${className}`}>
      {groom.name[0]}
      <span className="px-0.5 text-clay">&amp;</span>
      {bride.name[0]}
    </span>
  );
}
