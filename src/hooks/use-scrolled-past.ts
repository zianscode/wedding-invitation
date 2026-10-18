"use client";

import { useEffect, useState } from "react";

/** `true` setelah halaman di-scroll melewati `offset` piksel */
export function useScrolledPast(offset: number) {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsPast(window.scrollY > offset);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isPast;
}
