import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

const thumbCactus = require('../assets/images/thumb-cactus.png');
const thumbBamboo = require('../assets/images/thumb-bamboo.png');

type AlertItemProps = {
  thumbnail: 'cactus' | 'bamboo';
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export function AlertItem({ thumbnail, title, subtitle, onPress }: AlertItemProps) {
  const source = thumbnail === 'cactus' ? thumbCactus : thumbBamboo;

  return (
    <Pressable style={({ pressed }) => [styles.container, pressed && styles.pressed]} onPress={onPress}>
      <Image source={source} style={styles.thumb} resizeMode="cover" />
      <View style={styles.textBlock}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={Colors.subtitle} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  pressed: {
    opacity: 0.9,
  },
  thumb: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 12,
    color: Colors.subtitle,
    lineHeight: 18,
  },
});
