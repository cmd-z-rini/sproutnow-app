import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcSmartFlower from '../../assets/images/ic_smart_flower.svg';
import TalkWithPlantpal from '../../assets/images/talkwithplantpal.svg';

const BACKGROUND = '#FAF9F4';
const BOT_BUBBLE_BG = '#EAEAEA';
const USER_BUBBLE_BG = '#FDF0A6';
const INPUT_BG = '#F9FAFB';
const PURPLE_BTN = '#5D4E9F';
const SEND_GREEN = '#17A308';

type ChatItem =
  | { id: string; type: 'bot'; text: string }
  | { id: string; type: 'user'; text: string }
  | { id: string; type: 'userImage'; imageUri: number };

const DUMMY_CHAT: ChatItem[] = [
  {
    id: '1',
    type: 'user',
    text: 'The leaves are turning yellow and some have brown spots. What could it be?',
  },
  {
    id: '2',
    type: 'bot',
    text: "Yellow leaves with brown spots can mean a few things: overwatering, lack of light, or a fungal issue. Can you send a photo of the affected leaves? That'll help me narrow it down.",
  },
  {
    id: '3',
    type: 'userImage',
    imageUri: require('../../assets/images/burnt_leaf.png'),
  },
  {
    id: '4',
    type: 'bot',
    text: "Thanks for the photo! This looks like it could be a watering or drainage issue. Try letting the soil dry out between waterings and make sure the pot has drainage holes. I can give you a step-by-step care plan if you'd like.",
  },
];

function BotBubble({ text }: { text: string }) {
  return (
    <View style={styles.botRow}>
      <View style={styles.avatarWrap}>
        <IcSmartFlower width={20} height={20} />
      </View>
      <View style={styles.botBubble}>
        <Text style={styles.bubbleText}>{text}</Text>
      </View>
    </View>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <View style={styles.userRow}>
      <View style={styles.userBubble}>
        <Text style={styles.bubbleText}>{text}</Text>
      </View>
    </View>
  );
}

function UserImageBubble({ imageUri }: { imageUri: number }) {
  return (
    <View style={styles.userRow}>
      <Image source={imageUri} style={styles.userImage} resizeMode="cover" />
    </View>
  );
}

export default function PlantPalScreen() {
  const router = useRouter();
  const [inputText, setInputText] = useState('');
  const [showSpecialistCard, setShowSpecialistCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpecialistCard(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const hasText = inputText.trim().length > 0;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Pressable style={styles.headerBtn} onPress={() => router.replace('/camera-scan')}>
              <Ionicons name="close" size={24} color={Colors.textPrimary} />
            </Pressable>
            <Text style={styles.headerTitle}>Plant pal</Text>
            <Pressable style={styles.headerBtn}>
              <Ionicons name="ellipsis-vertical" size={22} color={Colors.textPrimary} />
            </Pressable>
          </View>

          {/* Chat list */}
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {DUMMY_CHAT.map((item) => {
              if (item.type === 'bot') return <BotBubble key={item.id} text={item.text} />;
              if (item.type === 'user') return <UserBubble key={item.id} text={item.text} />;
              return <UserImageBubble key={item.id} imageUri={item.imageUri} />;
            })}
          </ScrollView>

          {/* Delayed specialist card */}
          {showSpecialistCard && (
            <View style={styles.specialistCard}>
              <Text style={styles.specialistTitle}>Connect with a specialist</Text>
              <Text style={styles.specialistSubtitle}>
                Dr. Aris can help you with personalized plant care advice.
              </Text>
              <View style={styles.specialistActions}>
                <Pressable
                  style={styles.specialistBtnSecondary}
                  onPress={() => setShowSpecialistCard(false)}
                >
                  <Text style={styles.specialistBtnSecondaryText}>No, thanks</Text>
                </Pressable>
                <Pressable style={styles.specialistBtnPrimary}>
                  <Text style={styles.specialistBtnPrimaryText}>Connect to Dr. Aris</Text>
                </Pressable>
              </View>
            </View>
          )}

          {/* Bottom input area */}
          <View style={styles.inputRow}>
            <Pressable style={styles.plusBtn}>
              <Ionicons name="add" size={24} color={Colors.textPrimary} />
            </Pressable>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="Message Plant pal..."
                placeholderTextColor={Colors.placeholder}
                value={inputText}
                onChangeText={setInputText}
              />
              <Ionicons
                name="mic"
                size={20}
                color={Colors.subtitle}
                style={styles.micIcon}
              />
            </View>
            {hasText ? (
              <Pressable style={styles.sendBtnGreen}>
                <Ionicons name="send" size={20} color={Colors.surface} />
              </Pressable>
            ) : (
              <Pressable style={styles.sendBtn}>
                <TalkWithPlantpal width={20} height={24} fill={Colors.surface} />
              </Pressable>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  keyboard: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: Colors.textPrimary,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  botRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  avatarWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  botBubble: {
    maxWidth: '80%',
    backgroundColor: BOT_BUBBLE_BG,
    padding: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  userBubble: {
    maxWidth: '80%',
    backgroundColor: USER_BUBBLE_BG,
    padding: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  userImage: {
    width: 240,
    height: 240,
    borderRadius: 16,
  },
  bubbleText: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 15,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.surface,
    gap: 12,
  },
  plusBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: INPUT_BG,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 24,
    paddingLeft: 16,
    paddingRight: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 15,
    color: Colors.textPrimary,
    paddingVertical: 10,
  },
  micIcon: {
    marginLeft: 8,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PURPLE_BTN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnGreen: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: SEND_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialistCard: {
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 20,
    backgroundColor: Colors.surface,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  specialistTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 17,
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  specialistSubtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    marginBottom: 16,
  },
  specialistActions: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'stretch',
  },
  specialistBtnSecondary: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialistBtnSecondaryText: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 15,
    color: '#333333',
  },
  specialistBtnPrimary: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialistBtnPrimaryText: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
