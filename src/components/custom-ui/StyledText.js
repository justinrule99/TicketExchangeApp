import React from 'react';
import {Text} from 'react-native';
import {
    useFonts,
    Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';


const StyledText = ({children, style}) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    });

    if (!fontsLoaded) return null;

    return (
        <Text
            style={{
                fontFamily: 'Montserrat_400Regular',
                fontSize: 16,
                ...style
            }}
        >
            {children}
        </Text>
    )

};

export default StyledText;