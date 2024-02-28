import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../assets/fonts/helper';
import {
  fontSizeScale,
  horizontalScale,
  verticalScale,
} from '../../../common/helpers/scaling';
import {colors} from '../../../common/constants/colors';

const style = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(16),
  },
  title: {
    color: colors.darkBlue,
    fontSize: fontSizeScale(24),
    fontFamily: getFontFamily('Inter', '600'),
    letterSpacing: 0.48,
  },
  iconWrapper: {
    padding: horizontalScale(14),
    backgroundColor: '#e8e7e7',
    borderRadius: 100,
  },
  unreadMsgWrapper: {
    backgroundColor: colors.pink,
    borderRadius: 100,
    aspectRatio: 1,
    width: horizontalScale(18),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: horizontalScale(6),
    top: verticalScale(6),
  },
  unreadMsg: {
    color: '#ffffff',
    fontSize: fontSizeScale(12),
    fontFamily: getFontFamily('Inter', '600'),
  },
});

export default style;
