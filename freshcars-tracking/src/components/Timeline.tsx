import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { STAGE_PHOTOS } from '../data/stagePhotos';
import { STAGES } from '../data/stages';
import { Order } from '../data/types';
import { formatDayTime, formatTime } from '../lib/format';
import { colors, nativeDriver, radius } from '../theme';
import { KenBurns, Shimmer } from './fx';
import { FadeIn, PulseDot } from './motion';
import { StagePhoto } from './PhotoStrip';

function ActiveBar({ progress }: { progress: number }) {
  const v = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(v, {
      toValue: progress,
      duration: 900,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [progress, v]);
  return (
    <View style={styles.barTrack}>
      <Animated.View
        style={[
          styles.barFill,
          { width: v.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) },
        ]}
      >
        <Shimmer radius={3} />
      </Animated.View>
    </View>
  );
}

/** Verbindungslinie, die sich beim Erscheinen von oben nach unten füllt. */
function RailLine({ filled, delay }: { filled: boolean; delay: number }) {
  const v = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(v, {
      toValue: filled ? 1 : 0,
      duration: 420,
      delay,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [filled, delay, v]);
  return (
    <View style={styles.line}>
      <Animated.View
        style={[styles.lineFill, { height: v.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }]}
      />
    </View>
  );
}

/** Haken, der mit einem kleinen Federeffekt erscheint. */
function PopCheck({ delay }: { delay: number }) {
  const v = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(v, { toValue: 1, delay, useNativeDriver: nativeDriver, bounciness: 16, speed: 10 }).start();
  }, [v, delay]);
  return (
    <Animated.View style={{ transform: [{ scale: v }] }}>
      <MaterialCommunityIcons name="check" size={14} color={colors.bg} />
    </Animated.View>
  );
}

export function Timeline({ order, now }: { order: Order; now: Date }) {
  const { width } = useWindowDimensions();
  // Inhaltsbreite minus Rail, Abstand und Karten-Padding
  const photoW = Math.min(width, 560) - 44 - 24 - 14 - 30;
  return (
    <View>
      {order.stages.map((stage, i) => {
        const def = STAGES[i];
        const isLast = i === order.stages.length - 1;
        const done = stage.status === 'done';
        const active = stage.status === 'active';
        const lineDone = i < order.currentIndex;

        return (
          <FadeIn key={stage.key} delay={250 + i * 60} offset={10}>
            <View style={styles.row}>
              <View style={styles.rail}>
                <View
                  style={[
                    styles.node,
                    done && styles.nodeDone,
                    active && styles.nodeActive,
                  ]}
                >
                  {done ? (
                    <PopCheck delay={350 + i * 120} />
                  ) : active ? (
                    <PulseDot size={8} />
                  ) : null}
                </View>
                {!isLast && <RailLine filled={lineDone} delay={400 + i * 120} />}
              </View>

              <View style={[styles.body, active && styles.bodyActive]}>
                <View style={styles.titleRow}>
                  <MaterialCommunityIcons
                    name={def.icon as any}
                    size={18}
                    color={active ? colors.accent : done ? colors.text : colors.textFaint}
                  />
                  <Text
                    style={[
                      styles.title,
                      done && { color: colors.text },
                      active && { color: colors.text, fontWeight: '800' },
                    ]}
                  >
                    {def.title}
                  </Text>
                  <Text style={styles.time}>
                    {done && stage.completedAt
                      ? formatDayTime(stage.completedAt, now)
                      : active && stage.startedAt
                        ? `seit ${formatTime(stage.startedAt)}`
                        : ''}
                  </Text>
                </View>
                {active && (
                  <>
                    <View style={styles.photo}>
                      <KenBurns>
                      <StagePhoto
                        id={`a-${stage.key}`}
                        uri={stage.photos[stage.photos.length - 1] ?? STAGE_PHOTOS[stage.key]}
                        stage={stage.key}
                        color={order.vehicle.colorHex}
                        width={photoW}
                        height={photoW * 0.56}
                      />
                      </KenBurns>
                    </View>
                    <Text style={styles.desc}>{stage.note ?? def.description}</Text>
                    <ActiveBar progress={order.currentProgress} />
                  </>
                )}
              </View>
            </View>
          </FadeIn>
        );
      })}
    </View>
  );
}

const NODE = 24;
const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 14 },
  rail: { width: NODE, alignItems: 'center' },
  node: {
    width: NODE,
    height: NODE,
    borderRadius: NODE / 2,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodeDone: { backgroundColor: colors.accent, borderColor: colors.accent },
  nodeActive: { borderColor: colors.accent, backgroundColor: colors.accentSoft },
  line: { flex: 1, width: 2, backgroundColor: colors.border, marginVertical: 2, minHeight: 14 },
  lineFill: { width: 2, backgroundColor: colors.accent },
  body: { flex: 1, paddingBottom: 18, paddingTop: 2 },
  bodyActive: {
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.md,
    padding: 14,
    marginTop: -10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.accentSoft,
  },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  title: { flex: 1, color: colors.textFaint, fontSize: 15, fontWeight: '600' },
  time: { color: colors.textDim, fontSize: 12, fontWeight: '500' },
  desc: { color: colors.textDim, fontSize: 13.5, lineHeight: 19, marginTop: 8 },
  photo: { borderRadius: 12, overflow: 'hidden', marginTop: 12 },
  barTrack: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 3,
    marginTop: 12,
    overflow: 'hidden',
  },
  barFill: { height: 6, borderRadius: 3, backgroundColor: colors.accent, overflow: 'hidden' },
});
