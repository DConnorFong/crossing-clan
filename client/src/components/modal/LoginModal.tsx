import * as React from 'react';

export interface LoginModalProps {
    isActive: boolean;
    toggleLogin: Function;
}

export interface LoginModalState {
    email: string;
    password: string;
}

class LoginModal extends React.Component<LoginModalProps, LoginModalState> {
    state = {
        email: '',
        password: '',
    };

    render() {
        return (
            <div className={this.renderModal()}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Login</p>
                        <button
                            className="delete"
                            aria-label="close"
                            onClick={() => {
                                this.props.toggleLogin();
                            }}
                        ></button>
                    </header>
                    <section className="modal-card-body">
                        <input
                            className="input is-rounded"
                            value={this.state.email}
                            type="email"
                            placeholder="Email"
                            onChange={this.handleEmailUpdate}
                        />
                        <input
                            className="input is-rounded"
                            value={this.state.password}
                            type="password"
                            placeholder="Password"
                            onChange={this.handlePasswordUpdate}
                        />
                        <button
                            className="button"
                            onClick={() => {
                                this.submitLogin();
                            }}
                        >
                            Login
                        </button>
                    </section>
                </div>
            </div>
        );
    }

    private renderModal = () => {
        return this.props.isActive ? 'modal is-active' : 'modal';
    };

    private handleEmailUpdate = (event: any) => {
        this.setState({ email: event.target.value });
    };

    private handlePasswordUpdate = (event: any) => {
        this.setState({ password: event.target.value });
    };

    private submitLogin = () => {
        // TODO: implement server logic
    };
}

export default LoginModal;
