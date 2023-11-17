import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {spacing} from '../theme/spacing';
export const Screen = ({children}: PropsWithChildren) => {
  return <View style={{flex: 1, padding: spacing.xl}}>{children}</View>;
};
