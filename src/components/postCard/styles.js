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
    justifyContent:'center',
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
  // actions
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionsLeft: {
    flexDirection: 'row',
    alignItems:'center',
    gap: 5,
  },
  actionIcon: {},
  actionsRight: {},
  saveIcon: {
    width: 28,
    height: 28,
  },
  // liked by section
  likedBySection: {
    flexDirection: 'row',
  },
  normalText: {
    fontSize: 15,
  },
  activeText: {
    fontWeight: 'bold',
  },
  likedUser:{
    width:20,
    height:20,
    borderRadius:10,
    borderWidth:2,
    borderColor:'white',
  },
  viewAllComments:{
    color:'gray',
    fontSize: 15,
  },
  lastComment:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  commentLike:{
    width:15,
    height:15
  },
  addCommentContainer:{
    flexDirection:'row',
    marginTop:5
  },
commentUser:{
  width:20,
  height:20,
  borderRadius:10,
},
addComment:{
  paddingHorizontal:10
},
time:{
  fontSize:15,
  color:"gray",
  marginTop:5
},
likeAction:{
  height:25,
  marginTop:3,
  resizeMode:'contain',
  marginRight:5
},
activeLike:{
  marginRight:0,
  height:25,
  marginRight:-3
}
});
export default styles;
