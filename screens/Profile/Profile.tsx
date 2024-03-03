import React, {Fragment} from 'react';
import {ScrollView, Text, View} from 'react-native';
import MainLayout from '../../components/layout/MainLayout';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import {colors} from '../../common/constants/colors';
import {convertNumberToShorter} from '../../common/helpers/common';
import ProfileTabs from '../../components/ProfileTabs/ProfileTabs';
import globalStyle from '../../assets/styles/globalStyles';
import style from './style';

type ProfilePropsType = {
  navigation: any;
};

type UsernamePropsType = {
  username: string;
};

type UserAvatarPropsType = {
  imageUrl: string;
};

type SocialInteractionNumbersPropsType = {
  following: number;
  followers: number;
  posts: number;
};

type StatItemPropsType = {
  number: number;
  title: string;
};

const UserAvatarContainer: React.FC<UserAvatarPropsType> = ({imageUrl}) => {
  return (
    <View style={style.userAvatarContainer}>
      <UserAvatar
        {...{
          imageUrl,
          imageDimensions: style.userAvatar.width,
          customStyles: {borderColor: colors.purple, borderWidth: 2},
        }}
      />
    </View>
  );
};

const UserName: React.FC<UsernamePropsType> = ({username}) => {
  return (
    <View style={style.usernameContainer}>
      <Text style={style.username}>{username}</Text>
    </View>
  );
};

const StatItem: React.FC<StatItemPropsType> = ({title, number}) => {
  return (
    <View style={style.statItem}>
      <Text style={[style.statText, style.statNumber]}>
        {convertNumberToShorter(number)}
      </Text>
      <Text style={[style.statText, style.statTitle]}>{title}</Text>
    </View>
  );
};

const StatsBar: React.FC<SocialInteractionNumbersPropsType> = ({
  following,
  followers,
  posts,
}) => {
  const stats = [
    {title: 'following', number: following},
    {title: 'followers', number: followers},
    {title: 'posts', number: posts},
  ];

  const renderStats = () => {
    return stats.map((item, index) => {
      return (
        <Fragment key={item.title}>
          <StatItem {...item} />
          {index < stats.length - 1 && <View style={style.statItemSeparator} />}
        </Fragment>
      );
    });
  };

  return <View style={style.statBar}>{renderStats()}</View>;
};

const Profile: React.FC<ProfilePropsType> = ({}) => {
  const data = {
    username: 'User 101',
    imageUrl: 'https://picsum.photos/id/101/200.jpg',
    following: 45,
    followers: 30_000_000,
    posts: 100,
  };
  const {username, imageUrl, following, followers, posts} = data;

  return (
    <MainLayout>
      <ScrollView
        contentContainerStyle={[globalStyle.flexGrow, style.ProfileContainer]}>
        <View>
          <UserAvatarContainer {...{imageUrl}} />
          <UserName {...{username}} />
        </View>
        <StatsBar {...{following, followers, posts}} />
        <View style={style.statSeparator} />
        <ProfileTabs customStyles={style.tabsContainer} />
      </ScrollView>
    </MainLayout>
  );
};

export default Profile;
