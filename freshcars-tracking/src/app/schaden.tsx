import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { FadeIn, PressableScale } from '../components/motion';
import { Chip, Field, Label, PrimaryButton, Screen, Success } from '../components/ui';
import { requestService } from '../services/requests';
import { colors, radius } from '../theme';

const AREAS = ['Front', 'Heck', 'Fahrerseite', 'Beifahrerseite', 'Motorhaube', 'Dach', 'Felge', 'Sonstiges'];
const MAX_PHOTOS = 6;

export default function SchadenScreen() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [plate, setPlate] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<{ reference: string } | null>(null);

  const ready = photos.length > 0 && name.trim().length > 1 && phone.trim().length > 5;

  const addPhotos = async (source: 'camera' | 'library') => {
    const left = MAX_PHOTOS - photos.length;
    if (left <= 0) return;
    if (Platform.OS !== 'web') {
      const perm =
        source === 'camera'
          ? await ImagePicker.requestCameraPermissionsAsync()
          : await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!perm.granted) {
        Alert.alert('Zugriff benötigt', 'Bitte erlauben Sie den Zugriff in den Einstellungen.');
        return;
      }
    }
    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ['images'],
      quality: 0.7,
      allowsMultipleSelection: source === 'library',
      selectionLimit: left,
    };
    const res =
      source === 'camera'
        ? await ImagePicker.launchCameraAsync(options)
        : await ImagePicker.launchImageLibraryAsync(options);
    if (!res.canceled) {
      setPhotos((p) => [...p, ...res.assets.map((a) => a.uri)].slice(0, MAX_PHOTOS));
    }
  };

  if (done) {
    return (
      <Success
        title="Schaden gemeldet"
        text="Danke! Unser Team sieht sich Ihre Fotos an und meldet sich in der Regel innerhalb von 24 Stunden mit einer Einschätzung."
        reference={done.reference}
        actionLabel="Direkt Termin buchen"
        onAction={() => router.replace('/termin')}
      />
    );
  }

  return (
    <Screen
      title="Schaden melden"
      subtitle="Fotografieren, kurz beschreiben, absenden – ganz ohne Anruf."
      footer={
        <PrimaryButton
          label="An Fresh Cars senden"
          icon="send"
          disabled={!ready}
          loading={loading}
          onPress={async () => {
            setLoading(true);
            const res = await requestService.submitDamageReport({
              photos,
              areas,
              description,
              name,
              phone,
              plate,
            });
            setLoading(false);
            setDone(res);
          }}
        />
      }
    >
      <FadeIn delay={120}>
        <Label>
          Fotos · {photos.length}/{MAX_PHOTOS}
        </Label>
        <View style={styles.grid}>
          {photos.length < MAX_PHOTOS && (
            <>
              <PressableScale containerStyle={styles.cell} style={[styles.tile, styles.addMain]} onPress={() => addPhotos('camera')}>
                <MaterialCommunityIcons name="camera-outline" size={28} color={colors.bg} />
                <Text style={styles.addMainText}>Foto</Text>
              </PressableScale>
              <PressableScale containerStyle={styles.cell} style={[styles.tile, styles.add]} onPress={() => addPhotos('library')}>
                <MaterialCommunityIcons name="image-multiple-outline" size={26} color={colors.text} />
                <Text style={styles.addText}>Galerie</Text>
              </PressableScale>
            </>
          )}
          {photos.map((uri, i) => (
            <FadeIn key={uri + i} offset={8} style={styles.cell}>
              <View style={styles.tile}>
                <Image source={{ uri }} style={styles.photo} />
                <Pressable
                  hitSlop={8}
                  style={styles.remove}
                  onPress={() => setPhotos((p) => p.filter((_, j) => j !== i))}
                >
                  <MaterialCommunityIcons name="close" size={14} color={colors.text} />
                </Pressable>
              </View>
            </FadeIn>
          ))}
        </View>
        <Text style={styles.tip}>Tipp: Ein Foto mit etwas Abstand, eines ganz nah am Schaden.</Text>
      </FadeIn>

      <FadeIn delay={200}>
        <Label>Wo ist der Schaden?</Label>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {AREAS.map((a) => (
            <Chip
              key={a}
              label={a}
              selected={areas.includes(a)}
              onPress={() => setAreas((x) => (x.includes(a) ? x.filter((y) => y !== a) : [...x, a]))}
            />
          ))}
        </View>
      </FadeIn>

      <FadeIn delay={260}>
        <Label>Was ist passiert?</Label>
        <Field
          icon="text"
          placeholder="z. B. Beim Ausparken gegen einen Poller, Stoßstange eingedrückt."
          multiline
          value={description}
          onChangeText={setDescription}
        />
      </FadeIn>

      <FadeIn delay={320}>
        <Label>Kontakt</Label>
        <Field icon="account-outline" placeholder="Name" value={name} onChangeText={setName} />
        <Field icon="phone-outline" placeholder="Telefon" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
        <Field
          icon="car-side"
          placeholder="Kennzeichen (optional)"
          autoCapitalize="characters"
          value={plate}
          onChangeText={setPlate}
        />
      </FadeIn>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -5 },
  cell: { width: '33.333%', padding: 5 },
  tile: {
    aspectRatio: 1,
    borderRadius: radius.md,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addMain: { backgroundColor: colors.accent, gap: 4 },
  addMainText: { color: colors.bg, fontWeight: '800', fontSize: 13 },
  add: { borderWidth: 1.5, borderColor: colors.border, borderStyle: 'dashed', gap: 4 },
  addText: { color: colors.text, fontWeight: '700', fontSize: 13 },
  photo: { width: '100%', height: '100%' },
  remove: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tip: { color: colors.textFaint, fontSize: 12.5, marginTop: 10 },
});
