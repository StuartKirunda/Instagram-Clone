import { Text, View } from "react-native";
import React from "react";

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4, }}>
        <Text style={{ color: 'white' }}>{post.likes_by_users.length.toLocaleString('en')} likes</Text>
    </View>
);

export default Likes;