const MAX_GUEST_NAME_LENGTH = 60;

/** Bentuk `searchParams` halaman yang menerima nama tamu lewat `?to=` */
export type GuestSearchParams = Promise<{ to?: string | string[] }>;

/** Nama tamu dari query `?to=`, dibatasi panjangnya agar tidak merusak layout */
export function getGuestName(to?: string | string[]) {
  const value = (Array.isArray(to) ? to[0] : to)?.trim().slice(0, MAX_GUEST_NAME_LENGTH);
  return value || undefined;
}

export function withGuest(path: string, guest?: string) {
  return guest ? `${path}?to=${encodeURIComponent(guest)}` : path;
}
