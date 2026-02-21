import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export function PrimaryButton({ title, onPress, disabled }: PrimaryButtonProps) {
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
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 9999,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: Colors.textOnPrimary,
    fontSize: 18,
    fontWeight: '600',
  },
});
