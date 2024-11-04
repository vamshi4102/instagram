import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: '#f3f3f3',
    margin: 5,
    width: '30%',
  },
  profilePic: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.2,
  },
  userName: {
    marginTop: 5,
  },
  active: {
    width: 15,
    height: 15,
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 8,
  },
  lastSeen: {
    backgroundColor: '#d1f2eb',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    right: 8,    borderWidth: 2,
    borderColor: 'white',
  },
  lastSeenText: {
    fontSize: 8,
    color: 'green',
  },
});

export default styles;
