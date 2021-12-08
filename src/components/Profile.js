import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {red} from "react-native-reanimated/src/reanimated2/Colors";

// will have a separate navigation stack

const Profile = ({navigation}) => {

    return (
        <SafeAreaView>
            <Text>{"Profile Screen"}</Text>
        </SafeAreaView>
    );
}


export default Profile;