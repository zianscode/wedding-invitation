import { NAV_ITEMS } from "@/config/navigation";

interface MobileNavProps {
  activeId: string | null;
}

/** Navigasi bawah khusus mobile, menempel di atas gesture bar */
export function MobileNav({ activeId }: MobileNavProps) {
  return (
    <nav
      aria-label="Navigasi bagian (mobile)"
      className="fixed inset-x-0 bottom-0 z-50 bg-ink pb-[env(safe-area-inset-bottom)] text-paper md:hidden"
    >
      <ul className="grid grid-cols-5">
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`flex h-14 flex-col items-center justify-center gap-1.5 text-[0.58rem] uppercase tracking-[0.16em] transition-colors ${
                  isActive ? "text-paper" : "text-paper/50"
                }`}
              >
                <span className={`h-1 w-1 rounded-full transition-colors ${isActive ? "bg-clay" : "bg-transparent"}`} />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
