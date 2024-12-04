import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import UserProfileImage from '../userProfileImage';
import {storiesList} from '../../utils/used-data/static-data';
import usedImages from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {Swipeable} from 'react-native-gesture-handler';
const NotificationCard = ({item}) => {
  const navigation = useNavigation();
  const renderRightActions = id => (
    <View style={styles.actinButtons}>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuButton, styles.redBtn]}
        onPress={() => console.warn('delete this => ', id)}>
        <Text style={[styles.menuText]}>delete</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <Swipeable renderRightActions={() => renderRightActions(item?.id)}>
      <View style={styles.container}>
        <View style={styles.left}>
          <UserProfileImage
            image={item?.user?.image}
            userName={''}
            isRead={item?.read}
            place={'chat_list'}
          />
        </View>
        <View style={styles.middle}>
          <Text>
            <Text style={styles.name}>{item?.user?.name}, </Text>
            <Text style={styles.message}>{item?.message} </Text>
            <Text style={styles.time}>{item?.timestamp}</Text>
          </Text>
        </View>
        <View style={styles.right}></View>
      </View>
    </Swipeable>
  );
};

export default NotificationCard;
