import {StyleSheet} from 'react-native';
import {colors} from '../../common/constants/colors';

const style = StyleSheet.create({
  postsListContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    flex: 1,
  },
  postSeparator: {
    marginVertical: 18,
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
    marginVertical: 20,
  },
});

export default style;
