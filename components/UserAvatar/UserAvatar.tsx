import React from 'react';
import {View, Image, StyleProp, ViewStyle} from 'react-native';
import style from './style';

type PropsType = {
  imageUrl: string;
  imageDimensions: number;
  customStyles?: StyleProp<ViewStyle>;
};

const UserAvatar: React.FC<PropsType> = ({
  imageUrl,
  imageDimensions,
  customStyles,
}) => {
  return (
    <View
      style={[
        style.imageContainer,
        {borderRadius: imageDimensions},
        customStyles,
      ]}>
      <Image
        source={{uri: imageUrl}}
        style={style.image}
        width={imageDimensions}
        height={imageDimensions}
      />
    </View>
  );
};

export default UserAvatar;
