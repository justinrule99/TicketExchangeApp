import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import { Input, Button } from 'react-native-elements';
import isuLogo from "../../assets/icons/tlogo.png";
import StyledPressable from "./custom-ui/StyledPressable";
import axios from "axios";
import {NGROK_URL} from "../utils";
import {styles} from "../styles/LoginStyles";
import {CommonActions, StackActions} from "@react-navigation/native";
import MyContext from "./MyContext";


// based on state, onclick just send username and password. no fancy form logic needed

// could save text in state, but causes re-renders every letter
// input hidden when keyboard shows up

const Login = ({navigation}) => {

    const {appState, setAppState} = useContext(MyContext);


    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [error, setError] = useState('');

    const submitForm = async () => {
        // make backend call with state
        let response;

        try {
            response = await axios.post(`${NGROK_URL}/login`, {
                email,
                password
            });

            // need to set entire app state and save on close
            setAppState({
                ...appState,
                signedIn: true,
                user: {
                    email: response.data.email,
                    id: response.data.id
                }
            });

            // this resets the stack to Homepage, removes login screen
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{name: 'Events'}]
            }));

        } catch (e) {
            // set error state on form
            console.log('the error:');
            console.log(e);
            setError('Error: Invalid Email or Password');
        }
    }

    return (
        <View style={styles.container}>
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
                <Text style={{paddingBottom: 20, color: '#C8102E'}}>{error || ''}</Text>
                <StyledPressable title={'Log In'} onPress={submitForm} />
            </View>

        </View>

    )
}

export default Login;