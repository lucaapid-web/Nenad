import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { STAGES } from '../data/stages';
import { Order, StageKey } from '../data/types';
import { colors, radius } from '../theme';
import { CarArt } from './CarArt';
import { PressableScale } from './motion';

interface Shot {
  key: string;
  stage: StageKey;
  title: string;
  uri?: string; // echtes Foto aus der Werkstatt
}

/** „Aus der Werkstatt“: Bilder zu allen erledigten und dem laufenden Schritt. */
export function PhotoStrip({ order }: { order: Order }) {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState<Shot | null>(null);

  const shots: Shot[] = [];
  order.stages.forEach((s, i) => {
    if (s.status === 'pending' || s.key === 'ready') return;
    const title = STAGES[i].title;
    if (s.photos.length) s.photos.forEach((uri, j) => shots.push({ key: `${s.key}-${j}`, stage: s.key, title, uri }));
    else shots.push({ key: s.key, stage: s.key, title });
  });
  shots.reverse(); // neueste zuerst

  const big = Math.min(width, 560) - 32;

  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
        {shots.map((s) => (
          <PressableScale key={s.key} onPress={() => setOpen(s)} style={styles.thumb}>
            {s.uri ? (
              <Image source={{ uri: s.uri }} style={{ width: 150, height: 100 }} />
            ) : (
              <CarArt id={`t-${s.key}`} color={order.vehicle.colorHex} variant={s.stage} width={150} height={100} />
            )}
            <View style={styles.caption}>
              <Text style={styles.captionText}>{s.title}</Text>
              {s.uri && <MaterialCommunityIcons name="camera" size={11} color={colors.accent} />}
            </View>
          </PressableScale>
        ))}
      </ScrollView>

      <Modal visible={!!open} transparent animationType="fade" onRequestClose={() => setOpen(null)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(null)}>
          {open && (
            <View style={{ width: big }}>
              <View style={styles.bigWrap}>
                {open.uri ? (
                  <Image source={{ uri: open.uri }} style={{ width: big, height: big * 0.66 }} resizeMode="cover" />
                ) : (
                  <CarArt id={`b-${open.key}`} color={order.vehicle.colorHex} variant={open.stage} width={big} height={big * 0.5} />
                )}
              </View>
              <Text style={styles.bigTitle}>{open.title}</Text>
              <Text style={styles.bigSub}>
                {open.uri ? 'Foto aus der Werkstatt' : 'Beispielbild · im Livebetrieb echte Werkstattfotos'}
              </Text>
            </View>
          )}
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  thumb: {
    width: 150,
    borderRadius: radius.md,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  caption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  captionText: { color: colors.text, fontSize: 12.5, fontWeight: '700' },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(5,6,8,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigWrap: { borderRadius: radius.lg, overflow: 'hidden' },
  bigTitle: { color: colors.text, fontSize: 22, fontWeight: '900', marginTop: 16 },
  bigSub: { color: colors.textDim, fontSize: 13.5, marginTop: 4 },
});
