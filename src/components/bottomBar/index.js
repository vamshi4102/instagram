import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import usedImages from '../../assets/images';
const BottomBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={usedImages.HomeActive} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={usedImages.Search} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={usedImages.Create} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={usedImages.Reel} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={usedImages.Profile} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
};
export default BottomBar;