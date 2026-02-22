import { PrimaryButton } from '../../components/PrimaryButton';
import { QuestionnaireOption } from '../../components/QuestionnaireOption';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const GLASS_GRADIENT = ['rgba(90, 238, 158, 0.00)', 'rgba(20, 114, 63, 0.20)'] as const;

const OPTIONS = [
  { id: 'save', title: '🌱 Save a dying plant' },
  { id: 'learn', title: '📚 Learn basic care' },
  { id: 'expand', title: '🪴 Expand my collection' },
];

export default function Q5Screen() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ImageBackground
      source={require('../../assets/images/bg-questionnaire.png')}
      style={{ flex: 1, width: '100%', height: '100%' }}
      resizeMode="cover"
    >
      <LinearGradient colors={[...GLASS_GRADIENT]} style={{ flex: 1 }}>
        <BlurView intensity={47} tint="default" style={{ flex: 1 }}>
          <View style={[styles.content, { flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between' }]}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </Pressable>

            <Text style={styles.title}>
              What brought you{'\n'}to SproutNow{'\n'}today?
            </Text>

            <ScrollView
              style={styles.optionsList}
              contentContainerStyle={styles.optionsContent}
              showsVerticalScrollIndicator={false}
            >
              {OPTIONS.map((opt) => (
                <QuestionnaireOption
                  key={opt.id}
                  title={opt.title}
                  isSelected={selected === opt.id}
                  onPress={() => setSelected(opt.id)}
                />
              ))}
            </ScrollView>

            <View style={styles.footer}>
              <PrimaryButton
                title="Lets go"
                onPress={() => router.replace('/loading')}
                disabled={!selected}
                disabledVariant="questionnaire"
              />
            </View>
          </View>
        </BlurView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 47,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 40,
    color: '#FFFFFF',
    letterSpacing: -0.8,
    lineHeight: 52.8,
    marginTop: 40,
    paddingHorizontal: 4,
  },
  optionsList: {
    flex: 1,
    marginTop: 40,
  },
  optionsContent: {
    gap: 12,
    paddingHorizontal: 4,
  },
  footer: {
    marginTop: 16,
    paddingBottom: 40,
  },
});
