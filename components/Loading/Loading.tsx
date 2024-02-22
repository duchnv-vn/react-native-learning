import React from 'react';
import {Image, ImageProps, StyleProp} from 'react-native';
import images from '../../assets/images/_index';
import {colors} from '../../common/constants/colors';

type PropsType = {
  width: number;
  height: number;
};

const Loading: React.FC<PropsType> = ({width, height}) => {
  const style: StyleProp<ImageProps> = {
    width,
    height,
  };

  return (
    <Image
      source={images.loadingIcon}
      width={width}
      height={height}
      style={style}
      tintColor={colors.lightGray}
    />
  );
};

export default Loading;
