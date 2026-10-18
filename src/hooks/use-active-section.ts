"use client";

import { useEffect, useState } from "react";

/** Id section yang sedang berada di tengah layar */
export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const idsKey = ids.join(",");

  useEffect(() => {
    const sections = idsKey
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
}
