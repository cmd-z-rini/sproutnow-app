import { BottomNav } from '../../components/BottomNav';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const BACKGROUND = '#FAF9F4';
const LIGHT_GREEN = '#C8E6C9';
const CTA_BACKGROUND = '#191A18';
const CTA_BOTTOM_OFFSET = 88;
const CTA_OVERLAY_HEIGHT = 140;

type PlantItem = {
  id: string;
  name: string;
  scientificName: string;
  description: string;
};

const MOCK_PLANTS: PlantItem[] = [
  {
    id: '1',
    name: 'Money Plant',
    scientificName: 'Epipremnum aureum',
    description: 'Big leaved money plant, easy to grow indoors.',
  },
  {
    id: '2',
    name: 'Snake Plant',
    scientificName: 'Dracaena trifasciata',
    description: 'Low light tolerant, air purifying succulent.',
  },
  {
    id: '3',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    description: 'Elegant white blooms, thrives in shade.',
  },
];

function PlantRow({ item }: { item: PlantItem }) {
  return (
    <View style={styles.plantRow}>
      <Image
        source={require('../../assets/images/plant_image.png')}
        style={styles.plantImage}
        resizeMode="cover"
      />
      <View style={styles.plantTextCol}>
        <Text style={styles.plantName}>{item.name}</Text>
        <Text style={styles.scientificName}>{item.scientificName}</Text>
        <Text style={styles.plantDescription}>{item.description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color={Colors.subtitle} />
    </View>
  );
}

export default function SproutAIScreen() {
  const router = useRouter();

  const renderItem: ListRenderItem<PlantItem> = ({ item }) => <PlantRow item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color={Colors.textPrimary} />
        </Pressable>
        <Pressable style={styles.skipBtn} onPress={() => router.push('/plant-pal')}>
          <Text style={styles.skipText}>Skip to Plantpal →</Text>
        </Pressable>
      </View>

      <View style={styles.titleBlock}>
        <Text style={styles.title}>Find Plant</Text>
        <Text style={styles.subtitle}>
          Search by name or upload a photo to identify your plant and get care tips.
        </Text>
      </View>

      <View style={styles.searchWrap}>
        <Ionicons name="search" size={20} color={Colors.placeholder} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search plants..."
          placeholderTextColor={Colors.placeholder}
        />
      </View>

      <View style={styles.trendingBadge}>
        <Ionicons name="trending-up" size={18} color="#FFFFFF" />
        <Text style={styles.trendingText}>Trending plants</Text>
      </View>

      <FlatList
        data={MOCK_PLANTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <LinearGradient
        colors={['rgba(255,255,255,0)', '#FFFFFF', '#FFFFFF']}
        locations={[0, 0.6, 1]}
        style={styles.ctaOverlay}
        pointerEvents="none"
      />
      <Pressable style={styles.cta} onPress={() => router.push('/camera-scan')}>
        <Image
          source={require('../../assets/images/diagnose_icon.png')}
          style={[styles.ctaIcon, { tintColor: '#FFFFFF' }]}
          resizeMode="contain"
        />
        <Text style={styles.ctaText}>Diagnose or Chat with Plant Pal</Text>
      </Pressable>

      <BottomNav activeTab="sproutai" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  backBtn: {
    padding: 4,
  },
  skipBtn: {
    backgroundColor: LIGHT_GREEN,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  skipText: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 14,
    color: Colors.textPrimary,
  },
  titleBlock: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 28,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 15,
    color: Colors.subtitle,
    lineHeight: 22,
  },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 16,
    paddingHorizontal: 14,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    color: Colors.textPrimary,
    paddingVertical: 14,
  },
  trendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: Colors.buttonPrimary,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 20,
    gap: 6,
  },
  trendingText: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 14,
    color: Colors.textOnPrimary,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 140,
  },
  plantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  plantImage: {
    width: 64,
    height: 64,
    borderRadius: 10,
    marginRight: 14,
  },
  plantTextCol: {
    flex: 1,
  },
  plantName: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  scientificName: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: Colors.subtitle,
    marginBottom: 4,
  },
  plantDescription: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: Colors.green,
    lineHeight: 20,
  },
  ctaOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: CTA_BOTTOM_OFFSET + CTA_OVERLAY_HEIGHT,
  },
  cta: {
    position: 'absolute',
    bottom: CTA_BOTTOM_OFFSET,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CTA_BACKGROUND,
    paddingVertical: 16,
    borderRadius: 14,
    gap: 10,
  },
  ctaIcon: {
    width: 24,
    height: 24,
  },
  ctaText: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
