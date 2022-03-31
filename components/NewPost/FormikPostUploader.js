import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Divider } from 'react-native-elements';
import validUrl from 'valid-url';
import { auth, db, firebase } from '../../firebase';
import { collection, getDocs, query, where, limit, doc, addDoc, serverTimestamp } from "firebase/firestore";


const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1536321115970-5dfa13356211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60';

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached maximum character number')
});

const FormikPostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMAGE);
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

    const getUsername = async () => {
        const user = auth.currentUser;
        const collectionRef = collection(db, "users");
        const unsubscribe = query(collectionRef, where('owner_uid', '==', user?.uid), limit(1));
        const querySnapshot = await getDocs(unsubscribe);
        querySnapshot.forEach((doc) => {
            setCurrentLoggedInUser({
                username: doc.data().username,
                profilePicture: doc.data().profile_picture
            });
        });
        return unsubscribe;
    };

    useEffect(() => {
        getUsername();
    });

    const uploadPostToFirebase = (imageUrl, caption) => {
        const useremail = auth.currentUser?.email;
        const collectionRef = collection(db, "users");
        const postsRef = collection(db, "posts");
        const unsubscribe = doc(collectionRef, useremail?.toString());
        addDoc(postsRef, {
            imageUrl: imageUrl,
            user: currentLoggedInUser?.username,
            profile_picture: currentLoggedInUser?.profilePicture,
            owner_uid: auth.currentUser?.uid,
            owner_email: auth.currentUser?.email,
            caption: caption,
            createdAt: serverTimestamp(),
            likes_by_users: [],
            comments: [],

        }).then(() => navigation.goBack());
        return unsubscribe;
    };

    return (
        <Formik initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => { uploadPostToFirebase(values.imageUrl, values.caption); }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Image
                            source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMAGE }}
                            style={{ width: 100, height: 100 }}
                        />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                style={{ color: 'white', fontSize: 18 }}
                                placeholder='Write a caption' placeholderTextColor={'gray'}
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>

                    </View>
                    <Divider style={{ borderBottomColor: '#585759' }} width={0.2} orientation='vertical' />
                    <TextInput
                        style={{ color: 'white', fontSize: 18 }}
                        placeholder='Enter Image'
                        placeholderTextColor={'gray'}
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.imageUrl}</Text>
                    )}
                    <Button onPress={() => handleSubmit} title='Share' disabled={!isValid} />
                </>
            )}

        </Formik>
    );
};

export default FormikPostUploader;
