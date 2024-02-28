import {StyleSheet} from 'react-native';
import {
  fontSizeScale,
  horizontalScale,
  verticalScale,
} from '../../common/helpers/scaling';
import {colors} from '../../common/constants/colors';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userInfoContainer: {},
  userAvatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  userAvatar: {
    width: horizontalScale(150),
  },
  usernameContainer: {
    marginTop: verticalScale(8),
  },
  username: {
    color: colors.darkBlue,
    fontSize: fontSizeScale(24),
    fontFamily: getFontFamily('Inter', '600'),
    textAlign: 'center',
  },
  statBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: horizontalScale(16),
    marginTop: verticalScale(16),
  },
  statItem: {
    minWidth: '25%',
  },
  statText: {
    textAlign: 'center',
  },
  statNumber: {
    color: colors.darkBlue,
    fontSize: fontSizeScale(24),
    fontFamily: getFontFamily('Inter', '600'),
  },
  statTitle: {
    color: colors.lightGray,
    fontSize: fontSizeScale(16),
    fontFamily: getFontFamily('Inter', '400'),
  },
  statItemSeparator: {
    borderColor: colors.lightGray,
    borderRightWidth: 0.5,
    height: '50%',
  },
});

export default style;
