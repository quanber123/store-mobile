import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import store from './services/redux/store';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
const RootLayout = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      poppins: require('./assets/font/Poppins-Black.ttf'),
      ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    });
    setFontLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  }, []);
  if (!fontLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
