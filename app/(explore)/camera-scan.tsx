import { Colors } from '../../constants/Colors';
import DiagnoseSvg from '../../assets/images/diagnose.svg';
import IdentifySvg from '../../assets/images/identify.svg';
import PlantCareSvg from '../../assets/images/plant_care.svg';
import ScannerSvg from '../../assets/images/scanner.svg';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BOTTOM_PANEL_HEIGHT_APPROX = 220;
const TAB_ACTIVE_BG = '#FF6E4E';
const TAB_INACTIVE_BG = '#FFF5F2';
const SHUTTER_OUTER_SIZE = 88;
const SHUTTER_INNER_SIZE = 64;
const ICON_CIRCLE_SIZE = 52;

export default function CameraScanScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const topPadding = insets.top;
  const bottomPadding = insets.bottom;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/aloevera.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Top header */}
        <View style={[styles.header, { paddingTop: topPadding + 12 }]}>
          <Pressable style={styles.closeBtn} onPress={() => router.replace('/sprout-ai')}>
            <BlurView intensity={60} tint="dark" style={styles.blurFill}>
              <Ionicons name="close" size={24} color={Colors.surface} />
            </BlurView>
          </Pressable>
          <Pressable style={styles.skipBtn} onPress={() => router.push('/plant-pal')}>
            <BlurView intensity={60} tint="dark" style={StyleSheet.absoluteFill} />
            <Text style={styles.skipText}>Skip to Plantpal →</Text>
          </Pressable>
        </View>

        {/* Center scanner */}
        <View style={styles.scannerWrap} pointerEvents="none">
          <ScannerSvg width={280} height={280} />
        </View>

        {/* Floating plant info card */}
        <View style={[styles.plantCard, { bottom: BOTTOM_PANEL_HEIGHT_APPROX + 16 }]}>
          <View style={styles.plantCardContent}>
            <View style={styles.plantCardText}>
              <Text style={styles.plantCardTitle} numberOfLines={1}>
                Aloe Vera (Aloe barbadensis Miller)
              </Text>
              <Text style={styles.plantCardSubtitle} numberOfLines={1}>
                Has been a medicinal value...
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.textPrimary} />
          </View>
        </View>

        {/* Bottom control panel */}
        <View
          style={[
            styles.bottomPanel,
            {
              paddingBottom: bottomPadding + 24,
            },
          ]}
        >
          <View style={styles.tabsRow}>
            <Pressable style={[styles.tab, styles.tabInactive]}>
              <DiagnoseSvg width={22} height={22} fill={TAB_ACTIVE_BG} />
              <Text style={styles.tabTextOrange}>Diagnose</Text>
            </Pressable>
            <Pressable style={[styles.tab, styles.tabActive]}>
              <IdentifySvg width={22} height={22} fill={Colors.surface} />
              <Text style={styles.tabTextWhite}>Identify</Text>
            </Pressable>
            <Pressable style={[styles.tab, styles.tabInactive]}>
              <PlantCareSvg width={22} height={22} fill={TAB_ACTIVE_BG} />
              <Text style={styles.tabTextOrange}>Plant care</Text>
            </Pressable>
          </View>

          <View style={styles.cameraActionsRow}>
            <Pressable style={styles.iconCircle}>
              <Ionicons name="images-outline" size={26} color={Colors.surface} />
            </Pressable>
            <View style={styles.shutterWrap}>
              <View style={styles.shutterOuter}>
                <View style={styles.shutterInner} />
              </View>
            </View>
            <Pressable style={styles.iconCircle}>
              <Ionicons name="help-circle-outline" size={26} color={Colors.surface} />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  closeBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
  blurFill: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 22,
    overflow: 'hidden',
    minHeight: 44,
    minWidth: 180,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  skipText: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 14,
    color: Colors.surface,
  },
  scannerWrap: {
    position: 'absolute',
    top: '42%',
    left: '50%',
    marginLeft: -140,
    marginTop: -140,
    width: 280,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantCard: {
    position: 'absolute',
    left: 16,
    right: 16,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 24,
    padding: 16,
    overflow: 'hidden',
  },
  plantCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plantCardText: {
    flex: 1,
    marginRight: 12,
  },
  plantCardTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  plantCardSubtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: Colors.subtitle,
  },
  bottomPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 22,
    gap: 6,
  },
  tabInactive: {
    backgroundColor: TAB_INACTIVE_BG,
  },
  tabActive: {
    backgroundColor: TAB_ACTIVE_BG,
  },
  tabTextOrange: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 14,
    color: TAB_ACTIVE_BG,
  },
  tabTextWhite: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 14,
    color: Colors.surface,
  },
  cameraActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 24,
  },
  iconCircle: {
    width: ICON_CIRCLE_SIZE,
    height: ICON_CIRCLE_SIZE,
    borderRadius: ICON_CIRCLE_SIZE / 2,
    backgroundColor: '#6B7280',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterOuter: {
    width: SHUTTER_OUTER_SIZE,
    height: SHUTTER_OUTER_SIZE,
    borderRadius: SHUTTER_OUTER_SIZE / 2,
    borderWidth: 4,
    borderColor: Colors.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
  },
  shutterInner: {
    width: SHUTTER_INNER_SIZE,
    height: SHUTTER_INNER_SIZE,
    borderRadius: SHUTTER_INNER_SIZE / 2,
    backgroundColor: Colors.textPrimary,
  },
});
