import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    card: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 3,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 300,
    },
    name: {
        color: 'rgb(17, 176, 200)',
        fontSize: 24,
        marginTop: 10,
    },
    status: {
        color: 'grey',
        textTransform: 'uppercase'
    }
});

export default Style;