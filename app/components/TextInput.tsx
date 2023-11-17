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
      {...props}
      placeholderTextColor={colors.border}
      style={[styles.container, {borderColor: colors.border}, props.style]}
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
