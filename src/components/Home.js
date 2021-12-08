import React, {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import { SearchBar } from 'react-native-elements';
import styled from 'styled-components'
import StyledText from "./custom-ui/StyledText";
import StyledButton from "./custom-ui/StyledButton";
import StyledPressable from "./custom-ui/StyledPressable";
import { useNavigation } from '@react-navigation/native';
import isuLogo from '../../assets/icons/tlogo.png';
import Login from './Login';
import SignUp from './SignUp';

const MainView = styled.SafeAreaView`
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #F3C65F;
`;

const HeaderContainer = styled.View`
    align-items: center;
    margin-top: 100px;
    margin-bottom: 70px;
`

const ButtonContainer = styled.View`
    width: 75%;
`


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
        <MainView>
            <HeaderContainer>
                <Image
                    source={isuLogo}
                    style={{
                        width: 260,
                        height: 175
                    }}
                />
                <StyledText style={{color: 'black', fontSize: 48, fontWeight: 'bold' }}>{"Ticket Exchange"}</StyledText>
            </HeaderContainer>
            <ButtonContainer>
                <StyledPressable
                    title="Log In"
                    onPress={handleLogin}
                />
                <StyledPressable
                    title="Sign Up"
                    onPress={handleSignUp}
                />
            </ButtonContainer>

        </MainView>

    );
}

export default Home;