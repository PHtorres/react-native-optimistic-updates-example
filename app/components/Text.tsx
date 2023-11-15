import {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {fonts} from '../theme/font';
import { colors } from '../theme/colors';

export const Heading = ({children}: PropsWithChildren) => {
  return (
    <Text
      style={{
        fontSize: fonts.lg,
        fontWeight: '700',
        color:colors.body
      }}>
      {children}
    </Text>
  );
};

export const Body = ({children}: PropsWithChildren) => {
  return (
    <Text
      style={{
        fontSize: fonts.md,
        color:colors.body
      }}>
      {children}
    </Text>
  );
};

export const Error = ({children}: PropsWithChildren) => {
  return (
    <Text
      style={{
        fontSize: fonts.md,
        color:colors.danger
      }}>
      {children}
    </Text>
  );
};
