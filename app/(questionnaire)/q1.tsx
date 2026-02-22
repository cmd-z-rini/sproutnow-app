import { PrimaryButton } from '../../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const bgImage = require('../../assets/images/bg-questionnaire.png');

const GLASS_GRADIENT = ['rgba(90, 238, 158, 0.00)', 'rgba(20, 114, 63, 0.20)'] as const;

export default function Q1Screen() {
  const router = useRouter();

  return (
    <ImageBackground source={bgImage} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode="cover">
      <LinearGradient colors={[...GLASS_GRADIENT]} style={{ flex: 1 }}>
        <BlurView intensity={47} tint="default" style={{ flex: 1 }}>
          <View style={[styles.content, { flex: 1, backgroundColor: 'transparent' }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </Pressable>

        <View style={styles.textBlock}>
          <Text style={styles.title}>Every plant parent is different.</Text>
          <Text style={styles.subtitle}>
            To give you care tips that actually work, we need to know a little
            about your space and lifestyle. It only takes 30 seconds!
          </Text>
        </View>

        <View style={styles.footer}>
          <PrimaryButton
            title="Build my profile"
            onPress={() => router.push('/q2')}
          />
          <Pressable
            style={({ pressed }) => [
              styles.skipButton,
              pressed && styles.skipPressed,
            ]}
            onPress={() => router.replace('/welcome')}
          >
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
        </View>
          </View>
        </BlurView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 47,
  },
  textBlock: {
    marginTop: 40,
    paddingHorizontal: 4,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 40,
    color: '#FFFFFF',
    letterSpacing: -0.8,
    lineHeight: 52.8,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#CBFFCD',
    marginTop: 12,
  },
  footer: {
    marginTop: 'auto',
    gap: 12,
  },
  skipButton: {
    height: 70,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipPressed: {
    opacity: 0.7,
  },
  skipText: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 20,
    color: '#FFFFFF',
  },
});
