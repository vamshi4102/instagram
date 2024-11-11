import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import TopBar from '../../components/topbar';
import BottomBar from '../../components/bottomBar';
import PostCard from '../../components/postCard';
import posts from '../../utils/used-data/posts';
import StoriesList from './stories';

const HomeScreen = () => {
  return (
    <View style={{height: '100%',backgroundColor:'white'}}>
      <TopBar />
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.emptySpace} />}
        ListHeaderComponent={<StoriesList />}
      />
      <BottomBar />
    </View>
  );
};

export default HomeScreen;
