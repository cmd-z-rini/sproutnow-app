import { BottomNav } from '../../components/BottomNav';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BlogCover from '../../assets/images/blog_cover.svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const HERO_HEIGHT = 280;

export default function BlogDetailsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Pressable style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={28} color={Colors.textPrimary} />
          </Pressable>
        </View>

        <View style={styles.heroWrap}>
          <BlogCover width={SCREEN_WIDTH} height={HERO_HEIGHT} />
        </View>

        <View style={styles.content}>
          <View style={styles.metaRow}>
            <Image
              source={require('../../assets/images/user_avatar.png')}
              style={styles.avatar}
            />
            <View style={styles.metaText}>
              <Text style={styles.authorName}>Dr. Aris Ansari</Text>
              <Text style={styles.metaDate}>Nov 12, 2024 · 5 min read</Text>
            </View>
          </View>

          <Text style={styles.title}>Rabbit foot fern care</Text>

          <Text style={styles.paragraph}>
            Rabbit's Foot Fern (Davallia Spp.) is a distinctive perennial fern
            known for its lacy green fronds and fuzzy rhizomes that creep over
            the soil's surface or spill from containers.
          </Text>

          <Text style={styles.paragraph}>
            These scaly, fur-covered roots give the plant its name and add unique
            texture and charm. Typically epiphytic, Rabbit's Foot Ferns grow
            best in humid environments with indirect light, slightly acidic soil,
            and temperatures above 60 degrees Fahrenheit.
          </Text>

          <Text style={styles.paragraph}>
            They're especially striking when displayed in hanging baskets or
            shallow pots where their rhizomes can cascade over the edges. Water
            when the top inch of soil feels dry and mist regularly to maintain
            humidity.
          </Text>
        </View>
      </ScrollView>

      <BottomNav activeTab="explore" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  header: {
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 8,
    backgroundColor: 'transparent',
  },
  backBtn: {
    alignSelf: 'flex-start',
    padding: 4,
  },
  heroWrap: {
    width: '100%',
    height: HERO_HEIGHT,
    backgroundColor: '#FFE4EC',
  },
  content: {
    backgroundColor: Colors.surface,
    marginTop: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    minHeight: 400,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  metaText: {
    flex: 1,
  },
  authorName: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  metaDate: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 13,
    color: Colors.subtitle,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 26,
    color: Colors.textPrimary,
    lineHeight: 34,
    marginBottom: 16,
  },
  paragraph: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 26,
    marginBottom: 16,
  },
});
