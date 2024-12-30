import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProjectsScreen} from '../screens/projects/projects.screen';
import {CreateProjectScreen} from '../screens/create-project/create-project.screen';
import {colors} from '../theme/colors';
import {TasksScreen} from '../screens/tasks/tasks.screen';

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
          name="Projects"
          component={ProjectsScreen}
          options={{headerTitle: 'Projects'}}
        />
        <Stack.Screen name="CreateProject" component={CreateProjectScreen} />
        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={{headerShown: true, headerTitle: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
