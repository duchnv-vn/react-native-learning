import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  ViewStyle /* , useColorScheme */,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainLayout from './components/layout/MainLayout';
import style from './assets/styles/globalStyles';

const App: React.FC = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor:
      Colors.lighter /* isDarkMode ? Colors.darker : Colors.lighter */,
  };

  return (
    <SafeAreaView style={{...style.app, ...backgroundStyle}}>
      <MainLayout />
    </SafeAreaView>
  );
};

export default App;
