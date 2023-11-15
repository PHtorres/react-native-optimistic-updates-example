import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IProjectColor} from '../services/api/todoist/interfaces/project';
import {colors} from '../theme/colors';
import {spacing} from '../theme/spacing';
import {fonts} from '../theme/font';

interface ColorTagProps {
  color: IProjectColor;
  onSelect: (color: IProjectColor) => void;
  isSelected: boolean;
}

export const ColorTag = ({color, onSelect, isSelected}: ColorTagProps) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(color)}
      style={[
        styles.container,
        isSelected ? styles.selected : undefined,
        {backgroundColor: color.hex},
      ]}>
      <Text style={styles.text}>{color.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    borderRadius: spacing.sm,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    fontSize: fonts.md,
    color: colors.background,
  },
  selected: {
    borderWidth: 2,
    borderColor: colors.body,
  },
});
