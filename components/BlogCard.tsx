import { Colors } from '../constants/Colors';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import type { ComponentType } from 'react';
import type { SvgProps } from 'react-native-svg';
import HeartBlog from '../assets/images/heart_blog.svg';
import StarRate from '../assets/images/star_rate.svg';

const BANNER_WIDTH = Dimensions.get('window').width - 40;
const BANNER_HEIGHT = 120;

type BlogCardProps = {
  BannerIllustration: ComponentType<SvgProps>;
  title: string;
  rating: string;
  readTime: string;
  onPress?: () => void;
};

export function BlogCard({ BannerIllustration, title, rating, readTime, onPress }: BlogCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.banner}>
        <BannerIllustration width={BANNER_WIDTH} height={BANNER_HEIGHT} />
      </View>
      <View style={styles.titleRow}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <HeartBlog width={22} height={22} />
      </View>
      <View style={styles.statsRow}>
        <StarRate width={14} height={14} />
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.sep}>|</Text>
        <Text style={styles.readTime}>{readTime}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  banner: {
    backgroundColor: '#FFE4EC',
    width: '100%',
    height: BANNER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 12,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    color: Colors.textPrimary,
    flex: 1,
    marginRight: 8,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingBottom: 14,
    paddingTop: 6,
    gap: 4,
  },
  rating: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 12,
    color: '#FF8C42',
  },
  sep: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 12,
    color: Colors.inputBorder,
  },
  readTime: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 12,
    color: Colors.subtitle,
  },
});
