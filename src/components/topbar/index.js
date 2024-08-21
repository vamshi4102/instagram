import {Image, View} from 'react-native';
import React from 'react';
import usedImages from '../../assets/images';
import styles from './styles';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Image source={usedImages.homeLogo} style={styles.mainLogo} />
      <View style={styles.rightButtons}>
        <Image style={[styles.rightIcon,styles.likeIcon]} source={usedImages.LikeIcon} />
        <Image style={styles.rightIcon} source={usedImages.ShareIcon} />
      </View>
    </View>
  );
};

export default TopBar;
