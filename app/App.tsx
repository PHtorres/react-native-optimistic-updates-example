import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {QueryProvider} from './providers/QueryProvider';
import {AppStack} from './routes/AppStack';
import { StatusBar } from 'react-native';

export const App = () => {
  return (
    <SafeAreaProvider>
      <QueryProvider>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView style={{flex: 1}}>
          <AppStack />
        </SafeAreaView>
      </QueryProvider>
    </SafeAreaProvider>
  );
};
