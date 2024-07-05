import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    input: {
        backgroundColor: '#1F1B24',
        borderRadius: 10,
        color: '#FDFCFE',
        fontSize: 16,
        height: 56,
        padding: 16,
        flex: 1,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#FDFCFE',
        borderRadius: 10,
        height: 56,
        width: 56,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#131016',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 42,
    },
    listEmptyText: {
        color: '#FDFCFE',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
  });

export default mainStyles;