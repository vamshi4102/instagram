import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import usedImages from '../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';

const LoginScreen = () => {
  const navigation = useNavigation();

  async function onClickLogin() {
    try {
      await EncryptedStorage.setItem('user_logged', 'true');
      navigation.navigate('Home');
    } catch (error) {
      console.log('error', error);
    }
  }
  return (
    <View style={styles.container}>
      <Image source={usedImages.homeLogo} style={styles.logo} />
      <TextInput
        placeholder="Phone number,Username or Email address"
        style={styles.input}
      />
      <TextInput placeholder="Password" style={styles.input} />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      {/* ----- */}
      <TouchableOpacity
        style={styles.submit}
        onPress={() => onClickLogin()}>
        <Text style={styles.submitText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.or}>
        <Text style={styles.orName}>OR</Text>
      </View>
      <View style={styles.facebook}>
        <Image source={usedImages.facebookLogo} style={styles.facebookLogo} />
        <Text style={styles.facebookLogin}>Login with Facebook</Text>
      </View>
      <View style={styles.createAccount}>
        <Text style={[styles.facebookLogin, {color: 'black'}]}>
          Don't have account?
        </Text>
        <Text style={styles.forgotPassword}>Create account</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
