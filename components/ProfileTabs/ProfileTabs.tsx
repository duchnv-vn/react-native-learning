import React from 'react';
import {
  Image,
  ScrollView,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {TabNavigation} from '../../navigation/MainNavigation';
import style from './style';
import {TabTitlePropsType} from '../../common/types/common.type';

type ProfileTabsPropsType = {
  customStyles?: StyleProp<ViewStyle>;
};

const TabTitle: React.FC<TabTitlePropsType> = ({title, focused}) => {
  const textStyles: Array<StyleProp<TextStyle>> = [style.tabTitleText];
  focused && textStyles.push(style.activeTabTitleText);

  return (
    <View style={style.tabTitleContainer}>
      <Text style={textStyles}>{title}</Text>
    </View>
  );
};

const PhotoTab: React.FC = () => {
  const photos = [
    [
      {
        id: 0,
        imageUrl: 'https://picsum.photos/id/0/400/300.jpg',
      },
      {
        id: 1,
        imageUrl: 'https://picsum.photos/id/1/400/300.jpg',
      },
    ],
    [
      {
        id: 2,
        imageUrl: 'https://picsum.photos/id/2/400/300.jpg',
      },
      {
        id: 3,
        imageUrl: 'https://picsum.photos/id/3/400/300.jpg',
      },
    ],
    [
      {
        id: 4,
        imageUrl: 'https://picsum.photos/id/4/400/300.jpg',
      },
      {
        id: 5,
        imageUrl: 'https://picsum.photos/id/5/400/300.jpg',
      },
    ],
  ];

  const renderPhotos = () => {
    return photos.map((group, index) => (
      <View style={style.photosGroup} key={index}>
        {group.map(({imageUrl, id}) => (
          <Image source={{uri: imageUrl}} style={style.photo} key={id} />
        ))}
      </View>
    ));
  };
  return (
    <ScrollView
      contentContainerStyle={style.photoTab}
      style={style.tab}
      showsVerticalScrollIndicator={false}>
      {renderPhotos()}
    </ScrollView>
  );
};

const VideoTab: React.FC = () => {
  return (
    <View style={style.tab}>
      <Text style={style.tabText}>Video Tab</Text>
    </View>
  );
};

const SavedTab: React.FC = () => {
  return (
    <View style={style.tab}>
      <Text style={style.tabText}>Saved Tab</Text>
    </View>
  );
};

const ProfileTabs: React.FC<ProfileTabsPropsType> = ({customStyles}) => {
  const tabs = [
    {
      name: 'Photos',
      component: PhotoTab,
    },
    {
      name: 'Videos',
      component: VideoTab,
    },
    {
      name: 'Saved',
      component: SavedTab,
    },
  ];

  return (
    <View style={customStyles}>
      <TabNavigation
        {...{
          tabs,
          TitleComponent: TabTitle,
        }}
      />
    </View>
  );
};

export default ProfileTabs;
