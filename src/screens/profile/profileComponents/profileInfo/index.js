import {
  Alert,
  Button,
  Dimensions,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {userProfile} from '../../../../utils/used-data/static-data';
const {width, height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import usedImages from '../../../../assets/images';
import styles from './styles';

const ProfileInfo = () => {
  const isRead = false;
  const borderColor = isRead
    ? ['#f3f3f3', '#f3f3f3', '#f3f3f3']
    : ['#962fbf', '#fa7e1e', '#feda75'];

  const OpenProfileUrl = ({url, children}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <TouchableOpacity onPress={handlePress} style={{width:"100%",backgroundColor:'red'}}>
        <Text style={styles.linkText} numberOfLines={1}>{children}</Text>
      </TouchableOpacity>
    );
  };

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
      {/* -------------------------- */}
      <View style={styles.bioLink}>
        <Image source={usedImages.linkIcon} style={styles.linkIcon} />
        <Text numberOfLines={1}>
          <OpenProfileUrl url={userProfile?.bioLink}>
            {userProfile?.bioLink}
          </OpenProfileUrl>
        </Text>
      </View>
    </View>
  );
};

export default ProfileInfo;
