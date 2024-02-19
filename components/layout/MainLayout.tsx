import React from 'react';
import {View} from 'react-native';
import Header from './Header/Header';
import style from './style';

function MainLayout(): React.JSX.Element {
  return (
    <View style={style.layout}>
      <Header title={"Let's explore"} />
    </View>
  );
}

export default MainLayout;
