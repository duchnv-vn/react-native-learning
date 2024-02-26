import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import MainLayout from '../../components/layout/MainLayout';

type PropsType = {
  navigation: any;
};

const Profile: React.FC<PropsType> = ({navigation}) => {
  const textStyle = {color: 'black'};

  return (
    <MainLayout>
      <>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={textStyle}>Go back</Text>
        </TouchableOpacity>
        <Text style={textStyle}>Profile page.</Text>
      </>
    </MainLayout>
  );
};

export default Profile;
