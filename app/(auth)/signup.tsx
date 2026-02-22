import { InputField } from '../../components/InputField';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isFormFilled =
    name.trim().length > 0 &&
    age.trim().length > 0 &&
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    confirmPassword.trim().length > 0;

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
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
        </Pressable>

        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Signup to get started</Text>

        <View style={styles.divider} />

        <View style={styles.form}>
          <InputField
            label="Name"
            placeholder="Type in your full name"
            value={name}
            onChangeText={setName}
          />
          <InputField
            label="Age"
            placeholder="Placeholder"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
          <InputField
            label="Email"
            placeholder="Type in your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <InputField
            label="Confirm password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <PrimaryButton
          title="Continue"
          onPress={() => router.push('/otp')}
          disabled={!isFormFilled}
        />

        <View style={styles.signInRow}>
          <Text style={styles.signInPrompt}>Already have an account? </Text>
          <Pressable>
            <Text style={styles.signInLink}>Sign In</Text>
          </Pressable>
        </View>
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
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 40,
    color: Colors.textPrimary,
    letterSpacing: -0.8,
    marginTop: 30,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.subtitle,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.inputBorder,
    marginTop: 16,
    marginBottom: 24,
  },
  form: {
    gap: 24,
    marginBottom: 32,
  },
  signInRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 40,
    paddingBottom: 20,
  },
  signInPrompt: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    color: Colors.textPrimary,
    letterSpacing: -0.32,
  },
  signInLink: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 16,
    color: Colors.signInGreen,
    letterSpacing: -0.32,
  },
});
