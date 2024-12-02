import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';
const MessageCard = props => {
  const {isFromUser, message} = props;
  const backgroundColor = !isFromUser
    ? ['#f3f3f3', '#f3f3f3', '#f3f3f3']
    : ['#962fbf', '#6c3483'];
  return (
    <View>
      <LinearGradient
        colors={backgroundColor}
        style={[
          styles.message,
          {alignSelf: isFromUser ? 'flex-end' : 'flex-start'},
        ]}>
        <Text
          style={[styles.messageCard, {color: isFromUser ? 'white' : 'black'}]}>
          {message}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default MessageCard;
