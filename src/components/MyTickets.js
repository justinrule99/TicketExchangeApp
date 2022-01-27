import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from "./Icon";
import IconUri from "./IconUri";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import HomeSignedIn from "./HomeSignedIn";
import Login from "./Login";
import TicketsView from "./TicketsView";
import SignUp from "./SignUp";
import MyTicketsHome from "./MyTicketsHome";
import CreateTicket from "./CreateTicket";

// should be base for a stack
const Stack = createStackNavigator();


const MyTickets = ({navigation}) => {

    return (
        <Stack.Navigator initialRouteName="MyTicketsHome">
            <Stack.Screen
                name="Tickets"
                component={MyTicketsHome}
                options={{
                    headerStyle: {
                        backgroundColor: '#F3C65F',
                    }
                }}
            />

        </Stack.Navigator>
    );
}


export default MyTickets;