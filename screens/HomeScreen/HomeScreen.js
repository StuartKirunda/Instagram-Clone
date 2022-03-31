import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import BottomTab, { bottomTabIcons } from '../../components/home/BottomTab/BottomTab';
import Header from '../../components/home/Header/Header';
import Post from '../../components/home/Post/Post';
import Stories from '../../components/home/Stories/Stories';
import { POSTS } from '../../data/posts';
import styles from './HomeScreen.styles';
import { collectionGroup, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from '../../firebase';


const HomeScreen = ({ navigation }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async () => {
            const posts = query(collectionGroup(db, 'posts'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(posts);
            setPosts(querySnapshot.forEach(post => ({ id: post.id, ...post.data() })));

        };

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {posts.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTab icons={bottomTabIcons} />
        </SafeAreaView>
    );
};



export default HomeScreen;
