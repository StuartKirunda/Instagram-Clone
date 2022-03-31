import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './PostImage.styles';

const PostImage = ({ post }) => (
    <View style={styles.view}>
        <Image source={{ uri: post.imageUrl }} style={styles.image} />
    </View>
);

export default PostImage;
