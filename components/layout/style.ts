import {StyleSheet} from 'react-native';
import {verticalScale} from '../../common/helpers/scaling';
import {colors} from '../../common/constants/colors';

const style = StyleSheet.create({
  layout: {
    paddingTop: verticalScale(16),
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default style;
