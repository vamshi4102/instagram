import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import TopBar from '../../components/topbar';

const HomeScreen = () => {
  return (
    <View>
      <TopBar />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
