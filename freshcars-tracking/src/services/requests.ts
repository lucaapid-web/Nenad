import { CLOSE_HOUR, OPEN_HOUR } from '../lib/workingTime';

/**
 * Anfragen der Kunden an Fresh Cars: Termine, Schadensmeldungen, Abholungen.
 * Im Livebetrieb gehen diese an den Server (z. B. Supabase + E-Mail/Push ans Büro).
 */
export interface Slot {
  start: Date;
  available: boolean;
}

export interface AppointmentRequest {
  service: string;
  slot: Date;
  name: string;
  phone: string;
  plate?: string;
  note?: string;
}

export interface DamageReport {
  photos: string[]; // lokale Datei-URIs
  areas: string[];
  description: string;
  name: string;
  phone: string;
  plate?: string;
}

export interface RequestService {
  getDays(count: number): Date[];
  getSlots(day: Date): Slot[];
  bookAppointment(req: AppointmentRequest): Promise<{ reference: string }>;
  submitDamageReport(report: DamageReport): Promise<{ reference: string }>;
  schedulePickup(orderId: string, slot: Date): Promise<{ reference: string }>;
  getPickup(orderId: string): Date | undefined;
}

// ---------------------------------------------------------------------------

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
const ref = (prefix: string) => `${prefix}-${Math.floor(10000 + Math.random() * 89999)}`;

/** Deterministischer Pseudo-Zufall, damit belegte Slots stabil bleiben. */
function hash(n: number) {
  let x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}

class DemoRequestService implements RequestService {
  private pickups = new Map<string, Date>();

  getDays(count: number) {
    const days: Date[] = [];
    const d = new Date();
    // Nach 15 Uhr lohnt sich „heute“ nicht mehr.
    if (d.getHours() >= 15) d.setDate(d.getDate() + 1);
    d.setHours(0, 0, 0, 0);
    while (days.length < count) {
      if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
      d.setDate(d.getDate() + 1);
    }
    return days;
  }

  getSlots(day: Date) {
    const now = new Date();
    const slots: Slot[] = [];
    for (let h = OPEN_HOUR; h < CLOSE_HOUR; h++) {
      for (const m of [0, 30]) {
        const start = new Date(day);
        start.setHours(h, m, 0, 0);
        const seed = start.getTime() / 1_800_000;
        slots.push({ start, available: start > now && hash(seed) > 0.35 });
      }
    }
    return slots;
  }

  async bookAppointment(_req: AppointmentRequest) {
    await wait(900);
    return { reference: ref('T') };
  }

  async submitDamageReport(_report: DamageReport) {
    await wait(1300);
    return { reference: ref('S') };
  }

  async schedulePickup(orderId: string, slot: Date) {
    await wait(700);
    this.pickups.set(orderId, slot);
    return { reference: ref('A') };
  }

  getPickup(orderId: string) {
    return this.pickups.get(orderId);
  }
}

export const requestService: RequestService = new DemoRequestService();
