import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

type PropTypes = {
  title: string;
};

function Header({title}: PropTypes): React.JSX.Element {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
