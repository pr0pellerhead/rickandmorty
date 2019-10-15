import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

class BackButton extends React.Component {
    render() {
        return (
            <Link to={this.props.to}>
                <Image source={{require:(`../../assets/img/icons/${icon}.png`)}}/>
                <Text>{this.props.label}</Text>
            </Link>
        );
    }
}

export default BackButton;