import { BlogCard } from '../../components/BlogCard';
import { BottomNav } from '../../components/BottomNav';
import { VideoCard } from '../../components/VideoCard';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import LockVideos from '../../assets/images/lock_videos.svg';
import RabbitfootBlog from '../../assets/images/rabbitfoot_blog.svg';
import MealybugsBlog from '../../assets/images/mealybugs_blog.svg';

const reel1 = require('../../assets/images/reel1.png');
const reel2 = require('../../assets/images/reel2.png');

export default function ExploreScreen() {
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
            <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
          </Pressable>
          <View style={styles.titleRow}>
            <Text style={styles.sectionTitle}>FEATURED VIDEOS</Text>
            <LockVideos width={20} height={20} style={styles.lockIcon} />
          </View>
          <Pressable>
            <Text style={styles.viewAll}>View all</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.videoScroll}
        >
          <VideoCard
            imageSource={reel1}
            duration="2:13"
            title="Every plant has a story — of growth, care"
          />
          <VideoCard
            imageSource={reel2}
            duration="2:13"
            title="Every plant has a story — of growth, care"
          />
        </ScrollView>

        <View style={styles.blogsSection}>
          <Text style={styles.sectionTitle}>FEATURED BLOGS</Text>
          <BlogCard
            BannerIllustration={RabbitfootBlog}
            title="Rabbit foot fern care"
            rating="4.8"
            readTime="5 min read"
            onPress={() => router.push('/blog-details')}
          />
          <BlogCard
            BannerIllustration={MealybugsBlog}
            title="Mealybugs: How to spot and fix"
            rating="4.8"
            readTime="5 min read"
            onPress={() => router.push('/blog-details')}
          />
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
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  backBtn: {
    padding: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
  sectionTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 14,
    color: Colors.textPrimary,
    letterSpacing: 0.5,
  },
  lockIcon: {
    marginLeft: 6,
  },
  viewAll: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 14,
    color: Colors.green,
    textDecorationLine: 'underline',
  },
  videoScroll: {
    paddingBottom: 24,
  },
  blogsSection: {
    marginTop: 8,
  },
});
