import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SproutIcon from '../assets/ui/sprout-icon.svg';
import Illustration from '../assets/images/ic_illus1.svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ILLUS_WIDTH = SCREEN_WIDTH - 40;
const ILLUS_ASPECT = 388 / 562;

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
        <Illustration
          width={ILLUS_WIDTH}
          height={ILLUS_WIDTH / ILLUS_ASPECT}
        />
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
    backgroundColor: Colors.logoGreen,
    borderRadius: 4,
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
    marginTop: -50,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    gap: 16,
  },
});
