import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import { Input, Button } from 'react-native-elements';
import isuLogo from "../../assets/icons/tlogo.png";
import {styles} from "../styles/LoginStyles";
import MyContext from "./MyContext";
import StyledPressable from "./custom-ui/StyledPressable";
import axios from "axios";
import {NGROK_URL} from "../utils";
import {CommonActions} from "@react-navigation/native";

// after success, redirect to HomeSignedIn
const SignUp = ({navigation}) => {

    const {appState, setAppState} = useContext(MyContext);
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');

    let [error, setError] = useState('');

    const submitForm = async () => {
        // send post to /users to sign up
        // will add security later
        let response;

        if (!email || !email.includes('@')) {
            setError('Error: Valid email required');
            return;
        }

        if (!password || !confirmPassword) {
            setError('Error: Password required');
            return;
        }

        if (password !== confirmPassword) {
            setError('Error: Passwords do not match');
            return;
        }

        try {
            response = await axios.post(`${NGROK_URL}/users`, {
                email,
                password
            });

            setAppState({
                ...appState,
                signedIn: true,
                user: {
                    email: email
                }
            });

            // this resets the stack to Homepage, removes login screen
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{name: 'Events'}]
            }));

        } catch (e) {
            console.log('the error:');
            console.log(e);
        }
    }


    return (
        <View style={styles.container} >
            <Image
                source={isuLogo}
                style={{
                    width: 150,
                    height: 100,
                }}
            />

            <View style={styles.inputContainer}>
                <Input
                    placeholder='Email'
                    inputContainerStyle={styles.input}
                    onChangeText={value => setEmail(value)}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    autoCapitalize={"none"}
                />
                <Input
                    placeholder='Password'
                    inputContainerStyle={styles.input}
                    secureTextEntry={true}
                    onChangeText={(value) => {
                        setPassword(value);
                        setError('');
                    }}
                    returnKeyType={'done'}
                />
                <Input
                    placeholder='Confirm Password'
                    inputContainerStyle={styles.input}
                    secureTextEntry={true}
                    onChangeText={(value) => {
                        setConfirmPassword(value);
                        setError('');
                    }}
                    returnKeyType={'done'}
                />
                <Text style={{paddingBottom: 20, color: '#C8102E'}}>{error || ''}</Text>
                <StyledPressable title={'Sign Up'} onPress={submitForm} />
            </View>

        </View>
    );
}

export default SignUp;