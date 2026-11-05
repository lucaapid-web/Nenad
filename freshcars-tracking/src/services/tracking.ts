import { DEMO_ORDERS, DemoOrderSeed } from '../data/demoOrders';
import { STAGES, TOTAL_PLANNED_MINUTES } from '../data/stages';
import { Order, OrderStage } from '../data/types';
import { normalizeOrderNo, normalizePlate, roundUpQuarter } from '../lib/format';
import {
  addWorkingMinutes,
  clampBackward,
  isWorkingTime,
  subtractWorkingMinutes,
} from '../lib/workingTime';

/**
 * Schnittstelle zwischen App und Datenquelle.
 * Für den Livebetrieb wird nur diese Schicht gegen einen echten Server getauscht
 * (REST + WebSocket/Push), die Oberfläche bleibt unverändert.
 */
export interface TrackingService {
  login(orderNo: string, plate: string): Promise<Order | null>;
  loginWithToken(token: string): Promise<Order | null>;
  subscribe(orderId: string, onUpdate: (order: Order) => void): () => void;
}

// ---------------------------------------------------------------------------
// Demo-Implementierung: simuliert eine laufende Werkstatt.
// ---------------------------------------------------------------------------

export const DEMO_SPEEDS = {
  live: 1, // 1 Sekunde = 1 Werkstatt-Minute
  fast: 20, // Zeitraffer: 1 Sekunde = 20 Werkstatt-Minuten
} as const;
export type DemoSpeed = keyof typeof DEMO_SPEEDS;

interface SimOrder {
  seed: DemoOrderSeed;
  stages: OrderStage[];
  currentIndex: number;
  currentProgress: number;
}

const LAST = STAGES.length - 1;

class DemoTrackingService implements TrackingService {
  private now = new Date();
  private orders = new Map<string, SimOrder>();
  private listeners = new Map<string, Set<(o: Order) => void>>();
  private speed: DemoSpeed = 'live';
  private speedListeners = new Set<(s: DemoSpeed) => void>();
  private timer: ReturnType<typeof setInterval> | null = null;
  private boardListeners = new Set<(orders: Order[]) => void>();

  constructor() {
    this.reset();
  }

  /** Simulation auf Ausgangszustand zurücksetzen. */
  reset() {
    const real = new Date();
    // Außerhalb der Öffnungszeiten startet die Simulation kurz vor Feierabend des letzten Werktags.
    this.now = isWorkingTime(real) ? real : subtractWorkingMinutes(clampBackward(real), 90);
    this.orders.clear();
    for (const seed of DEMO_ORDERS) this.orders.set(seed.id, this.build(seed));
    this.emitAll();
  }

  private build(seed: DemoOrderSeed): SimOrder {
    const stages: OrderStage[] = STAGES.map((s) => ({
      key: s.key,
      status: 'pending',
      note: seed.notes?.[s.key],
      photos: [],
    }));

    // Zeitstempel rückwärts vom aktuellen Schritt aus berechnen.
    const current = STAGES[seed.currentIndex];
    let cursor = subtractWorkingMinutes(this.now, current.plannedMinutes * seed.currentProgress);
    stages[seed.currentIndex] = {
      ...stages[seed.currentIndex],
      status: seed.currentIndex === LAST ? 'done' : 'active',
      startedAt: cursor,
      completedAt: seed.currentIndex === LAST ? cursor : undefined,
    };
    for (let i = seed.currentIndex - 1; i >= 0; i--) {
      const completedAt = subtractWorkingMinutes(cursor, 5);
      const startedAt = subtractWorkingMinutes(completedAt, STAGES[i].plannedMinutes);
      stages[i] = { ...stages[i], status: 'done', startedAt, completedAt };
      cursor = startedAt;
    }
    return { seed, stages, currentIndex: seed.currentIndex, currentProgress: seed.currentProgress };
  }

  private snapshot(sim: SimOrder): Order {
    const { seed, currentIndex, currentProgress } = sim;
    const isReady = currentIndex === LAST;
    const doneMinutes =
      STAGES.slice(0, currentIndex).reduce((s, x) => s + x.plannedMinutes, 0) +
      STAGES[currentIndex].plannedMinutes * currentProgress;
    const remaining = TOTAL_PLANNED_MINUTES - doneMinutes;
    return {
      id: seed.id,
      orderNo: seed.orderNo,
      plate: seed.plate,
      token: seed.token,
      customerName: seed.customerName,
      vehicle: seed.vehicle,
      job: seed.job,
      stages: sim.stages.map((s) => ({ ...s, photos: [...s.photos] })),
      currentIndex,
      currentProgress,
      totalProgress: isReady ? 1 : doneMinutes / TOTAL_PLANNED_MINUTES,
      isReady,
      estimatedReadyAt: isReady
        ? sim.stages[LAST].completedAt!
        : roundUpQuarter(addWorkingMinutes(this.now, remaining)),
    };
  }

