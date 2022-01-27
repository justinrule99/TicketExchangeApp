import React from 'react';
import {Text, View} from "react-native";
import {styles} from "../styles/LoginStyles";
import StyledPressable from "./custom-ui/StyledPressable";

// INDIVIDUAL INFO ABOUT EACH EVENT - IN HOME CONTAINER STACK
const TicketsView = ({ route, navigation}) => {
    const {opponent} = route.params.event;

    const gotoCreate = () => {
        console.log('send info to create screen..')
        // need event object
        navigation.navigate('Create Ticket', {
            event: route.params.event
        });
    }

    // button to create new: redirect to form with opponent, seller already filled in
    return (
        <View style={styles.eventViewContainer}>
            <StyledPressable title={'Sell My Ticket'} onPress={gotoCreate} style={{marginTop: 10}} />
            <Text>{opponent}</Text>

        </View>
    )
}

export default TicketsView;