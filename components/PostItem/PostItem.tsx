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

type PropsType = {
  data: UserPost;
};

const PostItem: React.FC<PropsType> = ({data}) => {
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
  return (
    <View key={id} style={style.postItem}>
      <View style={style.postHead}>
        <View style={style.userInfoContainer}>
          <UserAvatar imageUrl={userImageUrl} imageDimensions={35} />
          <View style={style.userInfo}>
            <Text style={style.username}>{username}</Text>
            <Text style={style.address}>{address}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faEllipsis}
            size={16}
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
