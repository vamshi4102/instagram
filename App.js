import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from './src/screens/splash';
import HomeScreen from './src/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './src/screens/profile';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/login';
import EncryptedStorage from 'react-native-encrypted-storage';
import ChatLists from './src/screens/chatLists';
import ChatRoom from './src/screens/chatRoom';
import Notifications from './src/screens/notifcations';

const App = () => {
  const Stack = createStackNavigator();
  const [isLoading, setisLoading] = useState(true);
  const [isUserLogged, setisUserLogged] = useState(false);

  useEffect(() => {
    getUserSession();
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);

  async function getUserSession() {
    try {
      const getLoggedInfo = await EncryptedStorage.getItem('user_logged');
      console.log('getLoggedInfo', getLoggedInfo);
      if (getLoggedInfo === 'true') {
        setisUserLogged(true);
      } else {
        setisUserLogged(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={isUserLogged ? 'Home' : 'Login'}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
            <Stack.Screen name="ChatLists" component={ChatLists} />
            <Stack.Screen name="Notifications" component={Notifications} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
};

export default App;
