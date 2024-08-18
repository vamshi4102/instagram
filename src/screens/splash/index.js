import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import usedImages from '../../assets/images';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={usedImages.mainLogo} style={styles.image} />
    </View>
  );
};

export default SplashScreen;
