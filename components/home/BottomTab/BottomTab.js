import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { styles } from './BottomTab.styles';

export const bottomTabIcons = [
    {
        name: 'Home',
        active: "https://img.icons8.com/fluency-systems-filled/24/000000/home.png",
        inactive: "https://img.icons8.com/fluency-systems-regular/24/000000/home.png",
    },
    {
        name: 'Search',
        active: "https://img.icons8.com/fluency-systems-filled/30/000000/search.png",
        inactive: "https://img.icons8.com/fluency-systems-regular/30/000000/search--v1.png",
    },
    {
        name: 'Reels',
        active: "https://img.icons8.com/ios-filled/50/000000/instagram-reel.png",
        inactive: 'https://img.icons8.com/ios/50/000000/instagram-reel.png',
    },
    {
        name: 'Activity',
        active: "https://img.icons8.com/material-rounded/24/000000/like--v1.png",
        inactive: 'https://img.icons8.com/material-outlined/24/000000/like--v1.png',
    },

    {
        name: 'Profile',
        active: 'https://images.unsplash.com/photo-1536321115970-5dfa13356211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        inactive: 'https://images.unsplash.com/photo-1536321115970-5dfa13356211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
];

const BottomTab = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home');

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} style={[styles.icon, icon.name === 'Profile' ? styles.profilePicInactive : null, activeTab === 'Profile' && icon.name === activeTab ? styles.profilePicActive : null,]} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.wrapper}>
            <Divider style={{ borderBottomColor: '#585759' }} width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    );

};


export default BottomTab;
