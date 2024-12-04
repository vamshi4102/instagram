import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const SearchPostItem = ({item, isPostLoading}) => {
  return (
    <View>
      {isPostLoading ? (
        <SkeletonPlaceholder borderRadius={0}>
          <View style={styles.postLoader}></View>
        </SkeletonPlaceholder>
      ) : (
        <View style={styles.imageContainer}>
          <Image source={{uri: item?.user?.image}} style={styles.image} />
        </View>
      )}
    </View>
  );
};

export default SearchPostItem;
