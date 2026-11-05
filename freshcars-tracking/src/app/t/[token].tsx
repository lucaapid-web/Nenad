import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../components/Brand';
import { FadeIn } from '../../components/motion';
import { PrimaryButton } from '../../components/ui';
import { useSession } from '../../lib/session';
import { trackingService } from '../../services/tracking';
import { colors } from '../../theme';

/** Einstieg per Link (SMS/WhatsApp): freshcars://t/<code> – ohne Login. */
export default function TokenEntry() {
  const { token } = useLocalSearchParams<{ token: string }>();
  const { signIn } = useSession();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    trackingService.loginWithToken(String(token)).then((order) => {
      if (!alive) return;
      if (!order) return setFailed(true);
      signIn(order.id);
      router.replace('/status');
    });
    return () => {
      alive = false;
    };
  }, [token, signIn]);

  return (
    <View style={styles.screen}>
      <FadeIn style={{ alignItems: 'center' }}>
        <Logo size={26} />
        {failed ? (
          <>
            <Text style={styles.text}>Dieser Link ist leider ungültig oder abgelaufen.</Text>
            <View style={{ width: 280, marginTop: 24 }}>
              <PrimaryButton label="Zum Login" onPress={() => router.replace('/')} />
            </View>
          </>
        ) : (
          <>
            <ActivityIndicator color={colors.accent} style={{ marginTop: 32 }} />
            <Text style={styles.text}>Ihr Fahrzeug wird geladen …</Text>
          </>
        )}
      </FadeIn>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center', padding: 24 },
  text: { color: colors.textDim, fontSize: 15, marginTop: 16, textAlign: 'center' },
});
