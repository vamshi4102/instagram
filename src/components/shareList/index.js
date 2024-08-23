import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

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
        <Text>Share here</Text>
      </View>
    </RBSheet>
  );
};

export default ShareList;
