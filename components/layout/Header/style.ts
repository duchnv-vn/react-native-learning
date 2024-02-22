import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../assets/fonts/helper';

const style = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  title: {
    color: '#022150',
    fontSize: 24,
    fontFamily: getFontFamily('Inter', '600'),
    letterSpacing: 0.48,
  },
  iconWrapper: {
    padding: 14,
    backgroundColor: '#e8e7e7',
    borderRadius: 100,
  },
  unreadMsgWrapper: {
    backgroundColor: '#f35bac',
    borderRadius: 100,
    aspectRatio: 1,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: 6,
    top: 6,
  },
  unreadMsg: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: getFontFamily('Inter', '600'),
  },
});

export default style;
