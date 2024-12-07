import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import usedImages from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';

const BottomBar = () => {
  const navigation = useNavigation();
  const onClickProfile = async () => {
    // try {
    //   await EncryptedStorage.removeItem('user_logged');
    // } catch (error) {
    //   console.log('error', error);
    // }
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>  navigation.navigate('Home')}>
        <Image source={usedImages.HomeActive} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>  navigation.navigate('Search')}>
        <Image source={usedImages.Search} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={usedImages.Create} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>  navigation.navigate('Reels')}>
        <Image source={usedImages.Reel} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onClickProfile()}>
        <Image source={usedImages.Profile} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
export default BottomBar;
