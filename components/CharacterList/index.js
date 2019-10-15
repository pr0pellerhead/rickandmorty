import React from 'react';
import { View, Text, Image } from 'react-native';
import Style from './style';
import { Link } from 'react-router-native';

class CharacterList extends React.Component {
    render() {
        return (
            this.props.characters.map((c, i) => <CharacterListItem key={c.id} data={c}/>)
        );
    }
}

class CharacterListItem extends React.Component {
    render() {
        var character = this.props.data; 
        return (
            <Link to={`/character/${character.id}`}>
                <View style={Style.card}>
                    <Image 
                        style={Style.image}
                        source={{uri: character.image}}
                    />
                    <Text style={Style.name}>{character.name}</Text>
                    <Text style={Style.status}>{character.status}</Text>
                </View>
            </Link>
        );
    }
}

export default CharacterList;