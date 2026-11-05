import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { STAGES } from '../data/stages';
import { Order } from '../data/types';
import { formatDayTime, formatTime } from '../lib/format';
import { colors, radius } from '../theme';
import { FadeIn, PulseDot } from './motion';

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
      />
    </View>
  );
}

export function Timeline({ order, now }: { order: Order; now: Date }) {
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
                    <MaterialCommunityIcons name="check" size={14} color={colors.bg} />
                  ) : active ? (
                    <PulseDot size={8} />
                  ) : null}
                </View>
                {!isLast && <View style={[styles.line, lineDone && styles.lineDone]} />}
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
  lineDone: { backgroundColor: colors.accent },
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
  barTrack: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 3,
    marginTop: 12,
    overflow: 'hidden',
  },
  barFill: { height: 6, borderRadius: 3, backgroundColor: colors.accent },
});
