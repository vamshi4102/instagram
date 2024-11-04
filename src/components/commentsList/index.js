import {View, Text, FlatList} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import CommentCard from '../commentCard';
import styles from './styles';
import { commentsList } from '../../utils/used-data/static-data';

const CommentsList = ({commentsRef}) => {
  return (
    <RBSheet
      ref={commentsRef}
      //   useNativeDriver={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.6)',
        },
        draggableIcon: {
          backgroundColor: '#ccc',
        },
        container: {
          height: '80%',
        },
      }}
      customModalProps={{
        animationType: 'fade',
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}
      draggable={true}>
      <View style={styles.comments}>
        <Text style={styles.heading}>Comments</Text>
        <FlatList
        data={commentsList}
        renderItem={({item}) => <CommentCard item={item} />}
        ListFooterComponent={<View style={{height:80}} />}
        showsVerticalScrollIndicator={false}
        />
      </View>
    </RBSheet>
  );
};

export default CommentsList;
