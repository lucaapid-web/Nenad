import { Image, StyleSheet, Text, View } from 'react-native';

const WORDMARK = require('../../assets/logo-wordmark.png');
const RATIO = 2082 / 282;

/** Original Fresh-Cars-Wortmarke (weiß für dunklen Hintergrund). */
export function Logo({ size = 22 }: { size?: number }) {
  const h = size * 1.15;
  return <Image source={WORDMARK} style={{ height: h, width: h * RATIO }} resizeMode="contain" accessibilityLabel="Fresh Cars" />;
}

/** Deutsches Kennzeichen im Look des echten Schilds. */
export function Plate({ plate }: { plate: string }) {
  return (
    <View style={styles.plate}>
      <View style={styles.eu}>
        <Text style={styles.euText}>D</Text>
      </View>
      <Text style={styles.plateText}>{plate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  plate: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#F7F7F2',
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#1B1B1B',
    overflow: 'hidden',
  },
  eu: { backgroundColor: '#1D4FB3', paddingHorizontal: 5, justifyContent: 'flex-end', paddingBottom: 3 },
  euText: { color: '#fff', fontSize: 10, fontWeight: '800' },
  plateText: {
    color: '#111',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1.2,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
});
