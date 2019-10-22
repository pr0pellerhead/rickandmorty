import React from 'react';
import { View, ScrollView } from 'react-native';
import { Switch, Route } from 'react-router-native';
import Header from '../Header';
import CharacterList from '../CharacterList';
import CharacterDetails from '../CharacterDetails';
import { connect } from 'react-redux';
import {fetchCharacters} from '../../actions'

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => {
            dispatch(fetchCharacters());
        }
    }
}

class MainCom extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchCharacters();
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
                            render={() => <CharacterList characters={this.props.characters}/>}
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

const Main = connect(mapStateToProps, mapDispatchToProps)(MainCom);

export default Main;