import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import usedImages from '../../../assets/images';

const TopNavigation = () => {
  return (
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
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  topNavigation: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  leftTopNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightTopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  topNavIcon: {
    width: 25,
    height: 25,
  },
});
