import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import usedImages from '../../assets/images';
const PostCard = ({post}) => {

  return (
    <View style={styles.container}>
      {/* top section (user info) */}
      <View style={styles.topSection}>
        <View style={styles.left}>
          <View style={styles.imageContainer}>
            <Image source={{uri:post.user.profile_picture}} style={styles.image} />
          </View>
          <View style={styles.username}>
            <Text style={styles.usernameText}>{post.user.username}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Image source={usedImages.Options} style={styles.optionsImage} />
        </View>
      </View>
      {/*post section */}
      <View style={styles.postImageConatainer}>
        <Image source={{uri:post.media_url}} style={styles.postImage} />
      </View>
      {/*actions buttons */}
      <View style={styles.actionsRow}>
        <View style={styles.actionsLeft}>
          <TouchableOpacity>
            <Image
              source={usedImages.LikeIcon}
              style={[styles.actionIcon,styles.likeAction]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={usedImages.CommentIcon} style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={usedImages.ShareIcon} style={styles.actionIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.actionsRight}>
          <TouchableOpacity>
            <Image source={usedImages.SaveIcon} style={styles.saveIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {/*caption and comments */}
      <View style={styles.likedBySection}>
        {usedImages.postLikedUsers.map((user, index) => (
          <Image
            style={[
              styles.likedUser,
              {
                marginLeft: index === 0 ? 0 : -8,
                zIndex: index === 0 ? 2 : index === 2 ? -2 : 1,
              },
            ]}
            source={{uri: user.image}}
            key={user.id}
          />
        ))}
        {/* <Text style={styles.normalText}>
          Liked by <Text style={styles.activeText}>elon musk</Text> and{' '}
          <Text style={styles.activeText}>25,451 Others</Text>
        </Text> */}
        <Text style={styles.normalText}>
          Liked by <Text style={styles.activeText}>{post.like_count} people</Text>
        </Text>
      </View>
      <Text style={styles.normalText}>
        <Text style={styles.activeText}>{post.user.username} </Text>
        {post.caption.text}
      </Text>
      {/* post comments section */}
      <Text style={styles.viewAllComments}>View all {post.comments_count} Comments</Text>
      <View style={styles.lastComment}>
        <Text style={styles.normalText}>
          <Text style={styles.activeText}>{post.comments[0].from.username} </Text>
          {post.comments[0].text}
        </Text>
        <Image source={usedImages.LikeIcon} style={styles.commentLike} />
      </View>
      {/* add comment section */}
      <View style={styles.addCommentContainer}>
        <Image source={{uri:post.loggedUser.profile_picture}} style={styles.commentUser} />
        <TextInput placeholder="Add a comment..." style={styles.addComment} />
      </View>
      <Text style={styles.time}>{post.timestamp}</Text>
    </View>
  );
};

export default PostCard;
