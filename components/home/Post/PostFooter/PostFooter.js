import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { POSTS } from "../../../../data/posts";
import { auth } from "../../../../firebase";
import styles from "./PostFooter.styles";

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/material-outlined/24/000000/like--v1.png',
        likedImageUrl: "https://img.icons8.com/material-rounded/24/000000/like--v1.png",
    },
    {
        name: 'Comment',
        imageUrl: "https://img.icons8.com/fluency-systems-regular/48/000000/speech-bubble--v1.png",
    },
    {
        name: 'Share',
        imageUrl: "https://img.icons8.com/ios/50/000000/sent.png",
    },
    {
        name: 'Save',
        imageUrl: "https://img.icons8.com/small/24/000000/bookmark-ribbon.png",
    },
];

const PostFooter = ({ handleLike, post }) => (
    <View style={{ flexDirection: 'row' }}>
        <View style={styles.leftFooterIconsContainer}>
            <TouchableOpacity onPress={() => handleLike(post)}>
                <Image style={styles.footerIcon} source={{ uri: post.likes_by_users.include(auth.currentUser?.email) ? postFooterIcons[0].likedImageUrl : postFooterIcons[0].imageUrl }} />
            </TouchableOpacity>
            <Icon imgStyle={styles.footerIconComment} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
        </View>
    </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
);



export default PostFooter;