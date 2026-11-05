import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { SessionProvider } from '../lib/session';
import { colors } from '../theme';

// Harmlose Web-Warnung aus React Native Web (Animated reicht `collapsable` an das DOM durch).
LogBox.ignoreLogs([/non-boolean attribute/]);

export default function RootLayout() {
  return (
    <SessionProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.bg },
          animation: 'fade_from_bottom',
        }}
      />
    </SessionProvider>
  );
}
