import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import style from './style';
import {fontSizeScale} from '../../../common/helpers/scaling';

type PropsType = {
  title: string;
};

const Header: React.FC<PropsType> = ({title}) => {
  const [unreadMsgCount, _setUnreadMsgCount] = useState(0);

  return (
    <View style={style.header}>
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity style={style.iconWrapper}>
        <FontAwesomeIcon
          icon={faEnvelope}
          size={fontSizeScale(24)}
          color={'#898dae'}
        />
        <View style={style.unreadMsgWrapper}>
          <Text style={style.unreadMsg}>{unreadMsgCount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
