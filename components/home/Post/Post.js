import React from 'react';
import { View, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { auth, db } from '../../../firebase';
import Caption from './PostFooter/Caption';
import CommentsSection, { Comments } from './PostFooter/Comments';
import Likes from './PostFooter/Likes';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';
import { collection, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const Post = ({ post }) => {
    const handleLike = post => {
        const currentLikeStatus = !post.likes_by_users.include(
            auth.currentUser?.email
        );

        const userpost = post.owner_email;
        const userpostid = post.id;
        const userRef = collection(db, "users");
        const useremaildoc = doc(userRef, userpost?.toString());
        const postRef = collection(db, "posts");
        const postdoc = doc(postRef, userpostid?.toString());
        updateDoc(postdoc, {
            likes_by_users: currentLikeStatus ? arrayUnion(auth.currentUser?.email) : arrayRemove(auth.currentUser?.email)
        }).then(() => {
            console.log('Document successfully updated!');
        }).catch(error => {
            console.error('Error updating document: ', error);
        });
    };

    return (
        <View style={{ marginBottom: 30, }}>
            <Divider style={{ borderBottomColor: '#585759' }} width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter post={post} handleLike={handleLike} />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    );
};

export default Post;
