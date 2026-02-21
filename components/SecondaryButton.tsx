import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

type SecondaryButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export function SecondaryButton({ title, onPress, disabled }: SecondaryButtonProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
          disabled && styles.disabled,
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 9999,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: Colors.textPrimary,
    fontSize: 18,
    fontWeight: '600',
  },
});
