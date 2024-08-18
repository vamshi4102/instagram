import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <Image 
      source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png'}}
      style={{width:100,height:100,marginBottom:20}}
      />
      <Text>Instagram build in telugu</Text>
    </View>
  )
}

export default App;