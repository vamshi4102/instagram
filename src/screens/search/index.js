import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import BottomBar from '../../components/bottomBar';
import styles from './styles';
import postsList from '../../utils/used-data/static-data';
import SearchPostItem from '../../components/SearchPostItem';

const Search = () => {
  const [isPostLoading, setisPostLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisPostLoading(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." style={styles.searchBar} />
      <FlatList
        data={postsList}
        numColumns={3}
        renderItem={({item}) => (
          <SearchPostItem item={item} isPostLoading={isPostLoading} />
        )}
        ListFooterComponent={<View style={{height:100}} />}
      />
      <BottomBar />
    </View>
  );
};

export default Search;
