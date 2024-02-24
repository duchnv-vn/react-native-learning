import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  fontSizeScale,
  horizontalScale,
  verticalScale,
} from '../../common/helpers/scaling';

const style = StyleSheet.create({
  storyItem: {
    marginRight: horizontalScale(20),
  },
  username: {
    color: '#022150',
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: fontSizeScale(14),
    marginTop: verticalScale(8),
  },
});

export default style;
