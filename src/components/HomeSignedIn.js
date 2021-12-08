import React, {useContext, useState} from 'react';
import {Text, View} from "react-native";
import MyContext from "./MyContext";
import {styles} from "../styles/LoginStyles";
import {SearchBar} from "react-native-elements";
import EventCard from "./EventCard";
import axios from "axios";
import {NGROK_URL} from "../utils";

// get tickets based on options
// list events first, then onclick, enter page that lists tickets
// get all events here, then map over and create an event card for each (flatlist)

// flatlist data is an array of objects

const HomeSignedIn = async () => {

    const {appState, setAppState} = useContext(MyContext);
    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
        setSearch(search);
    }

    let response;

    // try {
    //     response = await axios.get(`${NGROK_URL}/events`);
    //
    // } catch (e) {
    //     // set error state on form
    //     console.log('the error:');
    //     console.log(e);
    // }

    // console.log(JSON.stringify(response.data, null, 2));

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search"
                onChangeText={updateSearch}
                value={search}
                containerStyle={styles.searchBar}
                inputContainerStyle={styles.searchInputContainer}
                lightTheme={true}
            />

            <Text>{'Home Signed In Page'}</Text>
            {/*<Text>{appState.num}</Text>*/}
            {/*<Text>{appState.user.email}</Text>*/}
            {/*<EventCard />*/}
            {/*<EventCard />*/}
        </View>
    );
}

export default HomeSignedIn;