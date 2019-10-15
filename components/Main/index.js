import React from 'react';
import { View, Text , ScrollView } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Header from '../Header';
import CharacterList from '../CharacterList';
import CharacterDetails from '../CharacterDetails';

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
            this.setState({characters: data.results});
        });
    }

    render() {
        return (
            <NativeRouter>
                <View>
                    <Header/>
                    <ScrollView>
                        <Switch>
                            <Route 
                                exact 
                                path="/" 
                                render={() => <CharacterList characters={this.state.characters}/>}
                            />
                            <Route 
                                exact 
                                path="/character/:id" 
                                component={CharacterDetails}
                            />
                        </Switch>
                    </ScrollView>
                </View>
            </NativeRouter>
        );
    }
}

export default Main;