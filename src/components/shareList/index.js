import {View, Text, FlatList} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import ShareUserCard from '../UserCards';
import {shareList} from '../../utils/used-data/static-data';
import styles from './styles';

const ShareList = ({shareRef}) => {
  return (
    <RBSheet
      ref={shareRef}
      //   useNativeDriver={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.6)',
        },
        draggableIcon: {
          backgroundColor: '#ccc',
        },
        container: {
          height: '60%',
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
      <View>
        <Text style={styles.heading}>Share</Text>
        <FlatList
          data={shareList}
          renderItem={({item}) => <ShareUserCard item={item} />}
          ListFooterComponent={<View style={{height: 80}} />}
          showsVerticalScrollIndicator={false}
          numColumns={3}
        />
      </View>
    </RBSheet>
  );
};

export default ShareList;
