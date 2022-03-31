import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        wrapper: {
            position: 'absolute',
            width: '100%',
            bottom: '1%',
            zIndex: 999,
            backgroundColor: '#000',
        },

        container: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 50,
            paddingTop: 10,
        },

        icon: {
            width: 30,
            height: 30,
            tintColor: 'white'
        },

        profilePicActive: {
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#fff',
            tintColor: 'none'
        },

        profilePicInactive: {
            borderRadius: 50,
            borderWidth: 0,
            borderColor: '#fff',
            tintColor: 'none'
        },
    }
);

