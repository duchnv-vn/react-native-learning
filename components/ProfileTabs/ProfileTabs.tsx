import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {TabNavigation} from '../../navigation/MainNavigation';
import style from './style';

type ProfileTabsType = {
  customStyles?: StyleProp<ViewStyle>;
};

const PhotoTab: React.FC = () => {
  return (
    <View style={style.tab}>
      <Text style={style.tabText}>Photo Tab</Text>
    </View>
  );
};

const FriendListTab: React.FC = () => {
  return (
    <View style={style.tab}>
      <Text style={style.tabText}>Friend list Tab</Text>
    </View>
  );
};

const VideoTab: React.FC = () => {
  return (
    <View style={style.tab}>
      <Text style={style.tabText}>Video Tab</Text>
    </View>
  );
};

const ProfileTabs: React.FC<ProfileTabsType> = ({customStyles}) => {
  const tabs = [
    {
      name: 'Photo',
      component: PhotoTab,
    },
    {
      name: 'Friend list',
      component: FriendListTab,
    },
    {
      name: 'Video',
      component: VideoTab,
    },
  ];

  return (
    <View style={customStyles}>
      <TabNavigation {...{tabs}} />
    </View>
  );
};

export default ProfileTabs;
