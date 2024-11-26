import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    gap: 10,
    paddingVertical: 24,
  },
  userCounts: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.2,
    padding: 4,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: width * 0.25,
    borderWidth: 5,
    borderColor: 'white',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 15,
    flex: 1,
  },
  countView: {
    alignItems: 'center',
  },
  count: {
    fontSize: 18,
    fontWeight: '600',
  },
  countName: {
    fontSize: 12,
  },
  storyIcon: {
    backgroundColor: '#0098FD',
    padding: 2,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  addStory: {
    width: 15,
    height: 15,
    zIndex: 10,
  },
  userName: {
    fontSize: 20,
    color: 'black',
  },
  bio: {
    fontSize: 15,
  },
  bioLink: {
    flexDirection:'row',
    alignItems:'center',
    gap:5
  },
  linkIcon: {
    width:18,
    height:18
  },
  linkText: {
    fontWeight:"600",
    maxWidth:"60%"
  },
});
export default styles;
