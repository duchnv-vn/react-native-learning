import React from 'react';
import {Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './style';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../../common/constants/colors';

type PropsType = {
  icon: IconDefinition;
  countNumber: number;
  size: number;
};

const InteractButton: React.FC<PropsType> = ({icon, countNumber, size}) => {
  return (
    <View style={style.buttonContainer}>
      <FontAwesomeIcon icon={icon} size={size} color={colors.lightGray} />
      <Text style={style.countNumber}>{countNumber}</Text>
    </View>
  );
};

export default InteractButton;
