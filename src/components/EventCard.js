import React from 'react';
import {styles} from "../styles/LoginStyles";
import {Text, View} from "react-native";


const EventCard = () => {
    return (
        <View style={styles.eventCard}>
            <Text>{'some event'}</Text>
        </View>
    );

}

export default EventCard;