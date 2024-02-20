import React from 'react';
import {View} from 'react-native';
import Header from './Header/Header';
import style from './style';
import StoriesList from '../storiesList/StoriesList';

const MainLayout: React.FC = () => {
  return (
    <View style={style.layout}>
      <Header title={"Let's explore"} />
      <StoriesList />
    </View>
  );
};

export default MainLayout;
