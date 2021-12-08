import React, {useContext} from 'react';
import {Text} from "react-native";
import MyContext from "./MyContext";


const HomeSignedIn = () => {

    const {appState, setAppState} = useContext(MyContext);

    return (
        <>
            <Text>{'Home Signed In Page'}</Text>
            <Text>{appState.num}</Text>
            <Text>{appState.user.email}</Text>
        </>
    );
}

export default HomeSignedIn;