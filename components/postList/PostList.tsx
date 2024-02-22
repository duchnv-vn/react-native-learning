import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {UserPost} from '../../common/types/posts.type';
import PostItem from '../PostItem/PostItem';
import Loading from '../Loading/Loading';
import style from './style';

const PAGE_SIZE = 4;

const userPosts: UserPost[] = [];

for (let i = 0; i < 10; i++) {
  const post: UserPost = {
    id: i,
    username: `user ${i}`,
    userImageUrl: `https://picsum.photos/id/${i}/100.jpg`,
    thumbnailUrl: `https://picsum.photos/id/${i}/400/300.jpg`,
    address: `road ${i}, district ${i}, city ${i}`,
    likes: i * 15,
    comments: i * 10,
    bookmarks: i * 5,
  };
  userPosts.push(post);
}

const PostList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsData, setPostsData] = useState<UserPost[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [isNoMorePosts, setNoMorePosts] = useState(false);

  const paginate = async () => {
    if (isLoadingPosts) {
      return;
    }

    setIsLoadingPosts(true);

    setTimeout(() => {
      const stories = fetchPosts({page: currentPage, size: PAGE_SIZE});

      if (stories.length > 0) {
        setCurrentPage(prev => (prev += 1));
        setPostsData(list => list.concat(stories));
      } else {
        setNoMorePosts(true);
      }

      setIsLoadingPosts(false);
    }, 1500);
  };

  const fetchPosts = ({page, size}: {page: number; size: number}) => {
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    if (startIndex > userPosts.length) {
      return [];
    }

    return userPosts.slice(startIndex, endIndex);
  };

  useEffect(() => {
    paginate();
  }, []);

  const renderPostItem = ({item}: {item: UserPost}) => {
    return (
      <View>
        <PostItem data={item} />
      </View>
    );
  };

  const renderPostSeparator = () => {
    return <View style={style.postSeparator} />;
  };

  return (
    <View style={style.postsListContainer}>
      <FlatList
        data={postsData}
        renderItem={renderPostItem}
        onEndReachedThreshold={0.5}
        onEndReached={paginate}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderPostSeparator}
      />
      {isLoadingPosts && (
        <View style={style.loadingContainer}>
          <Loading height={50} width={50} />
        </View>
      )}
      {isNoMorePosts && (
        <Text style={style.noMorePostText}>No more posts.</Text>
      )}
    </View>
  );
};

export default PostList;
