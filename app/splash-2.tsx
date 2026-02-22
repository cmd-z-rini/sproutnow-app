import { PrimaryButton } from '../components/PrimaryButton';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import { Dimensions, StyleSheet, View } from 'react-native';
import Illustration from '../assets/images/ic_illus2.svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ILLUS_ASPECT = 428 / 640;

export default function Splash2Screen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Illustration
          width={SCREEN_WIDTH}
          height={SCREEN_WIDTH / ILLUS_ASPECT}
        />
      </View>

      <View style={styles.bottomArea}>
        <View style={styles.indicators}>
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>

        <PrimaryButton title="Lets go" onPress={() => router.push('/signup')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomArea: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 24,
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  dot: {
    height: 8,
    width: 37,
    borderRadius: 16,
  },
  dotInactive: {
    backgroundColor: '#B3E3C8',
  },
  dotActive: {
    backgroundColor: '#417B5B',
  },
});
