import { PrimaryButton } from './PrimaryButton';
import { Colors } from '../constants/Colors';
import { StyleSheet, Text, View } from 'react-native';
import SmartFlower from '../assets/images/ic_smart_flower.svg';

export function PromoBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <SmartFlower width={24} height={24} />
        <Text style={styles.title}>BECOME A SMART SPROUTY</Text>
      </View>
      <Text style={styles.subtitle}>Get A Treatment Plan From SproutAI</Text>
      <View style={styles.buttonWrap}>
        <PrimaryButton title="Subscribe to Unlock" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#D4E8D4',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 8,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 14,
    color: Colors.textPrimary,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 12,
    color: Colors.textSecondary,
  },
  buttonWrap: {
    marginTop: 12,
    width: '100%',
  },
});
