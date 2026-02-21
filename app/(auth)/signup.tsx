import { InputField } from '../../components/InputField';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Create your profile</Text>
        <Text style={styles.subtitle}>Add your details to get started</Text>

        <View style={styles.form}>
          <InputField
            label="Full name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <InputField
            label="Phone"
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <InputField
            label="Password"
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <PrimaryButton title="Continue" onPress={() => router.push('/otp')} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
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
    marginBottom: 24,
  },
  form: {
    marginBottom: 24,
  },
});
