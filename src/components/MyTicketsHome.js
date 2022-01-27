import React from 'react';
import {SafeAreaView, Text} from "react-native";
import StyledPressable from "./custom-ui/StyledPressable";


const MyTicketsHome = ({navigation}) => {

    // go to ticket list screen
    const gotoEventsSelect = () => {
        navigation.navigate('Events');
    }

    // should list info about all tickets being sold by user
    // include view count?
    return (
        <SafeAreaView>
            <StyledPressable title={'I want to sell my Ticket!'} onPress={gotoEventsSelect} />
        </SafeAreaView>
    )
}

export default MyTicketsHome;