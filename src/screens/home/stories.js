import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {storiesList} from '../../utils/used-data/static-data';
import UserProfileImage from '../../components/userProfileImage';

const StoriesList = () => {
  return (
    <View style={styles.stories}>
      <FlatList
        data={storiesList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <UserProfileImage
            image={item?.image}
            userName={item?.name}
            isRead={item?.read}
            place={"story_list"}
          />
        )}
      />
    </View>
  );
};

export default StoriesList;
