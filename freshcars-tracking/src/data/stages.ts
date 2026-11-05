import { StageDefinition } from './types';

export const STAGES: StageDefinition[] = [
  {
    key: 'intake',
    title: 'Annahme',
    description: 'Fahrzeug angenommen, Schaden begutachtet und dokumentiert.',
    icon: 'clipboard-check-outline',
    plannedMinutes: 30,
  },
  {
    key: 'body',
    title: 'Karosseriebau',
    description: 'Beschädigte Teile werden instand gesetzt oder ersetzt.',
    icon: 'hammer-wrench',
    plannedMinutes: 240,
  },
  {
    key: 'prep',
    title: 'Vorbereitung',
    description: 'Schleifen, Spachteln, Grundieren – die Basis für perfekten Lack.',
    icon: 'layers-outline',
    plannedMinutes: 180,
  },
  {
    key: 'paint',
    title: 'Lackierung',
    description: 'Ihr Fahrzeug ist in der Lackierkabine – farbtongenau gemischt.',
    icon: 'spray',
    plannedMinutes: 120,
  },
  {
    key: 'drying',
    title: 'Trocknung',
    description: 'Der Lack härtet kontrolliert in der Trockenkabine aus.',
    icon: 'thermometer',
    plannedMinutes: 90,
  },
  {
    key: 'finish',
    title: 'Finish',
    description: 'Polieren, Montage und Feinschliff bis ins Detail.',
    icon: 'shimmer',
    plannedMinutes: 120,
  },
  {
    key: 'quality',
    title: 'Qualitätskontrolle',
    description: 'Abschließende Prüfung von Farbton, Spaltmaßen und Oberfläche.',
    icon: 'shield-check-outline',
    plannedMinutes: 30,
  },
  {
    key: 'ready',
    title: 'Abholbereit',
    description: 'Ihr Fahrzeug wartet auf Sie.',
    icon: 'car-key',
    plannedMinutes: 0,
  },
];

export const TOTAL_PLANNED_MINUTES = STAGES.reduce((s, x) => s + x.plannedMinutes, 0);
