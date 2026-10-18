"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_ID } from "@/config/navigation";

type Attendance = "hadir" | "tidak-hadir" | "belum-pasti";

interface RsvpFormData {
  name: string;
  email: string;
  attendance: Attendance | "";
  guests: number;
  message: string;
}

const ATTENDANCE_OPTIONS: { value: Attendance; label: string; thanks: string }[] = [
  { value: "hadir", label: "Hadir", thanks: "Kami menantikan kehadiran Anda di hari bahagia kami." },
  { value: "tidak-hadir", label: "Tidak Hadir", thanks: "Doa dan restu Anda tetap sangat berarti bagi kami." },
  { value: "belum-pasti", label: "Belum Pasti", thanks: "Kabari kami kembali bila sudah pasti, ya." },
];

const MIN_GUESTS = 1;
const MAX_GUESTS = 5;

const FIELD_CLASS =
  "mt-2 w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink transition-colors placeholder:text-ink/35 focus:border-ink focus:outline-none";
const STEPPER_CLASS =
  "flex h-11 w-11 items-center justify-center border border-ink/25 text-lg transition-colors hover:border-ink disabled:opacity-30";

interface RsvpSectionProps {
  guest?: string;
}

export function RsvpSection({ guest }: RsvpSectionProps) {
  const [form, setForm] = useState<RsvpFormData>({
    name: guest ?? "",
    email: "",
    attendance: "",
    guests: MIN_GUESTS,
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const changeGuests = (delta: number) => {
    const guests = Math.min(MAX_GUESTS, Math.max(MIN_GUESTS, form.guests + delta));
    setForm({ ...form, guests });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO: kirim `form` ke backend (API route / Google Sheets) — saat ini data belum disimpan
    setIsSubmitted(true);
  };

  const firstName = form.name.trim().split(" ")[0];
  const thanks = ATTENDANCE_OPTIONS.find((option) => option.value === form.attendance)?.thanks;

  return (
    <section id={SECTION_ID.rsvp} className="scroll-mt-16 px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            index="06"
            eyebrow="RSVP"
            align="split"
            title={
              <>
                Konfirmasi <em className="text-clay">kehadiran</em>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-sm text-center text-[0.95rem] leading-relaxed text-ink/65 lg:mx-0 lg:text-left">
              Mohon kesediaan Bapak/Ibu/Saudara/i untuk mengonfirmasi kehadiran, agar kami dapat mempersiapkan segala
              sesuatunya dengan baik.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          {isSubmitted ? (
            <div role="status" className="border border-ink/15 px-6 py-14 text-center sm:px-12">
              <p className="eyebrow text-moss">Terkirim</p>
              <p className="mt-4 font-display text-4xl font-light sm:text-5xl">
                Terima kasih{firstName && `, ${firstName}`}.
              </p>
              <p className="mx-auto mt-4 max-w-sm text-ink/65">{thanks}</p>
              <button type="button" onClick={() => setIsSubmitted(false)} className="text-link mt-8">
                Ubah Jawaban
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-9">
              <div className="grid gap-9 sm:grid-cols-2 sm:gap-8">
                <div>
                  <label htmlFor="name" className="eyebrow block text-ink/55">
                    Nama Lengkap <span className="text-clay">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Nama Anda"
                    className={FIELD_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow block text-ink/55">
                    Email <span className="tracking-normal text-ink/40 normal-case">(opsional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="nama@email.com"
                    className={FIELD_CLASS}
                  />
                </div>
              </div>

              <fieldset>
                <legend className="eyebrow text-ink/55">
                  Kehadiran <span className="text-clay">*</span>
                </legend>
                <div className="mt-3 grid grid-cols-3 divide-x divide-ink/20 border border-ink/20">
                  {ATTENDANCE_OPTIONS.map((option) => (
                    <label
                      key={option.value}
                      className="relative flex cursor-pointer items-center justify-center px-2 py-4 text-center text-[0.68rem] tracking-[0.18em] text-ink/70 uppercase transition-colors hover:bg-ink/5 has-checked:bg-ink has-checked:text-paper has-focus-visible:outline-2 has-focus-visible:-outline-offset-4 has-focus-visible:outline-clay sm:text-xs sm:tracking-[0.25em]"
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={option.value}
                        checked={form.attendance === option.value}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {form.attendance === "hadir" && (
                <div className="animate-fade-up">
                  <p id="guests-label" className="eyebrow text-ink/55">
                    Jumlah Tamu
                  </p>
                  <div role="group" aria-labelledby="guests-label" className="mt-3 flex items-center gap-6">
                    <button
                      type="button"
                      onClick={() => changeGuests(-1)}
                      disabled={form.guests <= MIN_GUESTS}
                      aria-label="Kurangi tamu"
                      className={STEPPER_CLASS}
                    >
                      −
                    </button>
                    <output aria-live="polite" className="min-w-16 text-center font-display text-3xl lining-nums">
                      {form.guests}
                      <span className="ml-1.5 font-sans text-xs text-ink/50">orang</span>
                    </output>
                    <button
                      type="button"
                      onClick={() => changeGuests(1)}
                      disabled={form.guests >= MAX_GUESTS}
                      aria-label="Tambah tamu"
                      className={STEPPER_CLASS}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="message" className="eyebrow block text-ink/55">
                  Ucapan &amp; Doa
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tulis ucapan dan doa untuk kami…"
                  className={`${FIELD_CLASS} resize-none`}
                />
              </div>

              <button type="submit" className="button-primary group w-full sm:w-auto">
                Kirim Konfirmasi
                <ArrowIcon className="h-3 w-7 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
