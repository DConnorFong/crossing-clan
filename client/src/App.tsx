import React from 'react';
import Navbar from './components/navbar/Navbar';
import AccountModal from './components/modal/AccountModal';
import LoginModal from './components/modal/LoginModal';
import SignupModal from './components/modal/SignupModal';
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
        account: {},
        isLoggedIn: false,
        modalLogin: false,
        modalMe: false,
        modalSignup: false,
    };

    constructor(props: any) {
        super(props);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleMe = this.toggleMe.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <AccountModal
                    isActive={this.state.modalMe}
                    toggleMe={this.toggleMe}
                />
                <LoginModal
                    isActive={this.state.modalLogin}
                    toggleLogin={this.toggleLogin}
                />
                <SignupModal
                    isActive={this.state.modalSignup}
                    toggleSignup={this.toggleSignup}
                />
                <Navbar
                    isLoggedIn={this.state.isLoggedIn}
                    account={this.state.account}
                    toggleLogin={this.toggleLogin}
                    toggleMe={this.toggleMe}
                    toggleSignup={this.toggleSignup}
                />
            </React.Fragment>
        );
    }

    public toggleLogin() {
        const currState = this.state.modalLogin;
        this.setState({ modalLogin: !currState });
    }

    public toggleMe() {
        const currState = this.state.modalMe;
        this.setState({ modalMe: !currState });
    }

    public toggleSignup() {
        const currState = this.state.modalSignup;
        this.setState({ modalSignup: !currState });
    }
}

export default App;
