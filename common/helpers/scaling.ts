import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const breakpoints = {
  small: {
    width: 375,
  },
};

export const sizeBases = {
  width: {
    small: 330,
    base: 350,
    medium: 410,
  },
  height: {
    small: 550,
    medium: 620,
    large: 680,
  },
  font: {
    base: 400,
    medium: 430,
  },
};

const {width, height} = Dimensions.get('window');

const isSmall = width <= breakpoints.small.width && !DeviceInfo.hasNotch();

export const guidelineBaseWidth = (): number => {
  if (isSmall) {
    return sizeBases.width.small;
  }

  return sizeBases.width.base;
};

export const guidelineBaseHeight = (): number => {
  if (isSmall) {
    return sizeBases.height.small;
  }

  if (width > sizeBases.width.medium) {
    return sizeBases.height.medium;
  }

  return sizeBases.height.large;
};

export const guidelineBaseFont = (): number => {
  if (width > sizeBases.width.medium) {
    return sizeBases.font.medium;
  }

  return sizeBases.font.base;
};

export const horizontalScale = (size: number): number => {
  return (width / guidelineBaseWidth()) * size;
};

export const verticalScale = (size: number): number => {
  return (height / guidelineBaseHeight()) * size;
};

export const fontSizeScale = (size: number): number => {
  return Math.round(width / guidelineBaseWidth()) * size;
};
