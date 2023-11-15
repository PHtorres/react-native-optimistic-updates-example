import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProjectsListScreen} from '../screens/ProjectsListScreen';
import {CreateProjectScreen} from '../screens/CreateProjectScreen';
import {colors} from '../theme/colors';

const Stack = createNativeStackNavigator<AppStackParamList>();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    text: colors.body,
    border: colors.border,
  },
};

export const AppStack = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="ProjectsListScreen"
          component={ProjectsListScreen}
        />
        <Stack.Screen
          name="CreateProjectScreen"
          component={CreateProjectScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
