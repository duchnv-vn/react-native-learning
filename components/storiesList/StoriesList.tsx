import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {UserStory} from '../../common/types/stories.type';
import StoryItem from '../storyItem/StoryItem';

import style from './style';

const PAGE_SIZE = 4;

const userStories: UserStory[] = [];

for (let i = 0; i < 10; i++) {
  const story = {
    id: i,
    username: `user ${i}`,
    imageUrl: `https://picsum.photos/id/${i}/100.jpg`,
  };
  userStories.push(story);
}

const StoriesList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [storiesData, setStoriesData] = useState<UserStory[]>([]);
  const [isLoadingStories, setIsLoadingStories] = useState(false);

  const paginate = async () => {
    if (isLoadingStories) {
      return;
    }
    setIsLoadingStories(true);

    setTimeout(() => {
      const stories = fetchStories({page: currentPage, size: PAGE_SIZE});

      if (stories.length > 0) {
        setCurrentPage(prev => (prev += 1));
        setStoriesData(list => list.concat(stories));
      }

      setIsLoadingStories(false);
    }, 1500);
  };

  const fetchStories = ({page, size}: {page: number; size: number}) => {
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    if (startIndex > userStories.length) {
      return [];
    }

    return userStories.slice(startIndex, endIndex);
  };

  useEffect(() => {
    paginate();
  }, []);

  const renderStoryItem = ({item}: {item: UserStory}) => {
    return <StoryItem data={item} />;
  };

  return (
    <View style={style.storiesListContainer}>
      <FlatList
        data={storiesData}
        renderItem={renderStoryItem}
        onEndReachedThreshold={0.5}
        onEndReached={paginate}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default StoriesList;
