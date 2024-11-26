import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 0,
    marginTop: 50,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  actionButton: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    borderRadius: 6,
    borderBottomWidth: 1.5,
    borderColor: 'white',
  },
  actionBtnImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  activeAction: {
    borderBottomWidth: 1.5,
    borderColor: 'black',
  },
  gridPostContainer: {
    width: width * 0.33,
    height: width * 0.33,
    padding:2
  },
  gridPost: {
    width: '100%',
    height: '100%',
  },
});
export default styles;
