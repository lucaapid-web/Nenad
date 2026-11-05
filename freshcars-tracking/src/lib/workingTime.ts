/** Werkstatt-Arbeitszeit: Mo–Fr, 08–17 Uhr. Alle Zeitrechnungen laufen nur in dieser Zeit. */
export const OPEN_HOUR = 8;
export const CLOSE_HOUR = 17;

const MIN = 60_000;
const isWorkday = (d: Date) => d.getDay() !== 0 && d.getDay() !== 6;

function atHour(d: Date, h: number) {
  const x = new Date(d);
  x.setHours(h, 0, 0, 0);
  return x;
}

function nextWorkdayStart(d: Date) {
  const x = atHour(d, OPEN_HOUR);
  do x.setDate(x.getDate() + 1);
  while (!isWorkday(x));
  return x;
}

function prevWorkdayEnd(d: Date) {
  const x = atHour(d, CLOSE_HOUR);
  do x.setDate(x.getDate() - 1);
  while (!isWorkday(x));
  return x;
}

export function isWorkingTime(d: Date) {
  return isWorkday(d) && d >= atHour(d, OPEN_HOUR) && d < atHour(d, CLOSE_HOUR);
}

function clampForward(d: Date) {
  if (isWorkday(d) && d < atHour(d, OPEN_HOUR)) return atHour(d, OPEN_HOUR);
  if (isWorkingTime(d)) return new Date(d);
  return nextWorkdayStart(d);
}

export function clampBackward(d: Date) {
  if (isWorkday(d) && d > atHour(d, CLOSE_HOUR)) return atHour(d, CLOSE_HOUR);
  if (isWorkday(d) && d > atHour(d, OPEN_HOUR)) return new Date(d);
  return prevWorkdayEnd(d);
}

export function addWorkingMinutes(from: Date, minutes: number): Date {
  let t = clampForward(from);
  let rest = minutes;
  for (;;) {
    const avail = (atHour(t, CLOSE_HOUR).getTime() - t.getTime()) / MIN;
    if (rest < avail) return new Date(t.getTime() + rest * MIN);
    rest -= avail;
    t = nextWorkdayStart(t);
  }
}

export function subtractWorkingMinutes(from: Date, minutes: number): Date {
  let t = clampBackward(from);
  let rest = minutes;
  for (;;) {
    const avail = (t.getTime() - atHour(t, OPEN_HOUR).getTime()) / MIN;
    if (rest <= avail) return new Date(t.getTime() - rest * MIN);
    rest -= avail;
    t = prevWorkdayEnd(t);
  }
}
