import React from 'react';
import {View} from 'react-native';
import {UserStory} from '../../common/types/stories.type';

import style from './style';

function StoriesList(): React.JSX.Element {
  const userStories: UserStory[] = [
    {
      id: 1,
      username: 'user A',
      imageUrl: 'https://picsum.photos/50',
    },
    {
      id: 2,
      username: 'user B',
      imageUrl: 'https://picsum.photos/50',
    },
    {
      id: 3,
      username: 'user C',
      imageUrl: 'https://picsum.photos/50',
    },
    {
      id: 4,
      username: 'user D',
      imageUrl: 'https://picsum.photos/50',
    },
    {
      id: 5,
      username: 'user E',
      imageUrl: 'https://picsum.photos/50',
    },
    {
      id: 6,
      username: 'user F',
      imageUrl: 'https://picsum.photos/50',
    },
  ];

  return <View />;
}

export default StoriesList;
