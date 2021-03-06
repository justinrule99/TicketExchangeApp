import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import {createStackNavigator} from "@react-navigation/stack";
import HomeSignedIn from "./HomeSignedIn";
import TicketsView from "./TicketsView";
import CreateTicket from "./CreateTicket";

const Stack = createStackNavigator();

// can add more on stack: ex: login home, main page home
const HomeContainer = () => {


    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: '#F3C65F',
                    }
                }}
            />
            <Stack.Screen
                name="Events"
                component={HomeSignedIn}
                options={{
                    headerStyle: {
                        backgroundColor: '#F3C65F',
                    }
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerStyle: {
                        backgroundColor: '#F3C65F',
                    }
                }}
            />
            <Stack.Screen
                name="Tickets"
                component={TicketsView}
                options={{
                    headerStyle: {
                        backgroundColor: '#F3C65F',
                    }
                }}
            />
            <Stack.Screen
                name="Create Ticket"
                component={CreateTicket}
                options={{
                    headerStyle: {
                        backgroundColor: '#F3C65F',
                    }
                }}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}

export default HomeContainer;