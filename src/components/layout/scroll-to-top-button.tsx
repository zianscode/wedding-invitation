"use client";

import { ArrowIcon } from "@/components/ui/icons";
import { useScrolledPast } from "@/hooks/use-scrolled-past";

/** Tombol kembali ke atas — hanya di desktop, karena mobile sudah punya navigasi bawah */
export function ScrollToTopButton() {
  const isVisible = useScrolledPast(600);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      tabIndex={isVisible ? 0 : -1}
      className={`fixed right-8 bottom-8 z-40 hidden h-11 w-11 items-center justify-center border border-ink/20 bg-paper/90 text-ink backdrop-blur-sm transition-all duration-500 hover:border-ink hover:bg-ink hover:text-paper md:flex ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowIcon direction="up" className="h-3 w-6" />
    </button>
  );
}
