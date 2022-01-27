import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from "react-native";
import {styles} from "../styles/CreateTicketStyles";
import StyledPressable from "./custom-ui/StyledPressable";
import moment from "moment";
import {Input} from "react-native-elements";
import {TextInput} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import jsQR from "jsqr";
import {PNG} from "pngjs/browser";
import { Buffer } from "buffer"
// import * as FileSystem from 'expo-file-system';
// import {Base64} from "js-base64";

const CreateTicket = ({route, navigation}) => {
    const {event} = route.params;

    let [price, setPrice] = useState('');
    let [image, setImage] = useState({});
    let [canSubmit, setCanSubmit] = useState(false);
    let [isLoading, setIsLoading] = useState(false);
    let [isValidTicket, setIsValidTicket] = useState(true);
    let [phone, setPhone] = useState('');
    let [venmo, setVenmo] = useState('');


    console.log(route.params.event);
    const formattedDateTime = moment(event.date).format('lll');


    // redirect to 'my tickets' main page
    const submitTicket = () => {
        console.log('submititn..')
        console.log(price)
    }

    // need to get a smaller image
    const chooseImage = async () => {
        setIsLoading(true);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: true,
            allowsEditing: true,
            aspect: [4, 3],
            quality: .5,
        });

        // want result.base64
        if (!result.cancelled) {
            setImage(result);
        }

        const dataUri = `data:image/png;base64,${result.base64}`;
        let png;
        let qrCode;
        // console.log(dataUri);
        console.log('image size: ');
        console.log(result.height);
        console.log(result.width);

        try {
            png = PNG.sync.read(Buffer.from(dataUri.slice('data:image/png;base64,'.length), 'base64'));
            qrCode = jsQR(Uint8ClampedArray.from(png.data), png.width, png.height);
        } catch (err) {
            console.log('error: ');
            console.log(err)
        }

        setIsValidTicket(qrCode);
        setCanSubmit(true);
        setIsLoading(false);
        console.log('DONE LOADING')
    }

    useEffect(() => {
        console.log('isloaidng here: '+isLoading);
    }, [isLoading]);

    return (
        <View style={styles.createTicketContainer}>
            <Text style={styles.header}>{`Sell My Ticket`}</Text>
            <Text style={styles.gameInfoHeader}>{`Iowa State vs ${event.opponent}`}</Text>
            <Text style={{textAlign: "center"}}>{formattedDateTime}</Text>

            <View style={styles.formInputs}>
                <Text style={styles.inputLabel}>{'Price'}</Text>
                <TextInput
                    value={price}
                    style={styles.priceInputContainer}
                    onChangeText={value => setPrice(value)}
                    autoCorrect={false}
                    returnKeyType={'done'}
                    keyboardType={'decimal-pad'}
                />
                <Text style={styles.inputLabel}>{'Venmo'}</Text>
                <TextInput
                    value={venmo}
                    style={styles.priceInputContainer}
                    onChangeText={value => setVenmo(value)}
                    autoCorrect={false}
                    returnKeyType={'done'}
                    autoCapitalize={"none"}
                />
                <Text style={styles.inputLabel}>{'Phone'}</Text>
                <TextInput
                    value={phone}
                    style={styles.priceInputContainer}
                    onChangeText={value => setPhone(value)}
                    autoCorrect={false}
                    returnKeyType={'done'}
                    keyboardType={'decimal-pad'}
                />
                {!canSubmit  ? <StyledPressable title={'Upload Ticket'} onPress={chooseImage} /> : null }
                <View style={styles.ticketImage}>
                    {isLoading ?
                        <>
                            <Text style={{marginVertical: 10}}>{'Hang Tight - We\'re verifying your ticket'}</Text>
                            <ActivityIndicator size="large" />
                        </>
                    :
                        isValidTicket ?
                            <Image
                                source={{ uri: 'data:image/jpeg;base64,' + image.base64 }}
                                style={{ width: 200, height: '100%', borderRadius: 20 }}
                            />
                        :
                            <Text>{'Error: Not a valid ticket'}</Text>
                    }

                </View>
            </View>

            {/*<Text>{`Submitting this form does not guarantee a sale - it only posts your ticket for others to see. A buyer will contact you via text or Venmo.`}</Text>*/}
            <StyledPressable title={'Submit'} onPress={submitTicket} />

        </View>
    )
}

export default CreateTicket;