import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import usedImages from '../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={usedImages.homeLogo} style={styles.mainLogo} />
      <View style={styles.rightButtons}>
        <Image
          style={[styles.rightIcon, styles.likeIcon]}
          source={usedImages.LikeIcon}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ChatLists')}>
          <Image style={styles.rightIcon} source={usedImages.ShareIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
