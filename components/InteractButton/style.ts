import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {colors} from '../../common/constants/colors';

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countNumber: {
    marginLeft: 7,
    color: colors.lightGray,
    fontFamily: getFontFamily('Inter', '400'),
  },
});

export default style;
