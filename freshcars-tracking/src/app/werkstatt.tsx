import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import { Plate } from '../components/Brand';
import { FadeIn, PressableScale, PulseDot } from '../components/motion';
import { Screen } from '../components/ui';
import { STAGES } from '../data/stages';
import { Order } from '../data/types';
import { useSession } from '../lib/session';
import { demoService } from '../services/tracking';
import { colors, radius } from '../theme';

/**
 * Werkstatt-Modus für Mitarbeiter (z. B. Tablet in der Halle):
 * Schritt abschließen oder Foto hochladen – der Kunde sieht es sofort.
 */
export default function WerkstattScreen() {
  const [orders, setOrders] = useState<Order[]>([]);
  const { signIn } = useSession();

  useEffect(() => demoService.subscribeBoard(setOrders), []);

  const ready = orders.filter((o) => o.isReady).length;

  const takePhoto = async (orderId: string) => {
    if (Platform.OS !== 'web') {
      const perm = await ImagePicker.requestCameraPermissionsAsync();
      if (!perm.granted) {
        Alert.alert('Kamera', 'Bitte Kamerazugriff erlauben.');
        return;
      }
    }
    const res = await ImagePicker.launchCameraAsync({ mediaTypes: ['images'], quality: 0.6 });
    if (!res.canceled) demoService.addPhoto(orderId, res.assets[0].uri);
  };

  return (
    <Screen
      title="Werkstatt"
      subtitle={`${orders.length} Fahrzeuge in Arbeit · ${ready} abholbereit`}
    >
      <View style={{ height: 20 }} />
      {orders.map((o, i) => {
        const stage = STAGES[o.currentIndex];
        return (
          <FadeIn key={o.id} delay={100 + i * 70}>
            <View style={[styles.card, o.isReady && styles.cardReady]}>
              <View style={styles.row}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.car}>
                    {o.vehicle.make} {o.vehicle.model}
                  </Text>
                  <View style={styles.meta}>
                    <Plate plate={o.plate} />
                    <Text style={styles.customer}>{o.customerName}</Text>
                  </View>
                </View>
                <PressableScale
                  style={styles.view}
                  onPress={() => {
                    signIn(o.id);
                    router.push('/status');
                  }}
                >
                  <MaterialCommunityIcons name="cellphone" size={18} color={colors.textDim} />
                </PressableScale>
              </View>

              {/* 8 Segmente = 8 Schritte */}
              <View style={styles.segments}>
                {STAGES.map((s, j) => (
                  <View
                    key={s.key}
                    style={[
                      styles.seg,
                      j < o.currentIndex && styles.segDone,
                      j === o.currentIndex && (o.isReady ? styles.segDone : styles.segActive),
                    ]}
                  />
                ))}
              </View>

              <View style={styles.row}>
                <View style={styles.stage}>
                  {!o.isReady && <PulseDot size={8} />}
                  <MaterialCommunityIcons
                    name={stage.icon as any}
                    size={17}
                    color={o.isReady ? colors.accent : colors.text}
                  />
                  <Text style={styles.stageText}>{stage.title}</Text>
                </View>
                {!o.isReady && (
                  <>
                    <PressableScale style={styles.iconBtn} onPress={() => takePhoto(o.id)}>
                      <MaterialCommunityIcons name="camera-outline" size={18} color={colors.text} />
                    </PressableScale>
                    <PressableScale
                      style={styles.next}
                      onPress={() => {
                        demoService.advance(o.id);
                        if (Platform.OS !== 'web') Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                      }}
                    >
                      <Text style={styles.nextText}>Fertig</Text>
                      <MaterialCommunityIcons name="skip-next" size={18} color={colors.bg} />
                    </PressableScale>
                  </>
                )}
              </View>
            </View>
          </FadeIn>
        );
      })}
      <Text style={styles.hint}>
        Tipp: Schritt abschließen, dann mit dem Handy-Symbol die Kundenansicht öffnen – sie ist sofort
        aktuell.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 12,
    gap: 14,
  },
  cardReady: { borderColor: colors.accentGlow },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  car: { color: colors.text, fontSize: 17, fontWeight: '800' },
  meta: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 8 },
  customer: { color: colors.textDim, fontSize: 13 },
  view: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.surfaceHigh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segments: { flexDirection: 'row', gap: 4 },
  seg: { flex: 1, height: 6, borderRadius: 3, backgroundColor: colors.border },
  segDone: { backgroundColor: colors.accent },
  segActive: { backgroundColor: colors.accentGlow },
  stage: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 },
  stageText: { color: colors.text, fontSize: 15, fontWeight: '700' },
  iconBtn: {
    width: 42,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.surfaceHigh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    height: 40,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: colors.accent,
  },
  nextText: { color: colors.bg, fontWeight: '800', fontSize: 14 },
  hint: { color: colors.textFaint, fontSize: 12.5, lineHeight: 18, marginTop: 8, marginBottom: 12 },
});
