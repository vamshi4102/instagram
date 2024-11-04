import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 15,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  left: {
    width: 35,
    height: 35,
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  body: {
    flex: 1,
  },
  comment: {},
  userName: {
    fontWeight: 'bold',
  },
  results: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
  },
  result: {
    color: 'gray',
  },
  right: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LikeActiveIcon: {},
  activeLike: {},
});
export default styles;
