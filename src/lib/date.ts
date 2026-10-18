const LOCALE = "id-ID";
const TIME_ZONE = "Asia/Jakarta";

/** Tanggal ISO + jam "10.00" (WIB) → Date */
export function toWibDate(isoDate: string, clock = "00.00") {
  const [hours, minutes = "00"] = clock.split(".");
  return new Date(`${isoDate}T${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:00+07:00`);
}

/** "10.00 - 12.00 WIB" → { start: "10.00", end: "12.00" } */
export function parseTimeRange(time: string) {
  const [start, end] = time.replace(/\s*WIB\s*$/i, "").split(/\s*-\s*/);
  return { start, end: end ?? start };
}

/** "2026-12-12" → "Sabtu, 12 Desember 2026" */
export function formatLongDate(isoDate: string) {
  return new Intl.DateTimeFormat(LOCALE, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TIME_ZONE,
  }).format(toWibDate(isoDate, "12.00"));
}

/** "2026-12-12" → { weekday: "Sabtu", day: "12", month: "Desember", year: "2026" } */
export function getDateParts(isoDate: string) {
  const parts = new Intl.DateTimeFormat(LOCALE, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TIME_ZONE,
  }).formatToParts(toWibDate(isoDate, "12.00"));
  const pick = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";

  return { weekday: pick("weekday"), day: pick("day"), month: pick("month"), year: pick("year") };
}

/** "2026-12-12" → "12.12.2026" */
export function formatDotDate(isoDate: string) {
  return isoDate.split("-").reverse().join(".");
}

/** "2026-12-12" → "XII · XII · MMXXVI" */
export function formatRomanDate(isoDate: string) {
  return isoDate
    .split("-")
    .reverse()
    .map((part) => toRoman(Number(part)))
    .join(" · ");
}

const ROMAN_NUMERALS: [number, string][] = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"],
  [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

function toRoman(value: number) {
  let remaining = value;
  let result = "";
  for (const [amount, numeral] of ROMAN_NUMERALS) {
    while (remaining >= amount) {
      result += numeral;
      remaining -= amount;
    }
  }
  return result;
}
