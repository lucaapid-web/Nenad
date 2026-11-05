import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, PanResponder, StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../theme';
import { CarArt } from './CarArt';

const HEIGHT = 200;

/** Vorher/Nachher-Vergleich zum Hin- und Herschieben. */
export function BeforeAfter({ color }: { color: string }) {
  const [w, setW] = useState(0);
  const pos = useRef(new Animated.Value(0.5)).current;
  const posValue = useRef(0.5);
  const start = useRef(0.5);

  useEffect(() => {
    const id = pos.addListener(({ value }) => (posValue.current = value));
    return () => pos.removeListener(id);
  }, [pos]);

  // Kleiner Hinweis-Schwung beim Erscheinen.
  useEffect(() => {
    if (!w) return;
    const ease = Easing.inOut(Easing.cubic);
    Animated.sequence([
      Animated.delay(500),
      Animated.timing(pos, { toValue: 0.78, duration: 650, easing: ease, useNativeDriver: false }),
      Animated.timing(pos, { toValue: 0.25, duration: 900, easing: ease, useNativeDriver: false }),
      Animated.timing(pos, { toValue: 0.5, duration: 600, easing: ease, useNativeDriver: false }),
    ]).start();
  }, [w, pos]);

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        pos.stopAnimation();
        start.current = posValue.current;
      },
      onPanResponderMove: (_, g) => {
        if (!wRef.current) return;
        pos.setValue(Math.min(0.98, Math.max(0.02, start.current + g.dx / wRef.current)));
      },
    }),
  ).current;
  const wRef = useRef(0);

  const left = pos.interpolate({ inputRange: [0, 1], outputRange: [0, w || 1] });

  return (
    <View
      style={styles.wrap}
      onLayout={(e) => {
        setW(e.nativeEvent.layout.width);
        wRef.current = e.nativeEvent.layout.width;
      }}
      {...pan.panHandlers}
    >
      {w > 0 && (
        <>
          <CarArt id="after" color={color} variant="ready" width={w} height={HEIGHT} />
          <Animated.View style={[styles.after, { width: left }]}>
            <CarArt id="before" color={color} variant="damaged" width={w} height={HEIGHT} />
          </Animated.View>
          <Animated.View style={[styles.handleLine, { left }]} pointerEvents="none">
            <View style={styles.handle}>
              <MaterialCommunityIcons name="arrow-left-right" size={18} color={colors.bg} />
            </View>
          </Animated.View>
          <View style={[styles.tag, { left: 10 }]} pointerEvents="none">
            <Text style={styles.tagText}>VORHER</Text>
          </View>
          <View style={[styles.tag, { right: 10 }]} pointerEvents="none">
            <Text style={styles.tagText}>NACHHER</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: HEIGHT,
    borderRadius: radius.lg,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  after: { position: 'absolute', top: 0, left: 0, bottom: 0, overflow: 'hidden' },
  handleLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 2,
    marginLeft: -1,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  handle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
  },
  tag: {
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  tagText: { color: colors.text, fontSize: 10.5, fontWeight: '800', letterSpacing: 1.2 },
});
