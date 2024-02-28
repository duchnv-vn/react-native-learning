import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  fontSizeScale,
  horizontalScale,
  verticalScale,
} from '../../common/helpers/scaling';
import {colors} from '../../common/constants/colors';

const style = StyleSheet.create({
  storyItem: {
    marginRight: horizontalScale(20),
  },
  username: {
    color: colors.darkBlue,
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: fontSizeScale(14),
    marginTop: verticalScale(8),
  },
});

export default style;
