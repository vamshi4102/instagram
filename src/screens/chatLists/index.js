import { View, Text } from 'react-native'
import React from 'react'
import UserChatCard from '../../components/UserChatCard'
import styles from './styles'

const ChatLists = () => {
  return (
    <View style={styles.container}>
      <UserChatCard />
      <UserChatCard />
      <UserChatCard />
      <UserChatCard />
      <UserChatCard />
      <UserChatCard />
      <UserChatCard />
      <UserChatCard />
    </View>
  )
}

export default ChatLists