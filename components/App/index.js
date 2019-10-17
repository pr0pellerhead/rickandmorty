import React from 'react';
import Main from '../Main';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import store from '../../store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NativeRouter>
                    <Main/>
                </NativeRouter>
            </Provider>
        );
    }
}

export default App;
