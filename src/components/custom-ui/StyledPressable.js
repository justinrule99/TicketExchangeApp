import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';


const CustomButton = (props) => {
    const { onPress, title = 'Save', style} = props;
    return (
        <Pressable
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 40,
                elevation: 3,
                backgroundColor: '#C8102E',
                height: 60,
                marginBottom: 20,
                ...style
            }}
            onPress={onPress}
        >
            <Text style={{
                    fontSize: 24,
                    lineHeight: 36,
                    fontWeight: 'bold',
                    letterSpacing: 0.25,
                    color: 'white'
                }}
            >
                {title}
            </Text>
        </Pressable>
    );
}

export default CustomButton;