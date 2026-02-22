import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  /** When 'questionnaire', disabled state uses purple (#3B35B0 / #625BE8). Otherwise uses gray (#C0C0C0 / #FFFFFF). */
  disabledVariant?: 'default' | 'questionnaire';
};

export function PrimaryButton({ title, onPress, disabled, disabledVariant = 'default' }: PrimaryButtonProps) {
  const isQuestionnaireDisabled = disabled && disabledVariant === 'questionnaire';
  const isDefaultDisabled = disabled && disabledVariant !== 'questionnaire';

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
          isQuestionnaireDisabled && styles.disabledQuestionnaire,
          isDefaultDisabled && styles.disabledDefault,
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text
          style={[
            styles.text,
            isQuestionnaireDisabled && styles.textDisabledQuestionnaire,
            isDefaultDisabled && styles.textDisabledDefault,
          ]}
        >
          {title}
        </Text>
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
    height: 70,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pressed: {
    opacity: 0.85,
  },
  disabledQuestionnaire: {
    backgroundColor: '#3B35B0',
  },
  disabledDefault: {
    backgroundColor: '#C0C0C0',
  },
  text: {
    color: Colors.textOnPrimary,
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 20,
  },
  textDisabledQuestionnaire: {
    color: '#625BE8',
  },
  textDisabledDefault: {
    color: '#FFFFFF',
  },
});
