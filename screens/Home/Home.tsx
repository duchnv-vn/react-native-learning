import React from 'react';
import PostList from '../../components/postList/PostList';
import StoriesList from '../../components/storiesList/StoriesList';
import Header from '../../components/layout/Header/Header';
import MainLayout from '../../components/layout/MainLayout';

type PropsType = {
  navigation: any;
};

const Home: React.FC<PropsType> = ({navigation}) => {
  return (
    <MainLayout>
      <>
        <Header title={"Let's explore"} />
        <StoriesList />
        <PostList navigation={navigation} />
      </>
    </MainLayout>
  );
};

export default Home;
