import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

/** Platzhalter-Wortmarke – wird durch das echte Fresh-Cars-Logo ersetzt. */
export function Logo({ size = 22 }: { size?: number }) {
  return (
    <View style={styles.row}>
      <Text style={[styles.word, { fontSize: size }]}>FRESH</Text>
      <Text style={[styles.word, styles.accent, { fontSize: size }]}>CARS</Text>
    </View>
  );
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
  row: { flexDirection: 'row', alignItems: 'baseline', gap: 4 },
  word: { color: colors.text, fontWeight: '900', letterSpacing: 2.5, fontStyle: 'italic' },
  accent: { color: colors.accent },
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
