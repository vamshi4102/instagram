import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
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
const ReelItem = () => {
  const [isLiked, setIsLiked] = useState(false);
  const onClickLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Video
        source={{
          uri: 'https://videos.pexels.com/video-files/7413785/7413785-hd_1080_1920_24fps.mp4',
        }}
        style={{flex: 1}}
        paused={false}
        repeat
        resizeMode="cover"
      />
      {/* right side action icons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionBtn} onPress={onClickLike}>
          {isLiked ? (
            <ActiveHeartIcon color={'red'} size={30} />
          ) : (
            <HeartIcon color={'white'} size={30} />
          )}
          <Text style={styles.count}>150.2k</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <ChatBubbleOvalLeftIcon color={'white'} size={30} />
          <Text style={styles.count}>2.2k</Text>
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
