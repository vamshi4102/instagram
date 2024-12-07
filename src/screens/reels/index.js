import {View, Text} from 'react-native';
import React from 'react';
import BottomBar from '../../components/bottomBar';
import styles from './styles';
import Video from 'react-native-video';
import ReelItem from '../../components/ReelItem';
import {reelsArray} from '../../utils/used-data/static-data';
import Swiper from 'react-native-swiper';

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        horizontal={false}
        showsPagination={false}>
        {reelsArray.map(item => (
          <ReelItem reel={item} />
        ))}
      </Swiper>
      {/* <BottomBar /> */}
    </View>
  );
};

export default ReelsScreen;
