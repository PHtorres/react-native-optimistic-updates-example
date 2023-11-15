import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from 'react-native';
import {spacing} from '../theme/spacing';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

export const GhostButton = ({children, ...rest}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  text: {
    fontSize: fonts.md,
    color: colors.primary,
  },
});
