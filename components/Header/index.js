import React from 'react';
import { View, Image } from 'react-native';
import Style from './style';

class Header extends React.Component {
    render() {
        return (
            <View style={Style.container}>
                <Image 
                    style={Style.logo}
                    source={require('../../assets/img/Rick_and_Morty.png')}
                />
            </View>
        );
    }
}

export default Header;