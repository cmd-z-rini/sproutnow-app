import { PrimaryButton } from '../components/PrimaryButton';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Splash2Screen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Grow your plants{'\n'}with confidence</Text>
        <Text style={styles.subtitle}>
          Get personalised care reminders and expert tips so your plants thrive.
        </Text>
      </View>

      <View style={styles.footer}>
        <PrimaryButton title="Lets go" onPress={() => router.push('/signup')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 24,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 28,
    lineHeight: 36,
    color: Colors.textPrimary,
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.textSecondary,
  },
  footer: {
    paddingBottom: 20,
  },
});
