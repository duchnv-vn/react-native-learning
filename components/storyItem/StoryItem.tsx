import React from 'react';
import {Text, View} from 'react-native';
import {UserStory} from '../../common/types/stories.type';

import style from './style';
import UserAvatar from '../UserAvatar/UserAvatar';

type PropsType = {
  data: UserStory;
};

const StoryItem: React.FC<PropsType> = ({data}) => {
  return (
    <View key={data.id} style={style.storyItem}>
      <UserAvatar imageUrl={data.imageUrl} imageDimensions={65} />
      <Text style={style.username}>{data.username}</Text>
    </View>
  );
};

export default StoryItem;
