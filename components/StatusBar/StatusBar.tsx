import React from 'react';
import {StatusBar} from 'react-native';
import style from './style';

const CustomStatusBar: React.FC = () => {
  return <StatusBar backgroundColor={style.statusBar.backgroundColor} />;
};

export default CustomStatusBar;
