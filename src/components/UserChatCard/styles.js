import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexDirection: 'row',
    gap: 5,
    marginHorizontal: 24,
    marginBottom:10
  },
  left: {
    width: width * 0.13,
    height: width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
  },
  right: {
    width: width * 0.13,
    height: width * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
  },
  message: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    height: 35,
    width: 35,
  },
});
export default styles;
