import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      router.replace('/home');
    }, 3000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.green} style={styles.spinner} />
        <Text style={styles.text}>Preparing your care plan...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    marginBottom: 24,
  },
  text: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 18,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
});
