import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
const {width, height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';

const UserProfileImage = ({image, userName, place, isRead}) => {
  const borderColor = isRead
    ? ['#f3f3f3', '#f3f3f3', '#f3f3f3']
    : ['#962fbf', '#fa7e1e', '#feda75'];

  const getImageSize = place => {
    if (place === 'story_list') {
      return width * 0.2;
    }
    else if (place === 'post_card') {
      return width * 0.1;
    }
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={borderColor}
        style={[
          styles.profieContainer,
          {width: getImageSize(place), height: getImageSize(place), borderRadius: getImageSize(place)},
        ]}>
        <Image source={{uri: image}} style={styles.image} />
      </LinearGradient>
      {userName !== "" && <Text style={styles.userName}>{userName}</Text>}
    </View>
  );
};

export default UserProfileImage;
