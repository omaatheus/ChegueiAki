import { StyleSheet } from "react-native";

export const participantStyles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
    },
    button: {
        backgroundColor: '#E23C44',
        borderRadius: 10,
        height: 56,
        width: 56,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})