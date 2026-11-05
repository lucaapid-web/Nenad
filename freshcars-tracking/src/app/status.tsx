import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Redirect, router } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as ExpoLinking from 'expo-linking';
import { BlurView } from 'expo-blur';
import { Animated, Linking, Platform, Pressable, Share, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo, Plate } from '../components/Brand';
import { AmbientGlow } from '../components/fx';
import { FadeIn, PressableScale, PulseDot } from '../components/motion';
import { PhotoStrip } from '../components/PhotoStrip';
import { PickupSheet } from '../components/PickupSheet';
import { ProgressRing } from '../components/ProgressRing';
import { Timeline } from '../components/Timeline';
import { Toast, ToastMessage } from '../components/Toast';
import { company } from '../config/company';
import { STAGES } from '../data/stages';
import { Order } from '../data/types';
import { formatDayTime } from '../lib/format';
import { useSession } from '../lib/session';
import { requestService } from '../services/requests';
import { demoService, DemoSpeed, IS_DEMO, trackingService } from '../services/tracking';
import { colors, radius } from '../theme';

export default function StatusScreen() {
  const { orderId, signOut } = useSession();
  const insets = useSafeAreaInsets();
  const [order, setOrder] = useState<Order | null>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [speed, setSpeed] = useState<DemoSpeed>(demoService.getSpeed());
  const lastIndex = useRef<number | null>(null);
  const lastPhotos = useRef<number | null>(null);
  const [sheet, setSheet] = useState(false);
  const [pickup, setPickup] = useState<Date | undefined>(orderId ? requestService.getPickup(orderId) : undefined);

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
      const photoCount = o.stages.reduce((n, s) => n + s.photos.length, 0);
      if (lastPhotos.current !== null && photoCount > lastPhotos.current) {
        setToast({
          id: Date.now(),
          icon: 'camera',
          title: 'Neues Foto aus der Werkstatt',
          text: `${STAGES[o.currentIndex].title} – jetzt ansehen.`,
        });
      }
      lastPhotos.current = photoCount;
      lastIndex.current = o.currentIndex;
      setOrder(o);
    });
  }, [orderId]);

  useEffect(() => demoService.onSpeedChange(setSpeed), []);
  const hideToast = useCallback(() => setToast(null), []);
  const scrollY = useRef(new Animated.Value(0)).current;

  if (!orderId) return <Redirect href="/" />;
  if (!order) return <View style={styles.screen} />;

  const now = demoService.getNow();
  const current = STAGES[order.currentIndex];
  const startedAt = order.stages[order.currentIndex].startedAt;

  return (
    <View style={styles.screen}>
      <AmbientGlow strong={order.isReady} />

      <Animated.ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + 14, paddingBottom: insets.bottom + 32 }]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
      >
        {/* Kopfzeile */}
        <FadeIn style={styles.topBar}>
          <Logo size={17} />
          <View style={{ flexDirection: 'row', gap: 10 }}>
          <Pressable
            hitSlop={12}
            style={styles.iconButton}
            onPress={() => {
              const url = ExpoLinking.createURL(`/t/${order.token}`);
              Share.share({
                message: `Live-Status meines ${order.vehicle.make} bei Fresh Cars: ${url}`,
                url,
              }).catch(() => {});
            }}
          >
            <MaterialCommunityIcons name="share-variant" size={19} color={colors.textDim} />
          </Pressable>
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
          </View>
        </FadeIn>

        {/* Fahrzeug */}
        <FadeIn delay={80} style={styles.vehicle}>
          <View style={styles.helloRow}>
            <Text style={styles.hello}>Hallo {order.customerName}</Text>
            <View style={styles.live}>
              <PulseDot size={6} color={order.isReady ? colors.accent : '#FF5A5F'} />
              <Text style={styles.liveText}>{order.isReady ? 'FERTIG' : 'LIVE'}</Text>
            </View>
          </View>
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
          <Animated.View
            style={{
              opacity: scrollY.interpolate({ inputRange: [0, 320], outputRange: [1, 0.35], extrapolate: 'clamp' }),
              transform: [
                { translateY: scrollY.interpolate({ inputRange: [0, 320], outputRange: [0, 70], extrapolate: 'clamp' }) },
                { scale: scrollY.interpolate({ inputRange: [-120, 0, 320], outputRange: [1.08, 1, 0.86], extrapolate: 'clamp' }) },
              ],
            }}
          >
            <ProgressRing
              progress={order.totalProgress}
              done={order.isReady}
              caption={order.isReady ? 'Fertig' : `Schritt ${order.currentIndex + 1} von ${STAGES.length}`}
            />
          </Animated.View>
          {/* key = Schritt → Titel blendet bei jedem Wechsel neu ein */}
          <FadeIn key={order.currentIndex} offset={12} style={{ alignItems: 'center' }}>
            <View style={styles.nowRow}>
              {!order.isReady && <PulseDot />}
              <Text style={styles.nowTitle}>{order.isReady ? 'Abholbereit' : current.title}</Text>
            </View>
            {!order.isReady && startedAt && (
              <Text style={styles.nowSub}>läuft seit {formatDayTime(startedAt, now)} Uhr</Text>
            )}
          </FadeIn>
        </FadeIn>

        {/* Abholung */}
        <FadeIn delay={220}>
          <PressableScale
            disabled={!order.isReady}
            onPress={() => setSheet(true)}
            style={[styles.etaCard, order.isReady && styles.etaReady]}
          >
            <View style={[styles.etaIcon, order.isReady && { backgroundColor: colors.accent }]}>
              <MaterialCommunityIcons
                name={!order.isReady ? 'clock-outline' : pickup ? 'calendar-check' : 'car-key'}
                size={22}
                color={order.isReady ? colors.bg : colors.accent}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.etaLabel}>
                {!order.isReady
                  ? 'Voraussichtlich abholbereit'
                  : pickup
                    ? 'Ihre Abholung'
                    : 'Ihr Auto ist fertig'}
              </Text>
              <Text style={styles.etaValue}>
                {!order.isReady
                  ? `${formatDayTime(order.estimatedReadyAt, now)} Uhr`
                  : pickup
                    ? `${formatDayTime(pickup, new Date())} Uhr`
                    : 'Abholzeit wählen'}
              </Text>
            </View>
            {order.isReady && (
              <MaterialCommunityIcons name={pickup ? 'pencil-outline' : 'chevron-right'} size={22} color={colors.accent} />
            )}
          </PressableScale>
        </FadeIn>

        <FadeIn delay={260}>
          <Text style={styles.section}>Aus der Werkstatt</Text>
          <PhotoStrip order={order} />
        </FadeIn>

        {/* Ablauf */}
        <FadeIn delay={300}>
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
      </Animated.ScrollView>

      {/* Milchglas-Kopfleiste, die beim Scrollen einblendet */}
      <Animated.View
        pointerEvents="none"
        style={[
          styles.sticky,
          {
            paddingTop: insets.top,
            opacity: scrollY.interpolate({ inputRange: [140, 220], outputRange: [0, 1], extrapolate: 'clamp' }),
            transform: [
              { translateY: scrollY.interpolate({ inputRange: [140, 220], outputRange: [-12, 0], extrapolate: 'clamp' }) },
            ],
          },
        ]}
      >
        <BlurView intensity={45} tint="dark" style={StyleSheet.absoluteFill} />
        <View style={styles.stickyInner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.stickyCar} numberOfLines={1}>
              {order.vehicle.make} {order.vehicle.model}
            </Text>
            <Text style={styles.stickySub}>{order.isReady ? 'Abholbereit' : current.title}</Text>
          </View>
          <Text style={styles.stickyPct}>{Math.round(order.totalProgress * 100)}%</Text>
        </View>
        <View style={styles.stickyTrack}>
          <View style={[styles.stickyFill, { width: `${order.totalProgress * 100}%` }]} />
        </View>
      </Animated.View>

      <Toast message={toast} onHide={hideToast} />

      <PickupSheet
        orderId={order.id}
        visible={sheet}
        onClose={() => setSheet(false)}
        onBooked={(d) => {
          setPickup(d);
          setSheet(false);
          setToast({ id: Date.now(), icon: 'calendar-check', title: 'Abholung bestätigt', text: `${formatDayTime(d, new Date())} Uhr – wir freuen uns auf Sie.` });
        }}
      />
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
  helloRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  live: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: colors.border,
  },
  liveText: { color: colors.text, fontSize: 10.5, fontWeight: '900', letterSpacing: 1.4 },
  sticky: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(10,12,15,0.55)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
    overflow: 'hidden',
  },
  stickyInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 12,
    maxWidth: 560,
    width: '100%',
    alignSelf: 'center',
  },
  stickyCar: { color: colors.text, fontSize: 16, fontWeight: '800' },
  stickySub: { color: colors.accent, fontSize: 12.5, fontWeight: '700', marginTop: 1 },
  stickyPct: { color: colors.text, fontSize: 22, fontWeight: '900' },
  stickyTrack: { height: 2, backgroundColor: 'rgba(255,255,255,0.06)' },
  stickyFill: { height: 2, backgroundColor: colors.accent },
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
