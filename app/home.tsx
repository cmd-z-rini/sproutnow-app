import { AlertItem } from '../components/AlertItem';
import { BottomNav } from '../components/BottomNav';
import { PlantCard } from '../components/PlantCard';
import { PromoBanner } from '../components/PromoBanner';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GoodMorningSun from '../assets/images/goodmorning_sun.svg';
import IcScan from '../assets/images/ic_scan.svg';
import WeatherIcon from '../assets/images/weather.svg';

const TABS = ['Todo', 'Care info', 'History'] as const;

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('Care info');

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <GoodMorningSun width={28} height={28} style={styles.sunIcon} />
            <Text style={styles.greeting}>Good morning Alex</Text>
          </View>
          <View style={styles.weatherRow}>
            <Text style={styles.temp}>23°C</Text>
            <WeatherIcon width={24} height={24} />
          </View>
        </View>

        <View style={styles.searchRow}>
          <Ionicons name="search" size={20} color={Colors.placeholder} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Plant"
            placeholderTextColor={Colors.placeholder}
          />
          <Pressable style={styles.scanIcon}>
            <IcScan width={24} height={24} />
          </Pressable>
        </View>

        <PromoBanner />

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Plants</Text>
            <Pressable>
              <Text style={styles.viewAll}>View all</Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.plantScroll}
          >
            <PlantCard />
            <PlantCard />
          </ScrollView>
        </View>

        <View style={styles.tabRow}>
          {TABS.map((tab) => (
            <Pressable
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Alerts for today</Text>
            <Pressable>
              <Text style={styles.viewAll}>View all</Text>
            </Pressable>
          </View>
          <AlertItem
            thumbnail="cactus"
            title="Water your Cactus today (living room)"
            subtitle="It's 2 weeks old, you have to water it twice a w..."
          />
          <AlertItem
            thumbnail="bamboo"
            title="Prune the dead branches of Bamboo t..."
            subtitle="It's been 2-3 weeks since you have prune the d..."
          />
        </View>
      </ScrollView>

      <BottomNav />
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
    paddingBottom: 140,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sunIcon: {
    marginRight: 8,
  },
  greeting: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 22,
    color: Colors.textPrimary,
  },
  weatherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  temp: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 16,
    color: Colors.textPrimary,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
    minHeight: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    color: Colors.textPrimary,
    paddingVertical: 12,
  },
  scanIcon: {
    padding: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: Colors.textPrimary,
  },
  viewAll: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 14,
    color: Colors.green,
  },
  plantScroll: {
    paddingRight: 20,
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: Colors.inputBorder,
    borderRadius: 10,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: Colors.buttonPrimary,
  },
  tabText: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 14,
    color: Colors.textPrimary,
  },
  tabTextActive: {
    color: Colors.textOnPrimary,
  },
});
