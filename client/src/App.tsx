import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import 'bulma/css/bulma.min.css';
import './components/navbar/Navbar';

export interface AppState {
    account: {};
    isLoggedIn: boolean;
    modalLogin: boolean;
    modalMe: boolean;
    modalSignup: boolean;
}

class App extends React.Component<{}, AppState> {
    state = {
        isLoggedIn: true,
        account: {},
        modalLogin: false,
        modalMe: false,
        modalSignup: false,
    };

    render() {
        return (
            <Navbar
                isLoggedIn={this.state.isLoggedIn}
                account={this.state.account}
                toggleLogin={this.toggleLogin}
                toggleAccount={this.toggleAccount}
                toggleSignup={this.toggleSignup}
            />
        );
    }

    public toggleLogin() {
        alert('Toggle Login Pressed');
    }

    public toggleAccount() {
        alert('Toggle Account Pressed');
    }

    public toggleSignup() {
        alert('Toggle Signup Pressed');
    }
}

export default App;
