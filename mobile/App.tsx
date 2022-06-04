import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Widget } from './src/components/Widget';
import { theme } from './src/theme';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  useEffect(() => {
    const prepare = async () => {
      if (!fontsLoaded) {
        await SplashScreen.preventAutoHideAsync();
      } else {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [fontsLoaded]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Widget />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  );
}
