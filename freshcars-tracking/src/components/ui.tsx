import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, nativeDriver, radius } from '../theme';
import { AmbientGlow, Confetti, Shimmer } from './fx';
import { FadeIn, PressableScale } from './motion';

/** Unterseite mit Zurück-Button, Titel und Scrollbereich. */
export function Screen({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.screen}>
      <AmbientGlow />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={[styles.content, { paddingTop: insets.top + 14, paddingBottom: 24 }]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <FadeIn>
            <Pressable
              hitSlop={12}
              style={styles.back}
              onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
            >
              <MaterialCommunityIcons name="arrow-left" size={22} color={colors.text} />
            </Pressable>
          </FadeIn>
          <FadeIn delay={60}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </FadeIn>
          {children}
        </ScrollView>
        {footer && <View style={[styles.footer, { paddingBottom: insets.bottom + 14 }]}>{footer}</View>}
      </KeyboardAvoidingView>
    </View>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <Text style={styles.label}>{children}</Text>;
}

export function Chip({
  label,
  icon,
  selected,
  onPress,
}: {
  label: string;
  icon?: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <PressableScale onPress={onPress} style={[styles.chip, selected && styles.chipOn]}>
      {icon && (
        <MaterialCommunityIcons name={icon as any} size={16} color={selected ? colors.bg : colors.textDim} />
      )}
      <Text style={[styles.chipText, selected && { color: colors.bg }]}>{label}</Text>
    </PressableScale>
  );
}

export function Field(props: TextInputProps & { icon?: string }) {
  const [focus, setFocus] = useState(false);
  const { icon, style, multiline, ...rest } = props;
  return (
    <View style={[styles.field, multiline && styles.fieldMulti, focus && styles.fieldFocus]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon as any}
          size={19}
          color={colors.textDim}
          style={multiline ? { marginTop: 2 } : undefined}
        />
      )}
      <TextInput
        placeholderTextColor={colors.textFaint}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        multiline={multiline}
        style={[styles.fieldText, multiline && { minHeight: 96, textAlignVertical: 'top' }, style]}
        {...rest}
      />
    </View>
  );
}

export function PrimaryButton({
  label,
  icon = 'arrow-right',
  onPress,
  loading,
  disabled,
}: {
  label: string;
  icon?: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}) {
  return (
    <PressableScale
      style={[styles.button, disabled && { opacity: 0.4 }]}
      onPress={onPress}
      disabled={loading || disabled}
    >
      {loading ? (
        <ActivityIndicator color={colors.bg} />
      ) : (
        <>
          <Text style={styles.buttonText}>{label}</Text>
          <MaterialCommunityIcons name={icon as any} size={20} color={colors.bg} />
          {!disabled && <Shimmer />}
        </>
      )}
    </PressableScale>
  );
}

/** Erfolgsbildschirm mit animiertem Haken. */
export function Success({
  title,
  text,
  reference,
  actionLabel = 'Zur Startseite',
  onAction = () => router.replace('/'),
}: {
  title: string;
  text: string;
  reference?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  const insets = useSafeAreaInsets();
  const pop = useRef(new Animated.Value(0)).current;
  const ring = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.spring(pop, { toValue: 1, useNativeDriver: nativeDriver, bounciness: 14, speed: 7 }),
      Animated.timing(ring, {
        toValue: 1,
        duration: 1100,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: nativeDriver,
      }),
    ]).start();
  }, [pop, ring]);

  return (
    <View style={[styles.screen, styles.successWrap, { paddingTop: insets.top, paddingBottom: insets.bottom + 20 }]}>
      <AmbientGlow strong />
      <View style={styles.successCenter}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Animated.View
            style={[
              styles.successRing,
              {
                opacity: ring.interpolate({ inputRange: [0, 1], outputRange: [0.7, 0] }),
                transform: [{ scale: ring.interpolate({ inputRange: [0, 1], outputRange: [1, 2.2] }) }],
              },
            ]}
          />
          <Animated.View style={[styles.successCheck, { transform: [{ scale: pop }] }]}>
            <MaterialCommunityIcons name="check" size={52} color={colors.bg} />
          </Animated.View>
          <Confetti run />
        </View>
        <FadeIn delay={250}>
          <Text style={styles.successTitle}>{title}</Text>
          <Text style={styles.successText}>{text}</Text>
          {reference && (
            <View style={styles.refBox}>
              <Text style={styles.refLabel}>Vorgangsnummer</Text>
              <Text style={styles.refValue}>{reference}</Text>
            </View>
          )}
        </FadeIn>
      </View>
      <FadeIn delay={450} style={{ width: '100%', maxWidth: 520, paddingHorizontal: 22 }}>
        <PrimaryButton label={actionLabel} icon="arrow-right" onPress={onAction} />
      </FadeIn>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  glow: { position: 'absolute', top: 0, left: 0, right: 0, height: 420 },
  content: { paddingHorizontal: 22, maxWidth: 560, width: '100%', alignSelf: 'center' },
  back: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { color: colors.text, fontSize: 34, fontWeight: '900', letterSpacing: -1, marginTop: 22 },
  subtitle: { color: colors.textDim, fontSize: 15.5, lineHeight: 22, marginTop: 8 },
  label: {
    color: colors.textFaint,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginTop: 30,
    marginBottom: 12,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipOn: { backgroundColor: colors.accent, borderColor: colors.accent },
  chipText: { color: colors.text, fontSize: 14, fontWeight: '700' },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.border,
    paddingHorizontal: 16,
    minHeight: 56,
    marginBottom: 12,
  },
  fieldMulti: { alignItems: 'flex-start', paddingVertical: 14 },
  fieldFocus: { borderColor: colors.accent, backgroundColor: colors.surfaceHigh },
  fieldText: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 14,
    ...(Platform.OS === 'web' ? ({ outlineStyle: 'none' } as any) : null),
  },
  footer: {
    paddingHorizontal: 22,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.bg,
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
  },
  button: {
    height: 58,
    borderRadius: radius.md,
    backgroundColor: colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: colors.accent,
    shadowOpacity: 0.4,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  buttonText: { color: colors.bg, fontSize: 17, fontWeight: '800' },
  successWrap: { alignItems: 'center' },
  successCenter: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 28, maxWidth: 520 },
  successRing: {
    position: 'absolute',
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 3,
    borderColor: colors.accent,
  },
  successCheck: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.accent,
    shadowOpacity: 0.6,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 0 },
  },
  successTitle: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: -0.8,
    textAlign: 'center',
    marginTop: 36,
  },
  successText: { color: colors.textDim, fontSize: 16, lineHeight: 23, textAlign: 'center', marginTop: 12 },
  refBox: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 26,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  refLabel: { color: colors.textDim, fontSize: 12, fontWeight: '700' },
  refValue: { color: colors.text, fontSize: 20, fontWeight: '900', letterSpacing: 1.5, marginTop: 4 },
});
