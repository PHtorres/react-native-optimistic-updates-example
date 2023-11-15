import React from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';

export const TextInput = (props: TextInputProps) => {
  return (
    <RNTextInput
      style={[styles.container, {borderColor: colors.border}]}
      placeholderTextColor={colors.border}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    fontSize: fonts.lg,
    borderBottomWidth: 1,
  },
});
