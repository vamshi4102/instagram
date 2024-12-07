import { View, Text } from 'react-native'
import React from 'react'
import BottomBar from '../../components/bottomBar'
import styles from './styles'
import Video from 'react-native-video';
import ReelItem from '../../components/ReelItem';

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <ReelItem />
      {/* <BottomBar /> */}
    </View>
  )
}

export default ReelsScreen