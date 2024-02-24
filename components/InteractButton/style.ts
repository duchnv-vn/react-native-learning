import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {colors} from '../../common/constants/colors';
import {horizontalScale} from '../../common/helpers/scaling';

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countNumber: {
    marginLeft: horizontalScale(7),
    color: colors.lightGray,
    fontFamily: getFontFamily('Inter', '400'),
  },
});

export default style;
