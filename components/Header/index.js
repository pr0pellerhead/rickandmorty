import React from 'react';
import { View, Image } from 'react-native';
import Style from './style';
import { Link } from 'react-router-native';

class Header extends React.Component {
    render() {
        return (
            <View style={Style.container}>
                <Link to="/">
                    <Image 
                        style={Style.logo}
                        source={require('../../assets/img/Rick_and_Morty.png')}
                    />
                </Link>
            </View>
        );
    }
}

export default Header;