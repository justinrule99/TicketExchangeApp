import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 25
    },

    input: {
        height: 40,
        width: 250,
        margin: 12,
        padding: 10,
    },
    inputContainer: {
        alignItems: 'center',
        paddingTop: 20
    },
    searchBar: {
        backgroundColor: 'transparent',
    },
    searchInputContainer: {
        borderRadius: 20,
    },
    eventCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C8C8C8',
        borderRadius: 30,
        height: 100,
        alignItems: 'center',
        marginBottom: 15,
        padding: 15,
    },
    eventViewContainer: {
        marginHorizontal: 20,
        marginBottom: 55,
        alignSelf: 'stretch'
    },
    eventTextContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    eventText: {
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
});

