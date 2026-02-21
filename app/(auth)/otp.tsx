import { PrimaryButton } from '../../components/PrimaryButton';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import { useState, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';

const OTP_LENGTH = 4;

export default function OtpScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: { nativeEvent: { key: string } },
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (text: string) => {
    const digits = text.replace(/\D/g, '').slice(0, OTP_LENGTH).split('');
    const next = [...otp];
    digits.forEach((d, i) => (next[i] = d));
    setOtp(next);
    const focusIndex = Math.min(digits.length, OTP_LENGTH - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  const allFilled = otp.every((d) => d.length === 1);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Verify your number</Text>
      <Text style={styles.subtitle}>
        Enter the 4-digit code we sent you
      </Text>

      <View style={styles.otpRow}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            style={[
              styles.otpInput,
              digit.length === 1 && styles.otpInputFilled,
            ]}
            value={digit}
            onChangeText={(v) => handleChange(v, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onPaste={(e) => handlePaste(e.nativeEvent.text)}
            keyboardType="number-pad"
            maxLength={1}
            selectTextOnFocus
          />
        ))}
      </View>

      <Pressable
        style={({ pressed }) => [styles.resend, pressed && styles.pressed]}
        onPress={() => {}}
      >
        <Text style={styles.resendText}>Resend code</Text>
      </Pressable>

      <View style={styles.footer}>
        <PrimaryButton
          title="Continue"
          onPress={() => router.replace('/welcome')}
          disabled={!allFilled}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 24,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 32,
  },
  otpRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  otpInput: {
    width: 64,
    height: 64,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  otpInputFilled: {
    borderColor: Colors.buttonPrimary,
  },
  resend: {
    alignSelf: 'flex-start',
    marginBottom: 32,
  },
  pressed: {
    opacity: 0.7,
  },
  resendText: {
    fontSize: 16,
    color: Colors.green,
    fontWeight: '600',
  },
  footer: {
    marginTop: 'auto',
  },
});
