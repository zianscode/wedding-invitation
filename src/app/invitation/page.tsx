import { ScrollToTopButton } from "@/components/layout/scroll-to-top-button";
import { SiteHeader } from "@/components/layout/site-header";
import { ClosingSection } from "@/components/sections/closing-section";
import { CountdownSection } from "@/components/sections/countdown-section";
import { CoupleSection } from "@/components/sections/couple-section";
import { EventsSection } from "@/components/sections/events-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { LoveStorySection } from "@/components/sections/love-story-section";
import { OpeningSection } from "@/components/sections/opening-section";
import { RsvpSection } from "@/components/sections/rsvp-section";
import { getGuestName, type GuestSearchParams } from "@/lib/guest";

export default async function InvitationPage({ searchParams }: { searchParams: GuestSearchParams }) {
  const guest = getGuestName((await searchParams).to);

  return (
    <main className="paper-grain bg-paper pb-[calc(3.5rem+env(safe-area-inset-bottom))] text-ink md:pb-0">
      <SiteHeader />
      <ScrollToTopButton />

      <OpeningSection guest={guest} />
      <CoupleSection />
      <EventsSection />
      <CountdownSection />
      <GallerySection />
      <LoveStorySection />
      <RsvpSection guest={guest} />
      <ClosingSection />
    </main>
  );
}
