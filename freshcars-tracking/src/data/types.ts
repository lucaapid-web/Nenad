export type StageKey =
  | 'intake'
  | 'body'
  | 'prep'
  | 'paint'
  | 'drying'
  | 'finish'
  | 'quality'
  | 'ready';

export interface StageDefinition {
  key: StageKey;
  title: string;
  description: string;
  icon: string; // MaterialCommunityIcons name
  plannedMinutes: number;
}

export type StageStatus = 'done' | 'active' | 'pending';

export interface OrderStage {
  key: StageKey;
  status: StageStatus;
  startedAt?: Date;
  completedAt?: Date;
  /** Kurze Notiz aus der Werkstatt, optional. */
  note?: string;
}

export interface Vehicle {
  make: string;
  model: string;
  color: string;
  colorHex: string;
}

export interface Order {
  id: string;
  orderNo: string;
  plate: string;
  customerName: string;
  vehicle: Vehicle;
  job: string;
  stages: OrderStage[];
  currentIndex: number;
  /** Fortschritt im aktuellen Schritt, 0..1 */
  currentProgress: number;
  /** Gesamtfortschritt 0..1, gewichtet nach geplanter Dauer */
  totalProgress: number;
  estimatedReadyAt: Date;
  isReady: boolean;
}
