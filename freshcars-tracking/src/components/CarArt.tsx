import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Rect, Stop } from 'react-native-svg';
import { StageKey } from '../data/types';

/**
 * Illustriertes „Werkstattbild“ in der Wagenfarbe des Kunden.
 * Platzhalter, bis echte Fotos aus der Werkstatt kommen.
 */
export type CarArtVariant = 'damaged' | StageKey;

const BODY =
  'M30 140 L30 116 Q32 101 56 97 L112 90 L152 62 Q161 55 176 55 L256 55 Q272 55 286 65 L322 92 L360 98 Q379 102 380 119 L380 140 Q380 146 372 146 L341 146 A31 31 0 0 0 279 146 L141 146 A31 31 0 0 0 79 146 L38 146 Q30 146 30 140 Z';
const WIN_FRONT = 'M222 63 L254 63 Q265 63 275 70 L304 91 L222 90 Z';
const WIN_REAR = 'M160 67 Q166 63 177 63 L215 63 L215 90 L130 92 Z';
// Schadensstelle: hinten links (Heckpartie)
const DMG = { cx: 92, cy: 118 };

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const c = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
  const r = c((n >> 16) & 255), g = c((n >> 8) & 255), b = c(n & 255);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

function Sparkle({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <Path
      d={`M${x} ${y - s} Q${x} ${y} ${x + s} ${y} Q${x} ${y} ${x} ${y + s} Q${x} ${y} ${x - s} ${y} Q${x} ${y} ${x} ${y - s} Z`}
      fill="#FFFFFF"
      opacity={0.95}
    />
  );
}

export function CarArt({
  color,
  variant,
  width,
  height,
  id = 'a',
}: {
  color: string;
  variant: CarArtVariant;
  width: number;
  height: number;
  id?: string;
}) {
  const damaged = variant === 'damaged' || variant === 'intake';
  const bare = variant === 'body';
  const primer = variant === 'prep';
  const painting = variant === 'paint';
  const drying = variant === 'drying';
  const shiny = variant === 'finish' || variant === 'quality' || variant === 'ready';
  const g = (k: string) => `${k}-${id}`;

  return (
    <Svg width={width} height={height} viewBox="-10 -4 420 208" preserveAspectRatio="xMidYMid meet">
      <Defs>
        <LinearGradient id={g('bg')} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={drying ? '#3A1C12' : '#1C232C'} />
          <Stop offset="1" stopColor="#0C0F13" />
        </LinearGradient>
        <LinearGradient id={g('body')} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={shade(color, shiny ? 0.22 : 0.12)} />
          <Stop offset="0.55" stopColor={color} />
          <Stop offset="1" stopColor={shade(color, -0.22)} />
        </LinearGradient>
        <RadialGradient id={g('dent')} cx="50%" cy="50%" r="50%">
          <Stop offset="0" stopColor="#000" stopOpacity={0.55} />
          <Stop offset="1" stopColor="#000" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id={g('mist')} cx="50%" cy="50%" r="50%">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.55} />
          <Stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
        </RadialGradient>
        <LinearGradient id={g('heat')} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FF7A3D" stopOpacity={0.55} />
          <Stop offset="1" stopColor="#FF7A3D" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id={g('gloss')} x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0} />
          <Stop offset="0.5" stopColor="#FFFFFF" stopOpacity={0.45} />
          <Stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
        </LinearGradient>
      </Defs>

      <Rect x="-600" y="-200" width="1600" height="600" fill={`url(#${g('bg')})`} />
      {/* Werkstatt-Licht */}
      {[70, 200, 330].map((x) => (
        <Rect key={x} x={x - 34} y={10} width={68} height={5} rx={2.5} fill={drying ? '#FF9A5C' : '#E8F1FF'} opacity={0.85} />
      ))}
      {drying && <Rect x="-600" y="-200" width="1600" height="320" fill={`url(#${g('heat')})`} />}
      {/* Boden */}
      <Rect x="-600" y="168" width="1600" height="300" fill="#0A0C0F" opacity={0.6} />
      <Ellipse cx="205" cy="172" rx="175" ry="9" fill="#000" opacity={0.55} />

      {/* Karosserie */}
      <Path d={BODY} fill={`url(#${g('body')})`} />
      <Path d={WIN_FRONT} fill="#1A2330" opacity={0.92} />
      <Path d={WIN_REAR} fill="#1A2330" opacity={0.92} />
      <Path d="M218 63 L218 145" stroke={shade(color, -0.3)} strokeWidth={1.5} />
      <Path d="M40 120 L372 120" stroke={shade(color, -0.18)} strokeWidth={1.2} opacity={0.6} />
      <Rect x="362" y="104" width="14" height="7" rx="3" fill="#F4F7FA" opacity={0.9} />
      <Rect x="32" y="104" width="10" height="7" rx="3" fill="#E5484D" opacity={0.9} />

      {/* Schaden / Reparaturstufen an der Heckpartie */}
      {damaged && (
        <G>
          <Ellipse cx={DMG.cx} cy={DMG.cy} rx={42} ry={24} fill={`url(#${g('dent')})`} />
          <Path d="M58 112 Q72 116 84 112 Q96 108 104 118 L98 128 Q84 124 70 128 Q60 126 56 120 Z" fill="#9AA0A6" opacity={0.85} />
          <Path
            d="M50 104 L118 128 M58 98 L126 118 M54 120 L100 136 M66 96 L110 108"
            stroke="#EEF1F4"
            strokeWidth={1.8}
            strokeLinecap="round"
            opacity={0.85}
          />
          <Path d="M36 104 L44 104 L44 111 L36 111 Z" fill="#3A1214" />
        </G>
      )}
      {bare && (
        <G>
          <Ellipse cx={DMG.cx} cy={DMG.cy} rx={30} ry={18} fill="#C9CED4" />
          {[0, 1, 2, 3, 4].map((i) => (
            <Circle key={i} cx={74 + i * 9} cy={113 + (i % 2) * 8} r={1.6} fill="#8D949C" />
          ))}
        </G>
      )}
      {primer && (
        <G>
          <Ellipse cx={DMG.cx} cy={DMG.cy} rx={34} ry={20} fill="#8F959C" />
          <Ellipse cx={DMG.cx} cy={DMG.cy} rx={24} ry={13} fill="#A7ADB3" />
        </G>
      )}
      {painting && (
        <G>
          <Ellipse cx={DMG.cx} cy={DMG.cy} rx={70} ry={45} fill={`url(#${g('mist')})`} />
          {Array.from({ length: 26 }).map((_, i) => (
            <Circle
              key={i}
              cx={DMG.cx - 40 + ((i * 37) % 80)}
              cy={DMG.cy - 30 + ((i * 23) % 60)}
              r={0.8 + (i % 3) * 0.6}
              fill="#FFFFFF"
              opacity={0.5}
            />
          ))}
        </G>
      )}
      {shiny && (
        <G>
          <Path d="M60 100 L340 92" stroke={`url(#${g('gloss')})`} strokeWidth={6} strokeLinecap="round" />
          <Sparkle x={96} y={102} s={9} />
          <Sparkle x={300} y={84} s={6} />
          <Sparkle x={196} y={76} s={4} />
        </G>
      )}

      {/* Räder */}
      {[110, 310].map((x) => (
        <G key={x}>
          <Circle cx={x} cy={146} r={25} fill="#0E1114" />
          <Circle cx={x} cy={146} r={14} fill={shiny ? '#D2D7DC' : '#8D949C'} />
          <Circle cx={x} cy={146} r={4} fill="#22282F" />
        </G>
      ))}
    </Svg>
  );
}
