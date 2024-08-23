import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

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
      }}
      customModalProps={{
        animationType: "fade",
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}     
      draggable={true}
      >
      <View>
        <Text>Comments here</Text>
      </View>
    </RBSheet>
  );
};

export default CommentsList;
