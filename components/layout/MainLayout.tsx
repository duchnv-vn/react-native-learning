import React from 'react';
import {View} from 'react-native';
import Header from './Header/Header';

function MainLayout(): React.JSX.Element {
  return (
    <View>
      <Header title={"Let's explore"} />
    </View>
  );
}

export default MainLayout;
