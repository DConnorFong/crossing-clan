import * as React from 'react';

export interface LoginModalProps {
    isActive: boolean;
    toggleLogin: Function;
}

const LoginModal: React.FunctionComponent<LoginModalProps> = (props) => {
    const renderModal = () => {
        return props.isActive ? 'modal is-active' : 'modal';
    };

    return (
        <div className={renderModal()}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <h1>Login</h1>
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => {
                    props.toggleLogin();
                }}
            ></button>
        </div>
    );
};

export default LoginModal;
