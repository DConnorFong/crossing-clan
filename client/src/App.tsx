import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import 'bulma/css/bulma.min.css';
import './components/navbar/Navbar';

export interface AppState {
    account: {};
    isLoggedIn: boolean;
    navLogin: boolean;
    navMe: boolean;
    navSignup: boolean;
}

class App extends React.Component<{}, AppState> {
    state = {
        isLoggedIn: true,
        account: {},
        navLogin: false,
        navMe: false,
        navSignup: false,
    };

    render() {
        return (
            <Navbar
                isLoggedIn={this.state.isLoggedIn}
                account={this.state.account}
                toggleLogin={this.toggleLogin}
                toggleMe={this.toggleMe}
                toggleSignup={this.toggleSignup}
            />
        );
    }

    public toggleLogin() {
        alert('Toggle Login Pressed');
    }

    public toggleMe() {
        alert('Toggle Me Pressed');
    }

    public toggleSignup() {
        alert('Toggle Signup Pressed');
    }
}

export default App;
