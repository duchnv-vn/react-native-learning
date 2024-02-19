import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  ViewStyle /* , useColorScheme */,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainLayout from './components/layout/MainLayout';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor:
      Colors.lighter /* isDarkMode ? Colors.darker : Colors.lighter */,
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <MainLayout />
    </SafeAreaView>
  );
}

export default App;
