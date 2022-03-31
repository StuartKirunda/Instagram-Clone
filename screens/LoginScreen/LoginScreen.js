import React from 'react';
import { View, Text, Image } from 'react-native';
import LoginForm from '../../components/LoginScreen/LoginForm';
import { styles } from './LoginScreen.styles';

const INSTAGRAM_LOGO = "https://img.icons8.com/fluency/48/000000/instagram-new.png";

const LoginScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100, }} />
        </View>
        <LoginForm navigation={navigation} />
    </View>
);

export default LoginScreen;
