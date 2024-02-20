import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  storyItem: {
    marginRight: 20,
  },
  username: {
    color: '#022150',
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    marginTop: 8,
  },
});

export default style;
