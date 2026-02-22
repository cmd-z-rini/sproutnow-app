import { Stack } from 'expo-router';

export default function SproutAILayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sprout-ai" />
      <Stack.Screen name="plant-pal" />
    </Stack>
  );
}
