import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 24,
    marginBottom: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
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
    // backgroundColor:'red'
  },
  name: {
    fontSize: 15,
  },
  message: {
    fontSize: 15,
    color: 'gray',
  },
  time: {
    fontSize: 15,
    color: '#ccc',
  },
  icon: {
    height: 35,
    width: 35,
  },
  actinButtons: {
    flexDirection: 'row',
  },
  menuButton: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20
  },
  menuText: {
    color: 'white',
  },
  redBtn: {
    backgroundColor:'red'
  }
});
export default styles;
