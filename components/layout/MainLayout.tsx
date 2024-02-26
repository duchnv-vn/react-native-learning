import React from 'react';
import {Platform, SafeAreaView} from 'react-native';
import CustomStatusBar from '../StatusBar/StatusBar';
import style from './style';

type PropsType = {
  children: React.JSX.Element;
};

const MainLayout: React.FC<PropsType> = ({children}) => {
  /* const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }; */

  return (
    <SafeAreaView style={{...style.layout}}>
      {Platform.OS === 'android' && <CustomStatusBar />}
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;
