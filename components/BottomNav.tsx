import React from 'react';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BottomNavHome from '../assets/images/bottomnav_home.svg';
import HomeNotSelected from '../assets/images/home_not selected.svg';
import BottomNavExplore from '../assets/images/bottomnav_explore.svg';
import ExploreFill from '../assets/images/explore_fill.svg';
import BottomNavSproutAI from '../assets/images/bottomnav_sproutai.svg';
import SproutaiSelected from '../assets/images/sproutai_selected.svg';
import BottomNavMyGarden from '../assets/images/bottomnav_mygarden.svg';
import BottomNavProfile from '../assets/images/bottomnav_profile.svg';

const ICON_SIZE = 28;

const TAB_IDS = ['home', 'explore', 'sproutai', 'garden', 'profile'] as const;
export type BottomNavTab = (typeof TAB_IDS)[number];

type TabConfig = {
  id: BottomNavTab;
  label: string;
  Icon: React.ComponentType<{ width: number; height: number }>;
  IconInactive?: React.ComponentType<{ width: number; height: number }>;
};

const TABS: TabConfig[] = [
  { id: 'home', label: 'Home', Icon: BottomNavHome, IconInactive: HomeNotSelected },
  { id: 'explore', label: 'Explore', Icon: ExploreFill, IconInactive: BottomNavExplore },
  { id: 'sproutai', label: 'SproutAI', Icon: SproutaiSelected, IconInactive: BottomNavSproutAI },
  { id: 'garden', label: 'My garden', Icon: BottomNavMyGarden },
  { id: 'profile', label: 'Profile', Icon: BottomNavProfile },
];

type BottomNavProps = { activeTab?: BottomNavTab };

function getTabPressHandler(id: BottomNavTab, router: ReturnType<typeof useRouter>) {
  switch (id) {
    case 'home':
      return () => router.replace('/home');
    case 'explore':
      return () => router.replace('/(explore)');
    case 'sproutai':
      return () => router.replace('/sprout-ai');
    default:
      return () => console.log('Coming soon');
  }
}

export function BottomNav({ activeTab = 'home' }: BottomNavProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: Math.max(24, insets.bottom) }]}>
      {TABS.map(({ id, label, Icon, IconInactive }) => {
        const isActive = activeTab === id;
        const IconComponent = isActive ? Icon : (IconInactive ?? Icon);
        return (
          <Pressable key={id} style={styles.tab} onPress={getTabPressHandler(id, router)}>
            <IconComponent width={ICON_SIZE} height={ICON_SIZE} />
            <Text style={[styles.label, isActive && styles.labelActive]}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    paddingTop: 16,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.inputBorder,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 12,
    color: Colors.textPrimary,
    marginTop: 4,
  },
  labelActive: {
    color: Colors.green,
  },
});
