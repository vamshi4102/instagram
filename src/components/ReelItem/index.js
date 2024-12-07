import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import usedImages from '../../assets/images';
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  EllipsisVerticalIcon,
  MusicalNoteIcon,
} from 'react-native-heroicons/outline';
import {HeartIcon as ActiveHeartIcon} from 'react-native-heroicons/solid';
import styles from './styles';
const ReelItem = ({reel}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setlikeCount] = useState(reel?.like_count);

  const onClickLike = action => {
    setIsLiked(!isLiked);
    if (action === 'like') {
      if (likeCount > 0) {
        setlikeCount(likeCount + 1);
      }
    } else if (action === 'dislike') {
      if (likeCount > 0) {
        setlikeCount(likeCount - 1);
      }
    }
  };
  const onBuffer = () => <View style={styles.loader}><ActivityIndicator color={'white'} /></View>;
  return (
    <View style={{flex: 1,backgroundColor:'red'}}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Video
        source={{
          uri:reel.videoUrl,
        }}
        style={{flex: 1}}
        paused={false}
        repeat
        resizeMode="cover"
        onBuffer={onBuffer}
      />
      <View style={styles.ownerInfo}>
        <View style={styles.profileInfo}>
          <Image
            source={{uri: reel?.user?.profile_picture}}
            style={styles.profilePicture}
          />
          <Text style={styles.userName}>{reel?.user?.username}</Text>
        </View>
        <Text style={styles.captions} numberOfLines={2}>
          {reel?.caption}
        </Text>
      </View>
      {/* right side action icons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => onClickLike(isLiked ? 'dislike' : 'like')}>
          {isLiked ? (
            <ActiveHeartIcon color={'red'} size={30} />
          ) : (
            <HeartIcon color={'white'} size={30} />
          )}
          <Text style={styles.count}>{likeCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <ChatBubbleOvalLeftIcon color={'white'} size={30} />
          <Text style={styles.count}>{reel?.comments_count}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <PaperAirplaneIcon color={'white'} size={30} />
          <Text style={styles.count}>850.3k</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <EllipsisVerticalIcon color={'white'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.musicBtn}>
          <MusicalNoteIcon color={'white'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReelItem;
