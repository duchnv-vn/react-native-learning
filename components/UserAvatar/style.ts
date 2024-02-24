import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../common/helpers/scaling';
import {colors} from '../../common/constants/colors';

const style = StyleSheet.create({
  imageContainer: {
    borderWidth: 1,
    borderColor: colors.pink,
    paddingHorizontal: horizontalScale(3),
    paddingVertical: verticalScale(3),
  },
  image: {
    borderRadius: 100,
  },
});

export default style;
