import React from 'react';
import {View} from 'react-native';
import Header from './Header';

function MainLayout(): React.JSX.Element {
  return (
    <View>
      <Header {...{title: 'Social media app'}} />
    </View>
  );
}

export default MainLayout;
