import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import usedImages from '../../assets/images';
const PostCard = () => {
  return (
    <View style={styles.container}>
      {/* top section (user info) */}
      <View style={styles.topSection}>
        <View style={styles.left}>
          <View style={styles.imageContainer}>
            <Image source={usedImages.userImage} style={styles.image} />
          </View>
          <View style={styles.username}>
            <Text style={styles.usernameText}>Vamshi krishna</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Image source={usedImages.Options} style={styles.optionsImage} />
        </View>
      </View>
      {/*post section */}
      <View style={styles.postImageConatainer}>
        <Image source={usedImages.PostImage1} style={styles.postImage} />
      </View>
      {/*actions buttons */}
      {/*caption and comments */}
    </View>
  );
};

export default PostCard;
