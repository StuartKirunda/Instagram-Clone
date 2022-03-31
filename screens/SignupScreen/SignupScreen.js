import React from 'react';
import { View, Text, Image } from 'react-native';
import LoginForm from '../../components/LoginScreen/LoginForm';
import SignupForm from '../../components/SignupScreen/SignupForm';
import { styles } from './SignupScreen.styles';

const INSTAGRAM_LOGO = "https://img.icons8.com/fluency/48/000000/instagram-new.png";

const SignupScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100, }} />
        </View>
        <SignupForm navigation={navigation} />
    </View>
);

export default SignupScreen;
