import React from 'react';
import { View, Text } from 'react-native';

const CommentsSection = ({ post }) => {
    return (
        <View style={{ marginTop: 5 }}>
            {!!post.comments.length && (
                <Text style={{ color: 'gray' }}>
                    View{post.comments.length > 1 ? ' all' : ''}
                    {post.comments.length > 1 ? ' comments' : ' comment'}
                </Text>
            )}
        </View>
    );
};

export const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: '5' }}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}>{comment.user}</Text>{' '}{comment.comment}
                </Text>
            </View>
        ))}
    </>
);

export default CommentsSection;
