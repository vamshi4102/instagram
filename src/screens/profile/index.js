import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BottomBar from '../../components/bottomBar';
import styles from './styles';
import {ProfileInfo, TopNavigation} from './profileComponents';
import HighlightsList from './profileComponents/highlights';
import usedImages from '../../assets/images';
import posts from '../../utils/used-data/posts';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* top navigation */}
      <TopNavigation />
      <View style={styles.body}>
        {/* profile info */}
        <ProfileInfo />
        {/* highlights section */}
        <HighlightsList />
        {/* profile tabs */}
        <View style={styles.actionsRow}>
          <TouchableOpacity style={[styles.actionButton, styles.activeAction]}>
            <Image source={usedImages.gridIcon} style={styles.actionBtnImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image
              source={usedImages.premiumIcon}
              style={styles.actionBtnImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image
              source={usedImages.reelsGrayIcon}
              style={styles.actionBtnImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image
              source={usedImages.userMentionsIcon}
              style={styles.actionBtnImage}
            />
          </TouchableOpacity>
        </View>
        {/* -------------------- */}
        <FlatList
          data={posts}
          contentContainerStyle={{alignItems:"center"}}
          numColumns={3}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.gridPostContainer}>
              <Image
                source={{uri: item?.thumbnail_url}}
                style={styles.gridPost}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <BottomBar />
    </View>
  );
};

export default ProfileScreen;
