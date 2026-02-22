import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import PlayCircle from '../assets/images/play_circle.svg';

type VideoCardProps = {
  imageSource: ImageSourcePropType;
  duration: string;
  title: string;
};

const CARD_WIDTH = 240;
const CARD_HEIGHT = 320;

export function VideoCard({ imageSource, duration, title }: VideoCardProps) {
  return (
    <ImageBackground
      source={imageSource}
      style={styles.card}
      imageStyle={styles.cardImage}
      resizeMode="cover"
    >
      <View style={styles.playWrap}>
        <PlayCircle width={48} height={48} />
      </View>
      <View style={styles.overlay}>
        <Text style={styles.duration}>{duration}</Text>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
  },
  cardImage: {
    borderRadius: 12,
  },
  playWrap: {
    position: 'absolute',
    top: 12,
    left: 12,
    padding: 4,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  duration: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 12,
    color: '#FF8C42',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
});
