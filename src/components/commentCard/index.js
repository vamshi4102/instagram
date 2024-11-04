import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import usedImages from '../../assets/images';

const CommentCard = ({item}) => {
  return (
    <View style={styles.container}>
      {/* left profile */}
      <View style={styles.left}>
        <Image
          source={{uri: item?.profile_picture}}
          style={styles.profilePic}
        />
      </View>
      {/* middle data */}
      <View style={styles.body}>
        <Text style={styles.comment}>
          <Text style={styles.userName}>{item?.username}{" "}</Text>
          {item?.comment}
        </Text>
        <View style={styles.results}>
          <Text style={styles.result}>{item?.time}</Text>
          <Text style={styles.result}>{5} Likes</Text>
          <Text style={styles.result}>Reply</Text>
        </View>
      </View>
      {/* right side like icon */}
      <View style={styles.right}>
        {item?.isLiked ? (
          <Image
            source={usedImages.LikeActiveIcon}
            style={[styles.actionIcon, styles.activeLike]}
          />
        ) : (
          <Image
            source={usedImages.LikeIcon}
            style={[styles.actionIcon, styles.likeAction]}
          />
        )}
      </View>
    </View>
  );
};

export default CommentCard;
