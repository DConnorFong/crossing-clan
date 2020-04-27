import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import 'bulma/css/bulma.min.css';
import './components/navbar/Navbar';

export interface AppState {
    isLoggedIn: boolean;
    account: {};
}

class App extends React.Component<{}, AppState> {
    state = {
        isLoggedIn: false,
        account: {},
    };

    render() {
        return (
            <Navbar
                isLoggedIn={this.state.isLoggedIn}
                account={this.state.account}
            />
        );
    }
}

export default App;
