import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/splash';
import HomeScreen from './src/screens/home';

const App = () => {
  return (
    <SafeAreaView>
      {/* <SplashScreen /> */}
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
