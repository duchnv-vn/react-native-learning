import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {colors} from '../../common/constants/colors';
import {
  fontSizeScale,
  horizontalScale,
  verticalScale,
} from '../../common/helpers/scaling';

const style = StyleSheet.create({
  postItem: {},
  postHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  userInfo: {
    marginLeft: horizontalScale(10),
  },
  address: {
    color: colors.lightGray,
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: fontSizeScale(10),
    marginTop: verticalScale(2),
  },
  username: {
    color: '#000000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: fontSizeScale(14),
  },
  thumbnailContainer: {
    marginTop: verticalScale(10),
  },
  thumbnail: {
    height: horizontalScale(220),
    borderRadius: horizontalScale(15),
  },
  postInteractionBar: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    gap: horizontalScale(32),
  },
});

export default style;
