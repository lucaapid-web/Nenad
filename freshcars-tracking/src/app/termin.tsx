import { useState } from 'react';
import { Text, View } from 'react-native';
import { FadeIn } from '../components/motion';
import { SlotPicker } from '../components/SlotPicker';
import { Chip, Field, Label, PrimaryButton, Screen, Success } from '../components/ui';
import { formatDayTime } from '../lib/format';
import { requestService } from '../services/requests';
import { colors } from '../theme';

const SERVICES = [
  { label: 'Unfallschaden', icon: 'car-wrench' },
  { label: 'Lackierung', icon: 'spray' },
  { label: 'Smart Repair', icon: 'auto-fix' },
  { label: 'Hagelschaden', icon: 'weather-hail' },
  { label: 'Kostenvoranschlag', icon: 'calculator-variant-outline' },
];

export default function TerminScreen() {
  const [service, setService] = useState<string | null>(null);
  const [slot, setSlot] = useState<Date | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [plate, setPlate] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<{ reference: string } | null>(null);

  const ready = !!service && !!slot && name.trim().length > 1 && phone.trim().length > 5;

  if (done && slot) {
    return (
      <Success
        title="Termin angefragt"
        text={`${service} am ${formatDayTime(slot, new Date())} Uhr. Wir bestätigen Ihren Termin kurz per SMS.`}
        reference={done.reference}
      />
    );
  }

  return (
    <Screen
      title="Termin buchen"
      subtitle="In drei Schritten zum Werkstatttermin."
      footer={
        <PrimaryButton
          label={slot ? `Termin anfragen · ${formatDayTime(slot, new Date())}` : 'Termin anfragen'}
          icon="calendar-check"
          disabled={!ready}
          loading={loading}
          onPress={async () => {
            setLoading(true);
            const res = await requestService.bookAppointment({
              service: service!,
              slot: slot!,
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
        <Label>1 · Worum geht es?</Label>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {SERVICES.map((s) => (
            <Chip
              key={s.label}
              label={s.label}
              icon={s.icon}
              selected={service === s.label}
              onPress={() => setService(s.label)}
            />
          ))}
        </View>
      </FadeIn>

      <FadeIn delay={200}>
        <Label>2 · Wann passt es Ihnen?</Label>
        <SlotPicker value={slot} onChange={setSlot} />
      </FadeIn>

      <FadeIn delay={280}>
        <Label>3 · Ihre Kontaktdaten</Label>
        <Field icon="account-outline" placeholder="Name" value={name} onChangeText={setName} />
        <Field
          icon="phone-outline"
          placeholder="Telefon"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <Field
          icon="car-side"
          placeholder="Kennzeichen (optional)"
          autoCapitalize="characters"
          value={plate}
          onChangeText={setPlate}
        />
        <Text style={{ color: colors.textFaint, fontSize: 12.5, marginTop: 4 }}>
          Ihre Daten werden nur zur Terminabstimmung verwendet.
        </Text>
      </FadeIn>
    </Screen>
  );
}
