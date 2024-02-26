import React from 'react';
import {ScrollView} from 'react-native';
import MainLayout from '../../components/layout/MainLayout';
import style from './style';

type PropsType = {
  navigation: any;
};

const Profile: React.FC<PropsType> = ({}) => {
  return (
    <MainLayout>
      <>
        <ScrollView contentContainerStyle={style.scrollView} />
      </>
    </MainLayout>
  );
};

export default Profile;
