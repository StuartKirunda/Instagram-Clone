import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1548783307-f63adc3f200b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        user: USERS[0].user,
        likes: 5344,
        caption: 'At the center of it all',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'Alex',
                comment: 'Wow! so cool'
            },
            {
                user: 'Mason',
                comment: 'Inspirational!!'
            },
        ],
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1522850403397-b0c8f2f75451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
        user: USERS[1].user,
        likes: 4433,
        caption: '',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'Alex',
                comment: 'Wow! so cool'
            },
            {
                user: 'Mason',
                comment: 'Inspirational!!'
            },
        ],
    },
];