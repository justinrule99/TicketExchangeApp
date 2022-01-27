import React, {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import StyledText from "./custom-ui/StyledText";
import StyledPressable from "./custom-ui/StyledPressable";
import { useNavigation } from '@react-navigation/native';
import isuLogo from '../../assets/icons/tlogo.png';
import Login from './Login';
import SignUp from './SignUp';
import {styles} from "../styles/HomeStyles.js";


const Home = ({navigation}) => {
    const handleLogin = () => {
        console.log('login hereee');
        // don't navigate, just set state to show login prompt
        navigation.navigate('Login');
    }

    const handleSignUp = () => {
        // no navigate, just show login
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.headerContainer}>
                <Image
                    source={isuLogo}
                    style={{
                        width: 260,
                        height: 175
                    }}
                />
                <StyledText style={{color: 'black', fontSize: 48, fontWeight: 'bold' }}>{"Ticket Exchange"}</StyledText>
            </View>
            <View style={styles.buttonContainer}>
                <StyledPressable
                    title="Log In"
                    onPress={handleLogin}
                />
                <StyledPressable
                    title="Sign Up"
                    onPress={handleSignUp}
                />
            </View>

        </View>

    );
}

export default Home;