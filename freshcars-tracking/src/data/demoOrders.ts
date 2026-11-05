import { StageKey, Vehicle } from './types';

export interface DemoOrderSeed {
  id: string;
  orderNo: string;
  plate: string;
  token: string;
  customerName: string;
  vehicle: Vehicle;
  job: string;
  /** Index des aktuellen Schritts in STAGES */
  currentIndex: number;
  /** Fortschritt im aktuellen Schritt 0..1 */
  currentProgress: number;
  notes?: Partial<Record<StageKey, string>>;
}

export const DEMO_ORDERS: DemoOrderSeed[] = [
  {
    id: 'o1',
    token: 'bmw7k2',
    orderNo: 'FC-24017',
    plate: 'HER-FC 217',
    customerName: 'Herr Schneider',
    vehicle: { make: 'BMW', model: '320d Touring', color: 'Mineralgrau', colorHex: '#5B6169' },
    job: 'Unfallschaden hinten links',
    currentIndex: 3,
    currentProgress: 0.35,
    notes: { paint: 'Farbton exakt abgestimmt – zweite Lackschicht läuft.' },
  },
  {
    id: 'o2',
    token: 'audi4x9',
    orderNo: 'FC-24018',
    plate: 'HER-AE 552',
    customerName: 'Frau Yilmaz',
    vehicle: { make: 'Audi', model: 'A4 Avant', color: 'Gletscherweiß', colorHex: '#E9ECEE' },
    job: 'Stoßstange vorne lackieren',
    currentIndex: 4,
    currentProgress: 0.6,
  },
  {
    id: 'o3',
    token: 'golf8m3',
    orderNo: 'FC-24019',
    plate: 'BO-MK 834',
    customerName: 'Herr Kowalski',
    vehicle: { make: 'VW', model: 'Golf 8', color: 'Mondsteingrau', colorHex: '#8E9399' },
    job: 'Kratzer Fahrertür',
    currentIndex: 7,
    currentProgress: 0,
  },
  {
    id: 'o4',
    token: 'benz2q5',
    orderNo: 'FC-24020',
    plate: 'HER-LS 77',
    customerName: 'Frau Lehmann',
    vehicle: { make: 'Mercedes', model: 'C-Klasse', color: 'Obsidianschwarz', colorHex: '#16181B' },
    job: 'Hagelschaden Motorhaube & Dach',
    currentIndex: 0,
    currentProgress: 0.5,
  },
  {
    id: 'o5',
    token: 'tesla3r8',
    orderNo: 'FC-24021',
    plate: 'GE-TR 4410',
    customerName: 'Herr Tran',
    vehicle: { make: 'Tesla', model: 'Model 3', color: 'Pearl White', colorHex: '#F2F1EC' },
    job: 'Kotflügel vorne rechts',
    currentIndex: 1,
    currentProgress: 0.45,
    notes: { body: 'Kotflügel ausgebeult, Spaltmaße passen wieder.' },
  },
];
