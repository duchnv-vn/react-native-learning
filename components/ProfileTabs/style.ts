import {StyleSheet} from 'react-native';
import {colors} from '../../common/constants/colors';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  fontSizeScale,
  horizontalScale,
  verticalScale,
} from '../../common/helpers/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: colors.extraLightGray,
    height: '100%',
  },
  tabTitleContainer: {},
  tabTitleText: {
    color: colors.lightGray,
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: fontSizeScale(16),
  },
  activeTabTitleText: {
    color: colors.black,
    fontFamily: getFontFamily('Inter', '600'),
  },
  tabText: {
    color: colors.lightGray,
  },
  photo: {
    borderRadius: horizontalScale(8),
    width: horizontalScale(150),
    height: verticalScale(90),
  },
  photoTab: {
    paddingVertical: verticalScale(16),
    alignItems: 'center',
    rowGap: verticalScale(16),
    flexGrow: 1,
  },
  photosGroup: {
    flexDirection: 'row',
    columnGap: horizontalScale(16),
  },
});

export default style;
