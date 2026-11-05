import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors, nativeDriver } from '../theme';
import { Confetti } from './fx';

export function ProgressRing({
  progress,
  size = 230,
  stroke = 14,
  done,
  caption,
}: {
  progress: number;
  size?: number;
  stroke?: number;
  done: boolean;
  caption: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const v = useRef(new Animated.Value(0)).current;
  const pop = useRef(new Animated.Value(done ? 1 : 0)).current;
  // Fortschritt als State statt Animated-SVG: vermeidet die `collapsable`-Warnung im Web.
  const [shown, setShown] = useState(0);
  const breathe = useRef(new Animated.Value(0)).current;
  const tipPulse = useRef(new Animated.Value(0)).current;
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    const ease = Easing.inOut(Easing.sin);
    const a = Animated.loop(
      Animated.sequence([
        Animated.timing(breathe, { toValue: 1, duration: 2200, easing: ease, useNativeDriver: nativeDriver }),
        Animated.timing(breathe, { toValue: 0, duration: 2200, easing: ease, useNativeDriver: nativeDriver }),
      ]),
    );
    const b = Animated.loop(
      Animated.timing(tipPulse, { toValue: 1, duration: 1400, easing: Easing.out(Easing.ease), useNativeDriver: nativeDriver }),
    );
    a.start();
    b.start();
    return () => {
      a.stop();
      b.stop();
    };
  }, [breathe, tipPulse]);

  // Konfetti, sobald das Auto fertig ist (auch beim Öffnen eines fertigen Auftrags).
  useEffect(() => {
    if (done) {
      const t = setTimeout(() => setBurst((n) => n + 1), 450);
      return () => clearTimeout(t);
    }
  }, [done]);

  useEffect(() => {
    Animated.timing(v, {
      toValue: progress,
      duration: 1100,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [progress, v]);

  useEffect(() => {
    const id = v.addListener(({ value }) => setShown(value));
    return () => v.removeListener(id);
  }, [v]);

  useEffect(() => {
    Animated.spring(pop, {
      toValue: done ? 1 : 0,
      useNativeDriver: nativeDriver,
      bounciness: 14,
      speed: 8,
    }).start();
  }, [done, pop]);

  const angle = shown * Math.PI * 2 - Math.PI / 2;
  const tipX = size / 2 + r * Math.cos(angle);
  const tipY = size / 2 + r * Math.sin(angle);

  return (
    <View style={{ width: size, height: size }}>
      {/* atmender Glow hinter dem Ring */}
      <Animated.View
        pointerEvents="none"
        style={[
          styles.glow,
          {
            width: size * 0.92,
            height: size * 0.92,
            borderRadius: size,
            left: size * 0.04,
            top: size * 0.04,
            opacity: breathe.interpolate({ inputRange: [0, 1], outputRange: [done ? 0.14 : 0.05, done ? 0.26 : 0.12] }),
            transform: [{ scale: breathe.interpolate({ inputRange: [0, 1], outputRange: [0.94, 1.06] }) }],
          },
        ]}
      />
      <Svg width={size} height={size}>
        <Defs>
          <LinearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#7DFFD2" />
            <Stop offset="1" stopColor="#17C98C" />
          </LinearGradient>
        </Defs>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke={colors.surfaceHigh} strokeWidth={stroke} fill="none" />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="url(#ring)"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${c} ${c}`}
          strokeDashoffset={c * (1 - shown)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      {/* leuchtender Punkt an der Spitze des Fortschritts */}
      {!done && shown > 0.01 && (
        <View pointerEvents="none" style={[styles.tip, { left: tipX - 14, top: tipY - 14 }]}>
          <Animated.View
            style={[
              styles.tipHalo,
              {
                opacity: tipPulse.interpolate({ inputRange: [0, 1], outputRange: [0.7, 0] }),
                transform: [{ scale: tipPulse.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1.8] }) }],
              },
            ]}
          />
          <View style={styles.tipDot} />
        </View>
      )}
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.center}>
          {done ? (
            <Animated.View style={{ alignItems: 'center', transform: [{ scale: pop }] }}>
              <View style={styles.check}>
                <MaterialCommunityIcons name="check" size={48} color={colors.bg} />
              </View>
              <Text style={styles.caption}>{caption}</Text>
            </Animated.View>
          ) : (
            <>
              <Text style={styles.value}>
                {Math.round(shown * 100)}
                <Text style={styles.percent}>%</Text>
              </Text>
              <Text style={styles.caption}>{caption}</Text>
            </>
          )}
        </View>
      </View>
      <Confetti key={burst} run={burst > 0} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  glow: { position: 'absolute', backgroundColor: colors.accent, shadowColor: colors.accent, shadowOpacity: 1, shadowRadius: 40 },
  tip: { position: 'absolute', width: 28, height: 28, alignItems: 'center', justifyContent: 'center' },
  tipHalo: { position: 'absolute', width: 28, height: 28, borderRadius: 14, backgroundColor: colors.accent },
  tipDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    shadowColor: colors.accent,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  value: { color: colors.text, fontSize: 58, fontWeight: '800', letterSpacing: -2 },
  percent: { fontSize: 26, color: colors.textDim, fontWeight: '700' },
  caption: { color: colors.textDim, fontSize: 13, fontWeight: '600', marginTop: 2, letterSpacing: 0.3 },
  check: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: colors.accent,
    shadowOpacity: 0.6,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 0 },
  },
});
