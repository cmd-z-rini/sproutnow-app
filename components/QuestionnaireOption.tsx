import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type QuestionnaireOptionProps = {
  title: string;
  subtitle?: string;
  isSelected: boolean;
  onPress: () => void;
};

export function QuestionnaireOption({
  title,
  subtitle,
  isSelected,
  onPress,
}: QuestionnaireOptionProps) {
  return (
    <Pressable
      style={[styles.container, isSelected ? styles.selected : styles.unselected]}
      onPress={onPress}
    >
      <View style={styles.textColumn}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? (
          <Text
            style={[
              styles.subtitle,
              { color: isSelected ? '#B7B6BD' : '#9289FE' },
            ]}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
      {isSelected && (
        <View style={styles.checkContainer}>
          <Ionicons name="checkmark-circle" size={28} color="#FFFFFF" />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 16,
    paddingVertical: 16,
    borderRadius: 12,
  },
  selected: {
    backgroundColor: '#3116D5',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  unselected: {
    backgroundColor: 'rgba(41, 35, 170, 0.3)',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  textColumn: {
    flex: 1,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    letterSpacing: -0.32,
    lineHeight: 29.2,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 16,
    lineHeight: 23.36,
    letterSpacing: -0.32,
  },
  checkContainer: {
    marginLeft: 12,
  },
});
