import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import { Input, Button } from 'react-native-elements';
import isuLogo from "../../assets/icons/tlogo.png";
import {styles} from "../styles/LoginStyles";


const SignUp = () => {

    return (
        <View style={styles.container} >
            <Image
                source={isuLogo}
                style={{
                    width: 150,
                    height: 100,
                }}
            />

        </View>
    );
}

export default SignUp;