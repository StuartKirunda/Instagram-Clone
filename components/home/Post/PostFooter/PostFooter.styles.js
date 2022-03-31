import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footerIcon: {
        width: 33,
        height: 33,
        tintColor: 'white'
    },

    footerSaveIcon: {
        width: 33,
        height: 33,
        // tintColor: 'white'
    },

    footerIconComment: {
        width: 33,
        height: 33,
        tintColor: 'white',
        transform: [{ rotate: '275deg' }],
    },

    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    },

    // shareIcon: {
    //     transform: [{ rotate: '320deg' }],
    //     marginTop: -3,
    // }
});

export default styles;