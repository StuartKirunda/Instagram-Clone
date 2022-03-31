import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Header.styles';
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase';


const handleSignout = async () => {
    try {
        await signOut(auth);
        console.log('signed out successfully');
    } catch (error) {
        console.log(error);
    }
};

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSignout}>
                <Image
                    style={styles.logo}
                    // @ts-ignore
                    source={require('../../../assets/header-logo.png')}
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                    <Image
                        style={styles.icon}
                        // @ts-ignore
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/50/000000/plus-2-math.png"
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image
                        style={styles.icon}
                        // @ts-ignore
                        source={{
                            uri: "https://img.icons8.com/material-outlined/24/000000/facebook-messenger--v1.png"
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
