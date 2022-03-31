import React from 'react';
import { View, Text, TextInput, Button, Pressable, TouchableOpacity, Alert } from 'react-native';
import { styles } from './SignupForm.styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection } from "firebase/firestore";
import { auth, db } from '../../firebase';

const SignupForm = ({ navigation }) => {

    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(8, 'Your password should have at least 8 characters')
    });

    const getRandomProfilePicture = async () => {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        return data.results[0].picture.large;
    };

    const onSignup = async (email, password, username) => {

        try {
            await createUserWithEmailAndPassword(auth, email, password).then(async (authUser) => {
                const collectionRef = collection(db, "users");
                const emailid = authUser.user.email;
                const ref = doc(collectionRef, emailid?.toString());

                await setDoc(ref, {
                    owner_uid: authUser.user.uid,
                    username: username,
                    email: authUser.user.email,
                    profile_picture: await getRandomProfilePicture(),
                });
                console.log('User created successfully');
            });

        } catch (error) {
            const errorCode = error.code;
            Alert.alert(
                'Oh Oh',
                error.message);
        }
    };

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                onSubmit={values => {
                    onSignup(values.email, values.password, values.username);
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField,
                        { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red' }]}>
                            <TextInput
                                placeholderTextColor={'#444'}
                                placeholder='email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField,
                        { borderColor: 1 > values.username.length || values.username.length >= 2 ? '#ccc' : 'red' }]}>
                            <TextInput
                                placeholderTextColor={'#444'}
                                placeholder='Username'
                                autoCapitalize='none'
                                textContentType='username'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>
                        <View style={[styles.inputField,
                        { borderColor: 1 > values.password.length || values.password.length ? '#ccc' : 'red' }]}>
                            <TextInput
                                placeholderTextColor={'#444'}
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        <TouchableOpacity style={styles.buttonIsValid} onPress={() => handleSubmit} disabled={!isValid}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>

                        <View style={styles.loginContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: '#6BB0F5' }}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View >
    );
};

export default SignupForm;
