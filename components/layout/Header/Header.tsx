import React from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import PropTypes from 'prop-types';
import {getFontFamily} from '../../../assets/fonts/helper';

type PropTypes = {
  title: string;
};

function Header({title}: PropTypes): React.JSX.Element {
  const titleStyles: StyleProp<TextStyle> = {
    fontSize: 50,
    fontFamily: getFontFamily('Inter', '500'),
  };

  return (
    <View>
      <Text style={titleStyles}>{title}</Text>
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
