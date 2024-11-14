import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BottomBar from '../../components/bottomBar';
import styles from './styles';
import usedImages from '../../assets/images';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.topNavigation}>
          <View style={styles.leftTopNav}>
            <Text style={styles.userName}>Vamshi 4102 </Text>
            <Image
              source={usedImages.downIcon}
              style={[
                styles.topNavIcon,
                {resizeMode: 'contain', height: 15, width: 15},
              ]}
            />
          </View>
          <View style={styles.rightTopNav}>
            <TouchableOpacity>
              <Image source={usedImages.thredIcon} style={styles.topNavIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={usedImages.Create} style={styles.topNavIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={usedImages.menuIcon} style={styles.topNavIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BottomBar />
    </View>
  );
};

export default ProfileScreen;
