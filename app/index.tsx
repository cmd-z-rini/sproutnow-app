import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import ArchBg from '../assets/ui/arch-bg.svg';
import Hero1 from '../assets/ui/hero-1.svg';
import Hero2 from '../assets/ui/hero-2.svg';
import Hero3 from '../assets/ui/hero-3.svg';
import SproutIcon from '../assets/ui/sprout-icon.svg';

export default function Splash1Screen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoIcon}>
          <SproutIcon width={24} height={24} fill="white" />
        </View>
        <Text style={styles.brandName}>sproutnow</Text>
      </View>

      <View style={styles.heroSection}>
        <View style={[styles.archContainer, { aspectRatio: 384.6 / 537.5, width: '100%', maxWidth: 388 }]}>
          <View style={styles.archPosition}>
            <ArchBg width="100%" height="100%" preserveAspectRatio="none" />
          </View>
          <View style={styles.hero3Position}>
            <Hero3 width="100%" height="100%" preserveAspectRatio="none" />
          </View>
          <View style={styles.hero2Position}>
            <Hero2 width="100%" height="100%" preserveAspectRatio="none" />
          </View>
          <View style={styles.hero1Position}>
            <Hero1 width="100%" height="100%" preserveAspectRatio="none" />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <PrimaryButton title="Lets go" onPress={() => router.push('/splash-2')} />
        <SecondaryButton title="Skip" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logoIcon: {
    width: 45,
    height: 45,
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  brandName: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 32,
    color: Colors.textPrimary,
    marginTop: 2,
  },
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  archContainer: {
    width: '100%',
    maxWidth: 388,
    position: 'relative',
  },
  archPosition: {
    position: 'absolute',
    top: '1.01%',
    right: '2.83%',
    bottom: '-0.46%',
    left: '4.66%',
  },
  hero3Position: {
    position: 'absolute',
    top: '22.86%',
    right: '21.94%',
    bottom: '44.14%',
    left: '43.21%',
  },
  hero2Position: {
    position: 'absolute',
    top: '17.65%',
    right: '2.87%',
    bottom: '23.89%',
    left: '28.92%',
  },
  hero1Position: {
    position: 'absolute',
    top: '43.2%',
    right: '53.04%',
    bottom: '5.33%',
    left: '10.54%',
  },
  footer: {
    paddingBottom: 20,
    gap: 16,
  },
});
