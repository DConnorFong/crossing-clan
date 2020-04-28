import * as React from 'react';
import Login from './login/Login';
import Me from './me/Me';
import Signup from './signup/Signup';
import './Navbar.scss';

export interface NavbarProps {
    account: {};
    isLoggedIn: boolean;
    toggleLogin: Function;
    toggleMe: Function;
    toggleSignup: Function;
}

class Navbar extends React.Component<NavbarProps, {}> {
    render() {
        return (
            <div
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <span className="logo">Crossing Clan</span>
                    <a
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">{this.renderMenu()}</div>
                </div>
            </div>
        );
    }

    private renderMenu() {
        return this.props.isLoggedIn ? (
            <Me account={this.props.account} toggleMe={this.props.toggleMe} />
        ) : (
            <React.Fragment>
                <Login toggleLogin={this.props.toggleLogin} />
                <Signup toggleSignup={this.props.toggleSignup} />
            </React.Fragment>
        );
    }
}

export default Navbar;
