import React from 'react';
import { View, Text, TextInput, Alert, Pressable, TouchableOpacity } from 'react-native';
import { styles } from './LoginForm.styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { auth } from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = ({ navigation }) => {

    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(8, 'Your password should have at least 8 characters')
    });

    const onLogin = async (email, password) => {

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            Alert.alert(
                'Oh Oh',
                error.message + '\n\n... What would you like to do next?',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK'),
                        style: 'cancel',
                    },
                    {
                        text: 'Sign Up',
                        onPress: () => navigation.push('SignupScreen')
                    }
                ]
            );
        }
    };

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => {
                    onLogin(values.email, values.password);
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField,
                        { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red' }]}>
                            <TextInput
                                placeholderTextColor={'#444'}
                                placeholder='Phone number, username or email'
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
                        { borderColor: 1 > values.password.length || values.password.length >= 8 ? '#ccc' : 'red' }]}>
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

                        <View style={{ alignItems: 'flex-end', marginBottom: 30, }}>
                            <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
                        </View>

                        <Pressable style={styles.buttonIsValid} onPress={() => handleSubmit} disabled={!isValid}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>

                        <View style={styles.signUpContainer}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                                <Text style={{ color: '#6BB0F5' }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View >
    );
};

export default LoginForm;
