import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {colors} from '../../common/constants/colors';

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
    marginLeft: 10,
  },
  address: {
    color: colors.lightGray,
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 10,
    marginTop: 2,
  },
  username: {
    color: '#000000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
  },
  thumbnailContainer: {
    marginTop: 10,
  },
  thumbnail: {
    height: 220,
    borderRadius: 15,
  },
  postInteractionBar: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 32,
  },
});

export default style;
