import React from 'react';
import { View, Text , ScrollView } from 'react-native';
import Header from '../Header';
import CharacterList from '../CharacterList';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            characters: [],
        };
    }

    componentDidMount() {
        fetch(
            'https://rickandmortyapi.com/api/character/',
            {method: 'get'}
        )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({characters: data.results});
        });
    }

    render() {
        return (
            <View>
                <Header/>
                <ScrollView>
                    <CharacterList characters={this.state.characters}/>
                </ScrollView>
            </View>
        );
    }
}

export default Main;