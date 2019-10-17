import React from 'react';
import { View, ScrollView } from 'react-native';
import { Switch, Route } from 'react-router-native';
import Header from '../Header';
import CharacterList from '../CharacterList';
import CharacterDetails from '../CharacterDetails';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        characters: [...state.characters]
    }
}

class MainCom extends React.Component {
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
        );
    }
}

const Main = connect(mapStateToProps)(MainCom);

export default Main;