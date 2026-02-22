import { Stack } from 'expo-router';

export default function QuestionnaireLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="q1" />
      <Stack.Screen name="q2" />
      <Stack.Screen name="q3" />
      <Stack.Screen name="q4" />
      <Stack.Screen name="q5" />
    </Stack>
  );
}
