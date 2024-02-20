import React from 'react';
import {View, Image} from 'react-native';
import style from './style';

type PropsType = {
  imageUrl: string;
  imageDimensions: number;
};

const UserAvatar: React.FC<PropsType> = ({imageUrl, imageDimensions}) => {
  return (
    <View style={[style.imageContainer, {borderRadius: imageDimensions}]}>
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
