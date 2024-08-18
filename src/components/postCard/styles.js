import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {},
  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  username: {gap: 5},
  usernameText: {
    marginLeft: 10,
  },
  right: {},
  postImageConatainer: {
    paddingVertical: 10,
  },
  postImage: {
    width: width - 40,
    height: width - 40,
    borderRadius: 5,
  },
});
export default styles;
