import React from 'react';
import {styles} from "../styles/LoginStyles";
import {Image, Text, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import basketball from "../../assets/bball.png";
import football from "../../assets/football.svg";
import moment from "moment";


// want to make one tickets page, prop with event determines query
const EventCard = ({event, navigation}) => {

    const formattedDateTime = moment(event.date).format('lll');

    const handlePress = () => {
        navigation.navigate('Tickets', {
            event
        });
    }

    return (
        <Pressable style={styles.eventCard} onPress={handlePress}>
            <View style={styles.eventTextContainer}>
                <Text style={styles.eventText}>{`${event.opponent}`}</Text>
                <Text>{formattedDateTime}</Text>
                <Text>{event.sport === 'Football' ? 'Jack Trice Stadium' : 'Hilton Coliseum'}</Text>
            </View>
            <Image
                source={event.sport === 'Football' ? football : basketball}
                style={{
                    width: 50,
                    height: 50
                }}
            />
        </Pressable>
    );
}

export default EventCard;