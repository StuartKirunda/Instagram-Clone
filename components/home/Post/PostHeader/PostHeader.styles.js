import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    story: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',
    },

    postheader: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    postheaderText: {
        color: 'white',
        marginLeft: 5,
        fontWeight: '700',
    }
});

export default styles;