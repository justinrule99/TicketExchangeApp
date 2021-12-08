import React from 'react';
import {Button, Text} from 'react-native';
import {
    useFonts,
    Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';

const StyledButton = (props) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    });

    if (!fontsLoaded) return null;

    return (
        <Button
            style={{
                fontFamily: 'Montserrat_400Regular',
                fontSize: 24,
                ...props.style
            }}
            {...props}
        >
            {props.children}
        </Button>
    )
};

export default StyledButton;