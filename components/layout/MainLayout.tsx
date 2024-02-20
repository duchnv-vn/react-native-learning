import React from 'react';
import {View} from 'react-native';
import Header from './Header/Header';
import style from './style';
import StoriesList from '../stories-list/StoriesList';

function MainLayout(): React.JSX.Element {
  return (
    <View style={style.layout}>
      <Header title={"Let's explore"} />
      <StoriesList />
    </View>
  );
}

export default MainLayout;
