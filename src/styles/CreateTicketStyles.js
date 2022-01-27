import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    createTicketContainer: {
        margin: 20,
        height: '100%',
    },

    header: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20
    },

    gameInfoHeader: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#C8102E',
        textAlign: "center"
    },

    priceInputContainer: {
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        height: 40,
        fontWeight: "bold",
        fontSize: 18
    },

    inputLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#C8102E',
        paddingHorizontal: 5,
        paddingBottom: 5
    },

    formInputs: {
        paddingVertical: 20
    },

    ticketImage: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
        // borderColor: 'blue',
        // borderWidth: 2
    }
});