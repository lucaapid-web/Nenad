import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { formatTime } from '../lib/format';
import { requestService } from '../services/requests';
import { colors, radius } from '../theme';
import { PressableScale } from './motion';

const WD = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const MONTH = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
const sameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();

/** Tag + Uhrzeit wählen. Belegte Zeiten sind ausgegraut. */
export function SlotPicker({
  value,
  onChange,
  days = 10,
}: {
  value: Date | null;
  onChange: (d: Date) => void;
  days?: number;
}) {
  const dayList = useMemo(() => requestService.getDays(days), [days]);
  const [day, setDay] = useState<Date>(value ?? dayList[0]);
  const slots = useMemo(() => requestService.getSlots(day), [day]);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
        {dayList.map((d) => {
          const on = sameDay(d, day);
          return (
            <PressableScale key={d.toISOString()} onPress={() => setDay(d)} style={[styles.day, on && styles.dayOn]}>
              <Text style={[styles.dayWd, on && { color: colors.bg }]}>{WD[d.getDay()]}</Text>
              <Text style={[styles.dayNum, on && { color: colors.bg }]}>{d.getDate()}</Text>
              <Text style={[styles.dayMonth, on && { color: colors.bg }]}>{MONTH[d.getMonth()]}</Text>
            </PressableScale>
          );
        })}
      </ScrollView>

      <View style={styles.grid}>
        {slots.map((s) => {
          const on = value?.getTime() === s.start.getTime();
          return (
            <PressableScale
              key={s.start.toISOString()}
              disabled={!s.available}
              onPress={() => onChange(s.start)}
              containerStyle={styles.cell}
              style={[styles.slot, !s.available && styles.slotOff, on && styles.slotOn]}
            >
              <Text
                style={[
                  styles.slotText,
                  !s.available && styles.slotTextOff,
                  on && { color: colors.bg },
                ]}
              >
                {formatTime(s.start)}
              </Text>
            </PressableScale>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  day: {
    width: 62,
    paddingVertical: 12,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  dayOn: { backgroundColor: colors.accent, borderColor: colors.accent },
  dayWd: { color: colors.textDim, fontSize: 12, fontWeight: '700' },
  dayNum: { color: colors.text, fontSize: 22, fontWeight: '900', marginVertical: 2 },
  dayMonth: { color: colors.textDim, fontSize: 11, fontWeight: '600' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 16, marginHorizontal: -4 },
  cell: { width: '25%', padding: 4 },
  slot: {
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotOff: { backgroundColor: 'transparent', borderColor: colors.surface },
  slotOn: { backgroundColor: colors.accent, borderColor: colors.accent },
  slotText: { color: colors.text, fontSize: 14.5, fontWeight: '700' },
  slotTextOff: { color: colors.textFaint, textDecorationLine: 'line-through' },
});
