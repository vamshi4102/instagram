import {View} from 'react-native';
import React from 'react';
import BottomBar from '../../components/bottomBar';
import styles from './styles';
import {ProfileInfo, TopNavigation} from './profileComponents';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* top navigation */}
      <TopNavigation />
      <View style={styles.body}>
        {/* profile info */}
        <ProfileInfo />
      </View>
      <BottomBar />
    </View>
  );
};

export default ProfileScreen;
