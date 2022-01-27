import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from "react-native";
import MyContext from "./MyContext";
import {styles} from "../styles/LoginStyles";
import {SearchBar} from "react-native-elements";
import EventCard from "./EventCard";
import axios from "axios";
import {NGROK_URL} from "../utils";
import {FlatList} from "react-native";
import moment from "moment";

// get tickets based on options
// list events first, then onclick, enter page that lists tickets
// get all events here, then map over and create an event card for each (flatlist)

// flatlist data is an array of objects

const HomeSignedIn = ({navigation}) => {

    const {appState, setAppState} = useContext(MyContext);
    const [search, setSearch] = useState('');
    const [events, setEvents] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const updateSearch = (searchVal) => {
        setSearch(searchVal);
        const lower = searchVal.toLowerCase().trim();

        const filteredEvents = events.filter((evt) => {
            return evt.opponent.toLowerCase().match(lower);
        });

        setSearchResults(filteredEvents.sort((a,b) => moment(a.date) - moment(b.date)));
    }

    let response;

    useEffect(() => {
        const fetchStuff = async () => {
            try {
                response = await axios.get(`${NGROK_URL}/events`);
                setEvents(response.data);
                setSearchResults(response.data.sort((a,b) => moment(a.date) - moment(b.date)));
            } catch (e) {
                console.log('the error:');
                console.log(e);
            }
        }

        fetchStuff();

    }, []);

    const renderItem = ({item}) => {
        return <EventCard event={item} navigation={navigation}/>
    }

    return (
        <View style={styles.eventViewContainer}>
            <SearchBar
                placeholder="Search"
                onChangeText={updateSearch}
                value={search}
                containerStyle={styles.searchBar}
                inputContainerStyle={styles.searchInputContainer}
                lightTheme={true}
            />

            <FlatList
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

export default HomeSignedIn;