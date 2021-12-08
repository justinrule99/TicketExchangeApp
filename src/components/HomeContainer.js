import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import {createStackNavigator} from "@react-navigation/stack";
import HomeSignedIn from "./HomeSignedIn";

const Stack = createStackNavigator();

// can add more on stack: ex: login home, main page home
const HomeContainer = () => {

    console.log('HOME CONTAINER ALIERT')

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Homepage" component={HomeSignedIn} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}

export default HomeContainer;