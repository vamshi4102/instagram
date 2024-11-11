import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from './src/screens/splash';
import HomeScreen from './src/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './src/screens/profile';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/login';

const App = () => {
  
  const Stack = createStackNavigator();
  const [isLoading, setisLoading] = useState(true);
  const [isUserLogged, setisUserLogged] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName={isUserLogged?"Home":"Login"}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
};

export default App;
