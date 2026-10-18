import type { WeddingEvent } from "@/types/wedding";
import { parseTimeRange, toWibDate } from "./date";

const toCalendarStamp = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export function getGoogleCalendarUrl(event: WeddingEvent, isoDate: string, title: string) {
  const { start, end } = parseTimeRange(event.time);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${event.name} — ${title}`,
    dates: `${toCalendarStamp(toWibDate(isoDate, start))}/${toCalendarStamp(toWibDate(isoDate, end))}`,
    location: `${event.venue}, ${event.address}`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}
