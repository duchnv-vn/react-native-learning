import {StyleSheet} from 'react-native';
import {colors} from '../../common/constants/colors';

const style = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.extraLightGray,
    height: '100%',
  },
  tabText: {
    color: colors.lightGray,
  },
});

export default style;
