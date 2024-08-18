import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import TopBar from '../../components/topbar';
import BottomBar from '../../components/bottomBar';
import PostCard from '../../components/postCard';

const HomeScreen = () => {
  return (
    <View style={{height:'100%'}}>
      <TopBar />
      <PostCard />
      <BottomBar />
    </View>
  );
};

export default HomeScreen;
