import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {storiesList} from '../../../utils/used-data/static-data';
import UserProfileImage from '../../../components/userProfileImage';
const {width} = Dimensions.get('window');

const HighlightsList = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingBottom: 10,
        paddingHorizontal: 24,
      }}>
      <FlatList
        data={storiesList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <UserProfileImage
            image={item?.image}
            userName={item?.name}
            isRead={item?.read}
            place={'story_list'}
          />
        )}
        ListFooterComponent={
          <View style={styles.container}>
            <TouchableOpacity
              style={[
                styles.profieContainer,
                {
                  width: width * 0.2,
                  height: width * 0.2,
                  borderRadius: width * 0.2,
                },
              ]}>
              <Text style={styles.addNew}>+</Text>
            </TouchableOpacity>
            <Text style={styles.userName}>New</Text>
          </View>
        }
      />
    </View>
  );
};

export default HighlightsList;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  profieContainer: {
    padding: 3,
    borderWidth:1,
    borderColor:'#ccc',
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
  },
  addNew:{
    fontSize:30
  }
});
