import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderBottomColor: '#ededed',
        borderBottomWidth: 1,
    },
    logo: {
        height: 40,
        width: 160,
    }
});

export default Style;