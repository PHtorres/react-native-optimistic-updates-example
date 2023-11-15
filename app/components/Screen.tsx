import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {spacing} from '../theme/spacing';
export const Screen = ({children}: PropsWithChildren) => {
  return (
    <View
      style={{flex: 1, paddingHorizontal: spacing.md, paddingTop: spacing.lg}}>
      {children}
    </View>
  );
};
