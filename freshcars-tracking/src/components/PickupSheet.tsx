import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { company } from '../config/company';
import { formatDayTime } from '../lib/format';
import { requestService } from '../services/requests';
import { colors, nativeDriver } from '../theme';
import { SlotPicker } from './SlotPicker';
import { PrimaryButton } from './ui';

/** Bottom-Sheet: Abholzeit wählen. */
export function PickupSheet({
  orderId,
  visible,
  onClose,
  onBooked,
}: {
  orderId: string;
  visible: boolean;
  onClose: () => void;
  onBooked: (d: Date) => void;
}) {
  const insets = useSafeAreaInsets();
  const [slot, setSlot] = useState<Date | null>(requestService.getPickup(orderId) ?? null);
  const [loading, setLoading] = useState(false);
  const y = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      y.setValue(0);
      Animated.timing(y, {
        toValue: 1,
        duration: 380,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: nativeDriver,
      }).start();
    }
  }, [visible, y]);

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <Animated.View style={[styles.backdrop, { opacity: y }]}>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
      </Animated.View>
      <Animated.View
        style={[
          styles.sheet,
          {
            paddingBottom: insets.bottom + 18,
            transform: [{ translateY: y.interpolate({ inputRange: [0, 1], outputRange: [600, 0] }) }],
          },
        ]}
      >
        <View style={styles.grabber} />
        <Text style={styles.title}>Abholzeit wählen</Text>
        <Text style={styles.sub}>{company.openingHours} · Wir halten Ihr Fahrzeug startklar bereit.</Text>
        <View style={{ marginTop: 18 }}>
          <SlotPicker value={slot} onChange={setSlot} days={6} />
        </View>
        <View style={{ marginTop: 18 }}>
          <PrimaryButton
            label={slot ? `Abholung ${formatDayTime(slot, new Date())}` : 'Zeit auswählen'}
            icon="check"
            disabled={!slot}
            loading={loading}
            onPress={async () => {
              setLoading(true);
              await requestService.schedulePickup(orderId, slot!);
              setLoading(false);
              onBooked(slot!);
            }}
          />
        </View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)' },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    maxWidth: 560,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.surface,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  grabber: { alignSelf: 'center', width: 40, height: 5, borderRadius: 3, backgroundColor: colors.border },
  title: { color: colors.text, fontSize: 24, fontWeight: '900', marginTop: 16 },
  sub: { color: colors.textDim, fontSize: 14.5, marginTop: 4 },
});
