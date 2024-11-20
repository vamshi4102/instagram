import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {userProfile} from '../../../utils/used-data/static-data';
const {width, height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import usedImages from '../../../assets/images';

const ProfileInfo = () => {
  const isRead = false;
  const borderColor = isRead
    ? ['#f3f3f3', '#f3f3f3', '#f3f3f3']
    : ['#962fbf', '#fa7e1e', '#feda75'];
  return (
    <View style={styles.container}>
      <View style={styles.userCounts}>
        <View>
          <LinearGradient colors={borderColor} style={[styles.image]}>
            <Image
              source={{uri: userProfile.profile_picture}}
              style={styles.profileImage}
            />
          </LinearGradient>
          <Pressable style={styles.storyIcon}>
            <Image style={styles.addStory} source={usedImages.addStory} />
          </Pressable>
        </View>
        <View style={styles.right}>
          <View style={styles.countView}>
            <Text style={styles.count}>{userProfile?.postsCount}</Text>
            <Text style={styles.countName}>Posts</Text>
          </View>
          <View style={styles.countView}>
            <Text style={styles.count}>{userProfile?.followersCount}</Text>
            <Text style={styles.countName}>Followers</Text>
          </View>
          <View style={styles.countView}>
            <Text style={styles.count}>{userProfile?.followingCount}</Text>
            <Text style={styles.countName}>Following</Text>
          </View>
        </View>
      </View>
      {/* -------------------------- */}
      <View>
        <Text style={styles.userName}>{userProfile?.username}</Text>
        <Text style={styles.bio}>{userProfile?.bio}</Text>
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    gap: 10,
    paddingVertical:24
  },
  userCounts: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.2,
    padding: 4,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: width * 0.25,
    borderWidth: 5,
    borderColor: 'white',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 15,
    flex: 1,
  },
  countView: {
    alignItems: 'center',
  },
  count: {
    fontSize: 18,
    fontWeight: '600',
  },
  countName: {
    fontSize: 12,
  },
  storyIcon: {
    backgroundColor: '#0098FD',
    padding: 2,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  addStory: {
    width: 15,
    height: 15,
    zIndex: 10,
  },
  userName: {
    fontSize: 20,
    color: 'black',
  },
  bio: {
    fontSize: 15,
  },
});
