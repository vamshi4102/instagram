import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal:24
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height:45,
    backgroundColor: '#f7f9f9',
    paddingHorizontal:10,
    borderWidth:1,
    borderColor:"#ecf0f1",
    fontSize:15,
    borderRadius:5
  },
  forgotPassword:{
    alignSelf:'flex-end',
    color:'#3498db',
    fontWeight:'bold'
  },
  submit:{
    width: '100%',
    height:45,
    backgroundColor: '#3498db',
    paddingHorizontal:10,
    borderWidth:1,
    borderColor:"#3498db",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
submitText:{
    color:'white',
    fontSize:15
},
or:{
    borderBottomWidth:1,
    borderColor:"#ccc",
    width:'100%',
    alignItems:'center',
    marginTop:10
},
orName:{
    backgroundColor:'white',
    marginBottom:-10,
    paddingHorizontal:10
},
facebook:{
    flexDirection:'row',
    alignItems:'center',
    gap:5,
    marginTop:25
},
facebookLogo:{
    width:25,
    height:25,
    resizeMode:'contain'
},
facebookLogin:{
    color:"#316FF6"
},
createAccount:{
    flexDirection:'row',
    gap:5,
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    alignItems:'center',
    justifyContent:'center',
    borderTopWidth:1,
    borderColor:"#ccc",
    paddingVertical:15,
    alignSelf:'center'
}
});
export default styles;
