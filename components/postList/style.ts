import {StyleSheet} from 'react-native';
import {colors} from '../../common/constants/colors';
import {horizontalScale, verticalScale} from '../../common/helpers/scaling';

const style = StyleSheet.create({
  postsListContainer: {
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(20),
    flex: 1,
  },
  postSeparator: {
    marginVertical: verticalScale(18),
    borderWidth: 0.25,
    borderBottomColor: colors.extraLightGray,
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noMorePostText: {
    textAlign: 'center',
    color: colors.lightGray,
    marginVertical: verticalScale(20),
  },
});

export default style;
