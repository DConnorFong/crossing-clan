import * as React from 'react';

export interface SignupModalProps {
    isActive: boolean;
    toggleSignup: Function;
}

export interface SignupModalState {
    email: string;
    password: string;
    passwordVerification: string;
    acName: string;
    acIsland: string;
    key: string;
}

class SignupModal extends React.Component<SignupModalProps, SignupModalState> {
    state = {
        email: '',
        password: '',
        passwordVerification: '',
        acName: '',
        acIsland: '',
        key: '',
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
                                this.props.toggleSignup();
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
                        <input
                            className="input is-rounded"
                            value={this.state.passwordVerification}
                            type="password"
                            placeholder="Re-Enter Password"
                            onChange={this.handlePasswordVerificationUpdate}
                        />
                        <input
                            className="input is-rounded"
                            value={this.state.acName}
                            type="text"
                            placeholder="In Game Name"
                            onChange={this.handleAcNameUpdate}
                        />
                        <input
                            className="input is-rounded"
                            value={this.state.acIsland}
                            type="text"
                            placeholder="In Game Island"
                            onChange={this.handleAcIslandUpdate}
                        />
                        <button
                            className="button"
                            onClick={() => {
                                this.submitSignup();
                            }}
                        >
                            Sign Up
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

    private handlePasswordVerificationUpdate = (event: any) => {
        this.setState({ passwordVerification: event.target.value });
    };

    private handleAcNameUpdate = (event: any) => {
        this.setState({ acName: event.target.value });
    };

    private handleAcIslandUpdate = (event: any) => {
        this.setState({ acIsland: event.target.value });
    };

    private submitSignup = () => {
        // TODO: implement server logic

        // reload the page
        window.location.reload(false);
    };
}

export default SignupModal;
