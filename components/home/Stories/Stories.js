import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { USERS } from '../../../data/users';
import styles from './Stories.styles';


const Stories = () => {
    return (
        <View style={{ marginBottom: 13, }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: 'center' }}>
                        <Image source={{ uri: story.image }} style={styles.story} />
                        <Text style={{ color: 'white' }}>
                            {story.user.length > 11
                                ? story.user.slice(0, 6).toLowerCase() + '...'
                                : story.user.toLowerCase()}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Stories;
