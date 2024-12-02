import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import UserProfileImage from '../userProfileImage';
import {storiesList} from '../../utils/used-data/static-data';
import usedImages from '../../assets/images';
import {useNavigation} from '@react-navigation/native';

const UserChatCard = () => {
  const item = storiesList[1];
  const userName = 'Vamshi krishna';
  const message = 'Hello,How are you doing? 13 hrs';
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('ChatRoom')}>
      <View style={styles.left}>
        <UserProfileImage
          image={item?.image}
          userName={''}
          isRead={item?.read}
          place={'chat_list'}
        />
      </View>
      <View style={styles.middle}>
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View style={styles.right}>
        <Image source={usedImages.cameraImage} style={styles.icon} />
      </View>
    </Pressable>
  );
};

export default UserChatCard;
