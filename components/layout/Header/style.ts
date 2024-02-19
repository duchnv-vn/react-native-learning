import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../assets/fonts/helper';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: 24,
    fontFamily: getFontFamily('Inter', '600'),
    letterSpacing: 0.48,
  },
});

export default style;
