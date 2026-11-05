import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo } from '../components/Brand';
import { FadeIn, PressableScale } from '../components/motion';
import { company } from '../config/company';
import { DEMO_ORDERS } from '../data/demoOrders';
import { STAGES } from '../data/stages';
import { useSession } from '../lib/session';
import { IS_DEMO, trackingService } from '../services/tracking';
import { colors, nativeDriver, radius } from '../theme';

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const { signIn } = useSession();
  const [orderNo, setOrderNo] = useState('');
  const [plate, setPlate] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState<'order' | 'plate' | null>(null);
  const shake = useRef(new Animated.Value(0)).current;

  const runShake = () => {
    shake.setValue(0);
    Animated.sequence(
      [10, -10, 7, -7, 3, 0].map((toValue) =>
        Animated.timing(shake, { toValue, duration: 55, useNativeDriver: nativeDriver }),
      ),
    ).start();
  };

  const submit = async (o = orderNo, p = plate) => {
    if (!o.trim() || !p.trim()) {
      setError('Bitte Auftragsnummer und Kennzeichen eingeben.');
      runShake();
      return;
    }
    setError(null);
    setLoading(true);
    const order = await trackingService.login(o, p);
    setLoading(false);
    if (!order) {
      setError('Kein Auftrag gefunden. Bitte Angaben prüfen.');
      runShake();
      if (Platform.OS !== 'web') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      return;
    }
    if (Platform.OS !== 'web') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    signIn(order.id);
    router.push('/status');
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['rgba(60,240,177,0.22)', 'rgba(60,240,177,0)']}
        style={styles.glow}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.6, y: 1 }}
      />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={[styles.content, { paddingTop: insets.top + 28, paddingBottom: insets.bottom + 24 }]}
          keyboardShouldPersistTaps="handled"
        >
          <FadeIn>
            <Logo />
            <Text style={styles.tagline}>{company.tagline}</Text>
          </FadeIn>

          <FadeIn delay={120} style={styles.hero}>
            <Text style={styles.h1}>Wo ist{'\n'}mein Auto?</Text>
            <Text style={styles.sub}>Verfolgen Sie Ihre Reparatur live – Schritt für Schritt.</Text>
          </FadeIn>

          <Animated.View style={{ transform: [{ translateX: shake }] }}>
            <FadeIn delay={220}>
              <Text style={styles.label}>Auftragsnummer</Text>
              <View style={[styles.input, focus === 'order' && styles.inputFocus]}>
                <MaterialCommunityIcons name="receipt-text-outline" size={20} color={colors.textDim} />
                <TextInput
                  value={orderNo}
                  onChangeText={setOrderNo}
                  onFocus={() => setFocus('order')}
                  onBlur={() => setFocus(null)}
                  placeholder="z. B. FC-24017"
                  placeholderTextColor={colors.textFaint}
                  autoCapitalize="characters"
                  autoCorrect={false}
                  style={styles.inputText}
                  returnKeyType="next"
                />
              </View>
            </FadeIn>
            <FadeIn delay={290}>
              <Text style={styles.label}>Kennzeichen</Text>
              <View style={[styles.input, focus === 'plate' && styles.inputFocus]}>
                <MaterialCommunityIcons name="car-side" size={20} color={colors.textDim} />
                <TextInput
                  value={plate}
                  onChangeText={setPlate}
                  onFocus={() => setFocus('plate')}
                  onBlur={() => setFocus(null)}
                  placeholder="z. B. HER-FC 217"
                  placeholderTextColor={colors.textFaint}
                  autoCapitalize="characters"
                  autoCorrect={false}
                  style={styles.inputText}
                  returnKeyType="go"
                  onSubmitEditing={() => submit()}
                />
              </View>
            </FadeIn>
          </Animated.View>

          {error && <Text style={styles.error}>{error}</Text>}

          <FadeIn delay={360}>
            <PressableScale style={styles.button} onPress={() => submit()} disabled={loading}>
              {loading ? (
                <ActivityIndicator color={colors.bg} />
              ) : (
                <>
                  <Text style={styles.buttonText}>Status anzeigen</Text>
                  <MaterialCommunityIcons name="arrow-right" size={20} color={colors.bg} />
                </>
              )}
            </PressableScale>
          </FadeIn>

          {IS_DEMO && (
            <FadeIn delay={480} style={styles.demo}>
              <Text style={styles.demoLabel}>DEMO-FAHRZEUGE · ANTIPPEN</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                {DEMO_ORDERS.map((o) => (
                  <Pressable
                    key={o.id}
                    style={({ pressed }) => [styles.chip, pressed && { opacity: 0.7 }]}
                    onPress={() => {
                      setOrderNo(o.orderNo);
                      setPlate(o.plate);
                      submit(o.orderNo, o.plate);
                    }}
                  >
                    <Text style={styles.chipTitle}>
                      {o.vehicle.make} {o.vehicle.model}
                    </Text>
                    <Text style={styles.chipSub}>{STAGES[o.currentIndex].title}</Text>
                  </Pressable>
                ))}
              </ScrollView>
            </FadeIn>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  glow: { position: 'absolute', top: -80, left: -60, right: -60, height: 460, borderRadius: 300 },
  content: { paddingHorizontal: 24, flexGrow: 1, maxWidth: 520, width: '100%', alignSelf: 'center' },
  tagline: { color: colors.textDim, fontSize: 12, marginTop: 4, letterSpacing: 1.2, fontWeight: '600' },
  hero: { marginTop: 56, marginBottom: 36 },
  h1: { color: colors.text, fontSize: 44, lineHeight: 48, fontWeight: '900', letterSpacing: -1.5 },
  sub: { color: colors.textDim, fontSize: 16, lineHeight: 23, marginTop: 14 },
  label: { color: colors.textDim, fontSize: 13, fontWeight: '700', marginBottom: 8, marginLeft: 4 },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.border,
    paddingHorizontal: 16,
    height: 58,
    marginBottom: 18,
  },
  inputFocus: { borderColor: colors.accent, backgroundColor: colors.surfaceHigh },
  inputText: {
    flex: 1,
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1,
    height: '100%',
    ...(Platform.OS === 'web' ? ({ outlineStyle: 'none' } as any) : null),
  },
  error: { color: colors.danger, fontSize: 14, fontWeight: '600', marginBottom: 14, marginLeft: 4 },
  button: {
    height: 60,
    borderRadius: radius.md,
    backgroundColor: colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 6,
    shadowColor: colors.accent,
    shadowOpacity: 0.45,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  buttonText: { color: colors.bg, fontSize: 17, fontWeight: '800' },
  demo: { marginTop: 'auto', paddingTop: 40 },
  demoLabel: { color: colors.textFaint, fontSize: 11, fontWeight: '800', letterSpacing: 1.5, marginBottom: 12 },
  chip: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  chipTitle: { color: colors.text, fontSize: 14, fontWeight: '700' },
  chipSub: { color: colors.accent, fontSize: 12, fontWeight: '600', marginTop: 3 },
});
