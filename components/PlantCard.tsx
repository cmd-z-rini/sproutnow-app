import { Colors } from '../constants/Colors';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import TagSun from '../assets/images/tag_sun.svg';
import TagPoisonous from '../assets/images/tag_poisonous.svg';
import TagWater from '../assets/images/tag_water.svg';
import TagInfo from '../assets/images/tag_info.svg';

const CARD_WIDTH = 280;
const CARD_HEIGHT = 180;

const bgPeperomia = require('../assets/images/bg-peperomia.png');

export function PlantCard() {
  return (
    <ImageBackground
      source={bgPeperomia}
      style={styles.card}
      imageStyle={styles.cardImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.plantName}>Peperomia Houseplant</Text>
        <View style={styles.tags}>
          <View style={styles.tag}>
            <TagSun width={14} height={14} />
            <Text style={styles.tagText}>0.6m from window</Text>
          </View>
          <View style={[styles.tag, styles.tagPoisonous]}>
            <TagPoisonous width={14} height={14} />
            <Text style={[styles.tagText, styles.tagTextPoisonous]}>Poisonous</Text>
          </View>
          <View style={styles.tag}>
            <TagWater width={14} height={14} />
            <Text style={styles.tagText}>in 4 days</Text>
          </View>
          <View style={styles.tag}>
            <TagInfo width={14} height={14} />
            <Text style={styles.tagText}>19 missing information</Text>
          </View>
        </View>
        <Text style={styles.hint}>Please update the plant progress every 14 days</Text>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 240, 230, 0.85)',
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  plantName: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE4DC',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  tagPoisonous: {
    backgroundColor: '#FFCDD2',
  },
  tagText: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 11,
    color: Colors.textPrimary,
  },
  tagTextPoisonous: {
    color: Colors.textPrimary,
  },
  hint: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 11,
    color: Colors.subtitle,
    marginTop: 4,
  },
});
