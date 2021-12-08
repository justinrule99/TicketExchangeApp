import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from "./Icon";
import IconUri from "./IconUri";


const MyTickets = ({navigation}) => {

    return (
        <SafeAreaView>
            <Text>{"My Tickets Screen"}</Text>
            <IconUri />
        </SafeAreaView>
    );
}


export default MyTickets;