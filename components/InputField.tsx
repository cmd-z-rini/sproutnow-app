import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../constants/Colors';

type InputFieldProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  editable?: boolean;
};

export function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize = 'sentences',
  keyboardType = 'default',
  editable = true,
}: InputFieldProps) {
  const [focused, setFocused] = useState(false);
  const hasValue = value != null && value.length > 0;
  const isActive = focused || hasValue;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          isActive && styles.inputActive,
          !editable && styles.inputDisabled,
        ]}
        placeholder={placeholder}
        placeholderTextColor={Colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        editable={editable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  inputActive: {
    borderColor: Colors.buttonPrimary,
  },
  inputDisabled: {
    opacity: 0.7,
  },
});
