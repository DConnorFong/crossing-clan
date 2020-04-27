import * as React from 'react';
import './Navbar.scss';

export interface NavbarProps {
    isLoggedIn: boolean;
    account: {};
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

    renderMenu() {
        return this.props.isLoggedIn ? (
            <span>Logged In</span>
        ) : (
            <span>Not Logged In</span>
        );
    }
}

export default Navbar;
