import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';
import { colors, nativeDriver } from '../theme';

/** Endlose Hin-und-her-Schleife 0 → 1 → 0. */
function useLoop(duration: number, delay = 0) {
  const v = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const ease = Easing.inOut(Easing.sin);
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(v, { toValue: 1, duration, easing: ease, useNativeDriver: nativeDriver }),
        Animated.timing(v, { toValue: 0, duration, easing: ease, useNativeDriver: nativeDriver }),
      ]),
    );
    const t = setTimeout(() => loop.start(), delay);
    return () => {
      clearTimeout(t);
      loop.stop();
    };
  }, [v, duration, delay]);
  return v;
}

function Blob({ size, color, opacity }: { size: number; color: string; opacity: number }) {
  const id = useMemo(() => `blob-${Math.random().toString(36).slice(2)}`, []);
  return (
    <Svg width={size} height={size}>
      <Defs>
        <RadialGradient id={id} cx="50%" cy="50%" r="50%">
          <Stop offset="0" stopColor={color} stopOpacity={opacity} />
          <Stop offset="1" stopColor={color} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={`url(#${id})`} />
    </Svg>
  );
}

/** Weich schwebende Lichtflecken im Hintergrund – macht den Screen lebendig. */
export function AmbientGlow({ strong = false }: { strong?: boolean }) {
  const a = useLoop(7000);
  const b = useLoop(9000, 600);
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Animated.View
        style={{
          position: 'absolute',
          top: -220,
          left: -160,
          transform: [
            { translateX: a.interpolate({ inputRange: [0, 1], outputRange: [0, 110] }) },
            { translateY: a.interpolate({ inputRange: [0, 1], outputRange: [0, 60] }) },
            { scale: a.interpolate({ inputRange: [0, 1], outputRange: [1, 1.15] }) },
          ],
        }}
      >
        <Blob size={620} color={colors.accent} opacity={strong ? 0.42 : 0.26} />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 120,
          right: -220,
          transform: [
            { translateX: b.interpolate({ inputRange: [0, 1], outputRange: [0, -90] }) },
            { translateY: b.interpolate({ inputRange: [0, 1], outputRange: [0, 80] }) },
          ],
        }}
      >
        <Blob size={480} color="#2E9BFF" opacity={0.12} />
      </Animated.View>
    </View>
  );
}

/** Lichtstreifen, der regelmäßig über einen Button gleitet. */
export function Shimmer({ radius = 16 }: { radius?: number }) {
  const [w, setW] = useState(0);
  const x = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!w) return;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.delay(1400),
        Animated.timing(x, { toValue: 1, duration: 1100, easing: Easing.inOut(Easing.cubic), useNativeDriver: nativeDriver }),
        Animated.timing(x, { toValue: 0, duration: 0, useNativeDriver: nativeDriver }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [w, x]);
  return (
    <View
      pointerEvents="none"
      style={[StyleSheet.absoluteFill, { borderRadius: radius, overflow: 'hidden' }]}
      onLayout={(e) => setW(e.nativeEvent.layout.width)}
    >
      {w > 0 && (
        <Animated.View
          style={{
            position: 'absolute',
            top: -20,
            bottom: -20,
            width: 70,
            transform: [
              { translateX: x.interpolate({ inputRange: [0, 1], outputRange: [-100, w + 30] }) },
              { rotate: '18deg' },
            ],
          }}
        >
          <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.55)', 'rgba(255,255,255,0)']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ flex: 1 }}
          />
        </Animated.View>
      )}
    </View>
  );
}

/** Konfetti-Explosion (z. B. wenn das Auto fertig ist). */
export function Confetti({ run, count = 26 }: { run: boolean; count?: number }) {
  const parts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
        const dist = 110 + Math.random() * 90;
        return {
          v: new Animated.Value(0),
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist - 40,
          rot: `${Math.round(Math.random() * 720 - 360)}deg`,
          color: [colors.accent, '#FFFFFF', '#7DFFD2', '#2E9BFF', '#FFD166'][i % 5],
          w: 6 + Math.random() * 6,
          h: 10 + Math.random() * 8,
        };
      }),
    [count],
  );
  useEffect(() => {
    if (!run) return;
    parts.forEach((p) => p.v.setValue(0));
    Animated.stagger(
      12,
      parts.map((p) =>
        Animated.timing(p.v, {
          toValue: 1,
          duration: 1300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: nativeDriver,
        }),
      ),
    ).start();
  }, [run, parts]);
  if (!run) return null;
  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
      {parts.map((p, i) => (
        <Animated.View
          key={i}
          style={{
            position: 'absolute',
            width: p.w,
            height: p.h,
            borderRadius: 2,
            backgroundColor: p.color,
            opacity: p.v.interpolate({ inputRange: [0, 0.1, 0.75, 1], outputRange: [0, 1, 1, 0] }),
            transform: [
              { translateX: p.v.interpolate({ inputRange: [0, 1], outputRange: [0, p.dx] }) },
              { translateY: p.v.interpolate({ inputRange: [0, 0.6, 1], outputRange: [0, p.dy, p.dy + 60] }) },
              { rotate: p.v.interpolate({ inputRange: [0, 1], outputRange: ['0deg', p.rot] }) },
            ],
          }}
        />
      ))}
    </View>
  );
}

/** Langsamer Zoom auf ein Foto (Ken-Burns-Effekt). */
export function KenBurns({ children }: { children: React.ReactNode }) {
  const v = useLoop(9000);
  return (
    <Animated.View
      style={{
        transform: [
          { scale: v.interpolate({ inputRange: [0, 1], outputRange: [1, 1.12] }) },
          { translateX: v.interpolate({ inputRange: [0, 1], outputRange: [0, -8] }) },
        ],
      }}
    >
      {children}
    </Animated.View>
  );
}

/** Kleines Auto, das unter der Überschrift entlangfährt. */
export function DrivingCar() {
  const [w, setW] = useState(0);
  const x = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!w) return;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(x, { toValue: 1, duration: 3200, easing: Easing.inOut(Easing.cubic), useNativeDriver: nativeDriver }),
        Animated.delay(900),
        Animated.timing(x, { toValue: 0, duration: 0, useNativeDriver: nativeDriver }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [w, x]);
  const tx = x.interpolate({ inputRange: [0, 1], outputRange: [-40, w] });
  return (
    <View style={fx.track} onLayout={(e) => setW(e.nativeEvent.layout.width)}>
      <View style={fx.road} />
      {w > 0 && (
        <Animated.View style={[fx.carWrap, { transform: [{ translateX: tx }] }]}>
          <LinearGradient
            colors={['rgba(60,240,177,0)', 'rgba(60,240,177,0.55)']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={fx.trail}
          />
          <MaterialCommunityIcons name="car-sports" size={26} color={colors.accent} />
        </Animated.View>
      )}
    </View>
  );
}

const fx = StyleSheet.create({
  track: { height: 30, marginTop: 18, justifyContent: 'center', overflow: 'hidden' },
  road: { height: 2, borderRadius: 1, backgroundColor: colors.border, position: 'absolute', left: 0, right: 0, bottom: 4 },
  carWrap: { position: 'absolute', left: 0, bottom: 0, flexDirection: 'row', alignItems: 'center' },
  trail: { width: 90, height: 3, borderRadius: 2, marginRight: -4, marginTop: 10 },
});
