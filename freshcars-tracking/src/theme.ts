import { Platform } from 'react-native';

export const colors = {
  bg: '#0A0C0F',
  surface: '#12161B',
  surfaceHigh: '#191E25',
  border: '#222932',
  text: '#F4F7FA',
  textDim: '#8C97A4',
  textFaint: '#525C67',
  accent: '#3CF0B1',
  accentSoft: 'rgba(60, 240, 177, 0.14)',
  accentGlow: 'rgba(60, 240, 177, 0.35)',
  danger: '#FF6B6B',
};

export const radius = { sm: 10, md: 16, lg: 24, xl: 32 };

/** Native driver is unavailable on web; transform/opacity animations use it elsewhere. */
export const nativeDriver = Platform.OS !== 'web';
