import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { STAGE_PHOTOS } from '../data/stagePhotos';
import { STAGES } from '../data/stages';
import { Order, StageKey } from '../data/types';
import { colors, radius } from '../theme';
import { CarArt } from './CarArt';
import { PressableScale } from './motion';

interface Shot {
  key: string;
  stage: StageKey;
  title: string;
  uri?: string;
  /** true = vom Mitarbeiter hochgeladenes Foto, false = Beispielfoto */
  real: boolean;
}

const TW = 200;
const TH = 134;

/** Foto mit Fallback auf die Illustration, falls es nicht lädt. */
export function StagePhoto({
  uri,
  stage,
  color,
  width,
  height,
  id,
}: {
  uri?: string;
  stage: StageKey;
  color: string;
  width: number;
  height: number;
  id: string;
}) {
  const [failed, setFailed] = useState(false);
  if (!uri || failed) return <CarArt id={id} color={color} variant={stage} width={width} height={height} />;
  return (
    <Image
      source={{ uri }}
      style={{ width, height, backgroundColor: colors.surfaceHigh }}
      resizeMode="cover"
      onError={() => setFailed(true)}
    />
  );
}

/** „Aus der Werkstatt“: Bilder zu allen erledigten und dem laufenden Schritt. */
export function PhotoStrip({ order }: { order: Order }) {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState<Shot | null>(null);

  const shots: Shot[] = [];
  order.stages.forEach((s, i) => {
    if (s.status === 'pending' || s.key === 'ready') return;
    const title = STAGES[i].title;
    s.photos.forEach((uri, j) => shots.push({ key: `${s.key}-${j}`, stage: s.key, title, uri, real: true }));
    if (!s.photos.length) shots.push({ key: s.key, stage: s.key, title, uri: STAGE_PHOTOS[s.key], real: false });
  });
  shots.reverse(); // neueste zuerst

  const big = Math.min(width, 560) - 32;

  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
        {shots.map((s) => (
          <PressableScale key={s.key} onPress={() => setOpen(s)} style={styles.thumb}>
            <StagePhoto id={`t-${s.key}`} uri={s.uri} stage={s.stage} color={order.vehicle.colorHex} width={TW} height={TH} />
            <View style={styles.caption}>
              <Text style={styles.captionText}>{s.title}</Text>
              {s.real && <MaterialCommunityIcons name="camera" size={12} color={colors.accent} />}
            </View>
          </PressableScale>
        ))}
      </ScrollView>

      <Modal visible={!!open} transparent animationType="fade" onRequestClose={() => setOpen(null)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(null)}>
          {open && (
            <View style={{ width: big }}>
              <View style={styles.bigWrap}>
                <StagePhoto
                  id={`b-${open.key}`}
                  uri={open.uri}
                  stage={open.stage}
                  color={order.vehicle.colorHex}
                  width={big}
                  height={big * 0.667}
                />
              </View>
              <Text style={styles.bigTitle}>{open.title}</Text>
              <Text style={styles.bigSub}>
                {open.real ? 'Foto aus der Werkstatt' : 'Beispielfoto · im Livebetrieb echte Fotos Ihres Fahrzeugs'}
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
    width: TW,
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
