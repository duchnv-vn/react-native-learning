import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faThumbsUp,
  faBookmark,
  faComment,
} from '@fortawesome/free-regular-svg-icons';
import {UserPost} from '../../common/types/posts.type';
import UserAvatar from '../UserAvatar/UserAvatar';
import InteractButton from '../InteractButton/InteractButton';
import style from './style';
import {colors} from '../../common/constants/colors';
import {fontSizeScale, horizontalScale} from '../../common/helpers/scaling';
import {NavigationHelpers} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

type PropsType = {
  data: UserPost;
  navigation: NavigationHelpers<any>;
};

const PostItem: React.FC<PropsType> = ({data, navigation}) => {
  const {
    id,
    thumbnailUrl,
    username,
    userImageUrl,
    address,
    bookmarks,
    comments,
    likes,
  } = data;

  const moveToProfilePage = () => {
    navigation.navigate(Routes.Profile.name);
  };

  return (
    <View key={id} style={style.postItem}>
      <View style={style.postHead}>
        <View style={style.userInfoContainer}>
          <UserAvatar
            imageUrl={userImageUrl}
            imageDimensions={horizontalScale(35)}
          />
          <View style={style.userInfo}>
            <Text style={style.username} onPress={moveToProfilePage}>
              {username}
            </Text>
            <Text style={style.address}>{address}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faEllipsis}
            size={fontSizeScale(16)}
            color={colors.lightGray}
          />
        </TouchableOpacity>
      </View>
      <View style={style.thumbnailContainer}>
        <Image source={{uri: thumbnailUrl}} style={style.thumbnail} />
      </View>
      <View style={style.postInteractionBar}>
        <InteractButton {...{icon: faThumbsUp, countNumber: likes, size: 18}} />
        <InteractButton
          {...{icon: faComment, countNumber: comments, size: 18}}
        />
        <InteractButton
          {...{icon: faBookmark, countNumber: bookmarks, size: 18}}
        />
      </View>
    </View>
  );
};

export default PostItem;