  private tick = () => {
    const delta = DEMO_SPEEDS[this.speed];
    this.now = addWorkingMinutes(this.now, delta);
    for (const sim of this.orders.values()) {
      if (sim.currentIndex === LAST) continue;
      sim.currentProgress += delta / STAGES[sim.currentIndex].plannedMinutes;
      if (sim.currentProgress >= 1) this.advanceSim(sim);
    }
    this.emitAll();
  };

  private advanceSim(sim: SimOrder) {
    const i = sim.currentIndex;
    if (i === LAST) return;
    sim.stages[i] = { ...sim.stages[i], status: 'done', completedAt: this.now };
    sim.currentIndex = i + 1;
    sim.currentProgress = 0;
    sim.stages[i + 1] = {
      ...sim.stages[i + 1],
      status: i + 1 === LAST ? 'done' : 'active',
      startedAt: this.now,
      completedAt: i + 1 === LAST ? this.now : undefined,
    };
  }

  private emitAll() {
    for (const [id, set] of this.listeners) {
      const sim = this.orders.get(id);
      if (sim) set.forEach((cb) => cb(this.snapshot(sim)));
    }
    if (this.boardListeners.size) {
      const all = this.allOrders();
      this.boardListeners.forEach((cb) => cb(all));
    }
  }

  private ensureTimer() {
    const active =
      this.boardListeners.size > 0 || [...this.listeners.values()].some((s) => s.size > 0);
    if (active && !this.timer) this.timer = setInterval(this.tick, 1000);
    if (!active && this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  async login(orderNo: string, plate: string) {
    await new Promise((r) => setTimeout(r, 650)); // Netzwerk simulieren
    const no = normalizeOrderNo(orderNo);
    const pl = normalizePlate(plate);
    for (const sim of this.orders.values()) {
      if (normalizeOrderNo(sim.seed.orderNo) === no && normalizePlate(sim.seed.plate) === pl) {
        return this.snapshot(sim);
      }
    }
    return null;
  }

  async loginWithToken(token: string) {
    await new Promise((r) => setTimeout(r, 500));
    for (const sim of this.orders.values()) {
      if (sim.seed.token === token) return this.snapshot(sim);
    }
    return null;
  }

  subscribe(orderId: string, onUpdate: (o: Order) => void) {
    if (!this.listeners.has(orderId)) this.listeners.set(orderId, new Set());
    this.listeners.get(orderId)!.add(onUpdate);
    const sim = this.orders.get(orderId);
    if (sim) onUpdate(this.snapshot(sim));
    this.ensureTimer();
    return () => {
      this.listeners.get(orderId)?.delete(onUpdate);
      this.ensureTimer();
    };
  }

  // --- Werkstatt-Modus (im Livebetrieb: eigene Mitarbeiter-App / Tablet) ---
  allOrders = () => [...this.orders.values()].map((s) => this.snapshot(s));

  subscribeBoard(cb: (orders: Order[]) => void) {
    this.boardListeners.add(cb);
    cb(this.allOrders());
    this.ensureTimer();
    return () => {
      this.boardListeners.delete(cb);
      this.ensureTimer();
    };
  }

  /** Mitarbeiter schließt den aktuellen Schritt ab. */
  advance(orderId: string) {
    const sim = this.orders.get(orderId);
    if (sim) this.advanceSim(sim);
    this.emitAll();
  }

  /** Mitarbeiter hängt ein Foto an den aktuellen Schritt. */
  addPhoto(orderId: string, uri: string) {
    const sim = this.orders.get(orderId);
    if (!sim) return;
    const st = sim.stages[sim.currentIndex];
    sim.stages[sim.currentIndex] = { ...st, photos: [...st.photos, uri] };
    this.emitAll();
  }

  // --- Demo-Steuerung ---
  getNow = () => this.now;
  getSpeed = () => this.speed;
  setSpeed(s: DemoSpeed) {
    this.speed = s;
    this.speedListeners.forEach((cb) => cb(s));
  }
  onSpeedChange(cb: (s: DemoSpeed) => void) {
    this.speedListeners.add(cb);
    return () => {
      this.speedListeners.delete(cb);
    };
  }
}

export const demoService = new DemoTrackingService();
export const trackingService: TrackingService = demoService;
export const IS_DEMO = true;
