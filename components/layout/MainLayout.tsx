import React from 'react';
import {View} from 'react-native';
import Header from './Header/Header';
import style from './style';
import StoriesList from '../storiesList/StoriesList';
import PostList from '../postList/PostList';

const MainLayout: React.FC = () => {
  return (
    <View style={style.layout}>
      <Header title={"Let's explore"} />
      <StoriesList />
      <PostList />
    </View>
  );
};

export default MainLayout;
