"use client";

import Link from "next/link";
import { Monogram } from "@/components/ui/monogram";
import { NAV_ITEMS, SECTION_ID } from "@/config/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { MobileNav } from "./mobile-nav";
import { MusicToggle } from "./music-toggle";

// #opening ikut dipantau agar tidak ada menu aktif saat masih di section pertama
const OBSERVED_SECTIONS = [SECTION_ID.opening, ...NAV_ITEMS.map((item) => item.id)];

export function SiteHeader() {
  const isScrolled = useScrolledPast(40);
  const activeId = useActiveSection(OBSERVED_SECTIONS);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          isScrolled ? "bg-paper/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-4 flex h-14 items-center justify-between border-b transition-colors duration-500 sm:mx-8 sm:h-16 lg:mx-12 ${
            isScrolled ? "border-ink/15" : "border-transparent"
          }`}
        >
          <Link
            href="/landing"
            aria-label="Kembali ke halaman sampul"
            className="text-lg text-ink transition-opacity hover:opacity-70 sm:text-xl"
          >
            <Monogram />
          </Link>

          <nav aria-label="Navigasi bagian" className="hidden items-center gap-8 md:flex lg:gap-11">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1 text-[0.68rem] uppercase tracking-[0.3em] transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-clay after:transition-all after:duration-500 hover:text-ink ${
                    isActive ? "text-ink after:w-full" : "text-ink/50 after:w-0"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <MusicToggle />
        </div>
      </header>

      <MobileNav activeId={activeId} />
    </>
  );
}
