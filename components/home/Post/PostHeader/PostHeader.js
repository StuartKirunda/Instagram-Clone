import { View, Text, Image } from "react-native";
import styles from "./PostHeader.styles";
import React from "react";

const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }}>
        <View style={styles.postheader}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={styles.postheaderText}>{post.user}</Text>
        </View>

        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
);

export default PostHeader;