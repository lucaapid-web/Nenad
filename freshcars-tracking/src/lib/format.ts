const WEEKDAYS = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const pad = (n: number) => String(n).padStart(2, '0');

export const formatTime = (d: Date) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;

function dayLabel(d: Date, now: Date) {
  const startOf = (x: Date) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
  const diff = Math.round((startOf(d) - startOf(now)) / 86_400_000);
  if (diff === 0) return 'Heute';
  if (diff === 1) return 'Morgen';
  if (diff === -1) return 'Gestern';
  return `${WEEKDAYS[d.getDay()]}, ${pad(d.getDate())}.${pad(d.getMonth() + 1)}.`;
}

/** „Heute, 14:30“ / „Do, 06.11., 09:15“ */
export const formatDayTime = (d: Date, now: Date) => `${dayLabel(d, now)}, ${formatTime(d)}`;

/** Auf die nächste Viertelstunde aufrunden – realistischere Abholzeit. */
export function roundUpQuarter(d: Date) {
  const x = new Date(d);
  const m = x.getMinutes();
  const up = Math.ceil(m / 15) * 15;
  x.setMinutes(up, 0, 0);
  return x;
}

export const normalizeOrderNo = (s: string) => s.toUpperCase().replace(/[^0-9]/g, '');
export const normalizePlate = (s: string) => s.toUpperCase().replace(/[^A-ZÄÖÜ0-9]/g, '');
