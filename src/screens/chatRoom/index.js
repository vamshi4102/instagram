import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import MessageCard from '../../components/MessageCard'

const ChatRoom = () => {
  return (
    <View style={styles.container}>
      <MessageCard isFromUser={false} message={"Hello,how are you doing?"} />
      <MessageCard isFromUser={true} message={"I am doing great"} />
    </View>
  )
}

export default ChatRoom