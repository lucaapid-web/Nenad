import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors, nativeDriver } from '../theme';

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

  return (
    <View style={{ width: size, height: size }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
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
