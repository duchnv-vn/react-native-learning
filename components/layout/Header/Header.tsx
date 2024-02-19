import React from 'react';
import {Text, View} from 'react-native';

import style from './style';

type PropTypes = {
  title: string;
};

function Header({title}: PropTypes): React.JSX.Element {
  return (
    <View>
      <Text
        style={{
          ...style.title,
        }}>
        {title}
      </Text>
    </View>
  );
}

export default Header;
