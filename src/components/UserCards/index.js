import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const ShareUserCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: item?.profile_picture}}
          style={styles.profilePic}
        />
        {item?.isActive ? (
          <View style={styles.active} />
        ) : item?.lastSeen < 60 ? (
          <View style={styles.lastSeen}>
            <Text style={styles.lastSeenText}>{item?.lastSeen} m</Text>
          </View>
        ) : null}
      </View>
      <Text style={styles.userName}>{item?.username}</Text>
    </View>
  );
};

export default ShareUserCard;
