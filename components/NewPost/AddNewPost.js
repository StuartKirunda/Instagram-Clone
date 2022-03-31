import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { styles } from './AddNewPost.styles';
import FormikPostUploader from './FormikPostUploader';

const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FormikPostUploader navigation={navigation} />
        </View>
    );
};

const Header = ({ navigation }) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={{ uri: "https://img.icons8.com/fluency-systems-regular/50/000000/long-arrow-left.png" }}
                style={{ width: 30, height: 30, tintColor: 'white', marginLeft: 10 }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text></Text>
    </View>
);

export default AddNewPost;
