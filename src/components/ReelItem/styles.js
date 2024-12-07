import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  actionButtons: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    // backgroundColor:'red',
    alignItems: 'center',
  },
  actionBtn: {
    padding: 10,
    alignItems: 'center',
    gap: 5,
  },
  count: {
    color: 'white',
    fontSize: 10,
  },
  musicBtn: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
  },
  ownerInfo: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    width: width - 50,
    padding:10
  },
  profileInfo: {
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  profilePicture: {
    width:30,
    height:30,
    borderRadius:20,
  },
  userName: {
    fontSize:15,
    fontWeight:"bold",
    color:'white'
  },
  captions:{
    fontSize:12,
    color:'white'
  },
  loader:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.4)',
    zIndex:1
  }
});
export default styles;
