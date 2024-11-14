import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    body:{
        // paddingHorizontal:24,
    },
    topNavigation:{
        flexDirection:'row',
        position:'absolute',
        top:0,
        width:'100%',
        height:50,
        backgroundColor:'white',
        justifyContent:'space-between',
        paddingHorizontal:24
    },
userName:{
    fontSize:20,
    fontWeight:'bold'
},
leftTopNav:{
    flexDirection:'row',
    alignItems:'center'
},
rightTopNav:{
    flexDirection:'row',
    alignItems:'center',
    gap:15
},
topNavIcon:{
    width:25,
    height:25
},
})
export default styles;