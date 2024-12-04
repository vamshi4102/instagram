import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  postLoader: {
    width: width * 0.32,
    height: width * 0.32,
    backgroundColor: 'gray',
    margin: 2,
  },
  imageContainer: {
    width: width * 0.32,
    height: width * 0.32,
    backgroundColor: 'red',
    margin: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default styles;
