import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, nativeDriver, radius } from '../theme';

export interface ToastMessage {
  id: number;
  icon: string;
  title: string;
  text: string;
}

/** Benachrichtigung, die von oben hereingleitet – Vorgeschmack auf Push-Nachrichten. */
export function Toast({ message, onHide }: { message: ToastMessage | null; onHide: () => void }) {
  const insets = useSafeAreaInsets();
  const v = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!message) return;
    v.setValue(0);
    Animated.spring(v, { toValue: 1, useNativeDriver: nativeDriver, bounciness: 8, speed: 12 }).start();
    const t = setTimeout(() => {
      Animated.timing(v, { toValue: 0, duration: 280, useNativeDriver: nativeDriver }).start(onHide);
    }, 3600);
    return () => clearTimeout(t);
  }, [message, v, onHide]);

  if (!message) return null;
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.wrap,
        {
          top: insets.top + 10,
          opacity: v,
          transform: [{ translateY: v.interpolate({ inputRange: [0, 1], outputRange: [-120, 0] }) }],
        },
      ]}
    >
      <View style={styles.icon}>
        <MaterialCommunityIcons name={message.icon as any} size={20} color={colors.bg} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{message.title}</Text>
        <Text style={styles.text}>{message.text}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 16,
    right: 16,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(25, 30, 37, 0.97)',
    borderWidth: 1,
    borderColor: colors.accentSoft,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 12,
  },
  icon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { color: colors.text, fontWeight: '800', fontSize: 15 },
  text: { color: colors.textDim, fontSize: 13, marginTop: 2 },
});
