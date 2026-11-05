import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { Redirect, router } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo, Plate } from '../components/Brand';
import { FadeIn, PressableScale, PulseDot } from '../components/motion';
import { ProgressRing } from '../components/ProgressRing';
import { Timeline } from '../components/Timeline';
import { Toast, ToastMessage } from '../components/Toast';
import { company } from '../config/company';
import { STAGES } from '../data/stages';
import { Order } from '../data/types';
import { formatDayTime } from '../lib/format';
import { useSession } from '../lib/session';
import { demoService, DemoSpeed, IS_DEMO, trackingService } from '../services/tracking';
import { colors, radius } from '../theme';

export default function StatusScreen() {
  const { orderId, signOut } = useSession();
  const insets = useSafeAreaInsets();
  const [order, setOrder] = useState<Order | null>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [speed, setSpeed] = useState<DemoSpeed>(demoService.getSpeed());
  const lastIndex = useRef<number | null>(null);

  useEffect(() => {
    if (!orderId) return;
    return trackingService.subscribe(orderId, (o) => {
      const prev = lastIndex.current;
      if (prev !== null && o.currentIndex > prev) {
        const def = STAGES[o.currentIndex];
        setToast({
          id: Date.now(),
          icon: def.icon,
          title: o.isReady ? 'Ihr Auto ist fertig!' : `Neuer Schritt: ${def.title}`,
          text: o.isReady
            ? `Ihr ${o.vehicle.make} kann abgeholt werden.`
            : `${STAGES[prev].title} abgeschlossen.`,
        });
        if (Platform.OS !== 'web') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
      lastIndex.current = o.currentIndex;
      setOrder(o);
    });
  }, [orderId]);

  useEffect(() => demoService.onSpeedChange(setSpeed), []);
  const hideToast = useCallback(() => setToast(null), []);

  if (!orderId) return <Redirect href="/" />;
  if (!order) return <View style={styles.screen} />;

  const now = demoService.getNow();
  const current = STAGES[order.currentIndex];
  const startedAt = order.stages[order.currentIndex].startedAt;

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={[order.isReady ? 'rgba(60,240,177,0.30)' : 'rgba(60,240,177,0.14)', 'rgba(60,240,177,0)']}
        style={styles.glow}
      />
      <Toast message={toast} onHide={hideToast} />

      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + 14, paddingBottom: insets.bottom + 32 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Kopfzeile */}
        <FadeIn style={styles.topBar}>
          <Logo size={17} />
          <Pressable
            hitSlop={12}
            onPress={() => {
              signOut();
              router.replace('/');
            }}
            style={styles.iconButton}
          >
            <MaterialCommunityIcons name="logout" size={20} color={colors.textDim} />
          </Pressable>
        </FadeIn>

        {/* Fahrzeug */}
        <FadeIn delay={80} style={styles.vehicle}>
          <Text style={styles.hello}>Hallo {order.customerName}</Text>
          <Text style={styles.car}>
            {order.vehicle.make} {order.vehicle.model}
          </Text>
          <View style={styles.metaRow}>
            <Plate plate={order.plate} />
            <View style={[styles.swatch, { backgroundColor: order.vehicle.colorHex }]} />
            <Text style={styles.meta}>{order.job}</Text>
          </View>
        </FadeIn>

        {/* Fortschritt */}
        <FadeIn delay={160} style={styles.ringWrap}>
          <ProgressRing
            progress={order.totalProgress}
            done={order.isReady}
            caption={order.isReady ? 'Fertig' : `Schritt ${order.currentIndex + 1} von ${STAGES.length}`}
          />
          <View style={styles.nowRow}>
            {!order.isReady && <PulseDot />}
            <Text style={styles.nowTitle}>{order.isReady ? 'Abholbereit' : current.title}</Text>
          </View>
          {!order.isReady && startedAt && (
            <Text style={styles.nowSub}>läuft seit {formatDayTime(startedAt, now)} Uhr</Text>
          )}
        </FadeIn>

        {/* Abholung */}
        <FadeIn delay={220}>
          <View style={[styles.etaCard, order.isReady && styles.etaReady]}>
            <View style={[styles.etaIcon, order.isReady && { backgroundColor: colors.accent }]}>
              <MaterialCommunityIcons
                name={order.isReady ? 'car-key' : 'clock-outline'}
                size={22}
                color={order.isReady ? colors.bg : colors.accent}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.etaLabel}>
                {order.isReady ? 'Abholung möglich' : 'Voraussichtlich abholbereit'}
              </Text>
              <Text style={styles.etaValue}>
                {order.isReady ? company.openingHours : `${formatDayTime(order.estimatedReadyAt, now)} Uhr`}
              </Text>
            </View>
          </View>
        </FadeIn>

        {/* Ablauf */}
        <FadeIn delay={260}>
          <Text style={styles.section}>Ablauf</Text>
        </FadeIn>
        <Timeline order={order} now={now} />

        {/* Kontakt */}
        <FadeIn delay={700} style={styles.actions}>
          <PressableScale containerStyle={{ flex: 1 }} style={styles.action} onPress={() => Linking.openURL(`tel:${company.phone}`)}>
            <MaterialCommunityIcons name="phone-outline" size={20} color={colors.text} />
            <Text style={styles.actionText}>Anrufen</Text>
          </PressableScale>
          <PressableScale
            containerStyle={{ flex: 1 }}
            style={styles.action}
            onPress={() =>
              Linking.openURL(`https://maps.google.com/?q=${encodeURIComponent(`Fresh Cars, ${company.address}`)}`)
            }
          >
            <MaterialCommunityIcons name="map-marker-outline" size={20} color={colors.text} />
            <Text style={styles.actionText}>Route</Text>
          </PressableScale>
        </FadeIn>

        {IS_DEMO && (
          <FadeIn delay={760} style={styles.demoBar}>
            <Text style={styles.demoLabel}>DEMO</Text>
            <View style={styles.segment}>
              {(['live', 'fast'] as DemoSpeed[]).map((s) => (
                <Pressable
                  key={s}
                  onPress={() => demoService.setSpeed(s)}
                  style={[styles.segItem, speed === s && styles.segActive]}
                >
                  <MaterialCommunityIcons
                    name={s === 'live' ? 'play' : 'fast-forward'}
                    size={14}
                    color={speed === s ? colors.bg : colors.textDim}
                  />
                  <Text style={[styles.segText, speed === s && { color: colors.bg }]}>
                    {s === 'live' ? 'Live' : 'Zeitraffer'}
                  </Text>
                </Pressable>
              ))}
            </View>
            <Pressable hitSlop={10} onPress={() => demoService.reset()}>
              <MaterialCommunityIcons name="restart" size={20} color={colors.textDim} />
            </Pressable>
          </FadeIn>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  glow: { position: 'absolute', top: 0, left: 0, right: 0, height: 520 },
  content: { paddingHorizontal: 22, maxWidth: 560, width: '100%', alignSelf: 'center' },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicle: { marginTop: 26 },
  hello: { color: colors.textDim, fontSize: 15, fontWeight: '600' },
  car: { color: colors.text, fontSize: 30, fontWeight: '900', letterSpacing: -0.8, marginTop: 4 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 12, flexWrap: 'wrap' },
  swatch: { width: 14, height: 14, borderRadius: 7, borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)' },
  meta: { color: colors.textDim, fontSize: 13.5, flexShrink: 1 },
  ringWrap: { alignItems: 'center', marginTop: 30, marginBottom: 26 },
  nowRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 22 },
  nowTitle: { color: colors.text, fontSize: 24, fontWeight: '800', letterSpacing: -0.4 },
  nowSub: { color: colors.textDim, fontSize: 14, marginTop: 6 },
  etaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },
  etaReady: { borderColor: colors.accent, backgroundColor: 'rgba(60,240,177,0.08)' },
  etaIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  etaLabel: { color: colors.textDim, fontSize: 13, fontWeight: '600' },
  etaValue: { color: colors.text, fontSize: 19, fontWeight: '800', marginTop: 3 },
  section: {
    color: colors.textFaint,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    marginTop: 34,
    marginBottom: 18,
  },
  actions: { flexDirection: 'row', gap: 12, marginTop: 14 },
  action: {
    height: 54,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  actionText: { color: colors.text, fontWeight: '700', fontSize: 15 },
  demoBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 28,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  demoLabel: { color: colors.textFaint, fontSize: 11, fontWeight: '800', letterSpacing: 1.5 },
  segment: { flexDirection: 'row', backgroundColor: colors.surface, borderRadius: 12, padding: 3 },
  segItem: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 7, paddingHorizontal: 12, borderRadius: 9 },
  segActive: { backgroundColor: colors.accent },
  segText: { color: colors.textDim, fontSize: 13, fontWeight: '700' },
});
