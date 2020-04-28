import * as React from 'react';

export interface SignupProps {
    isActive: boolean;
    toggleSignup: Function;
}

const Signup: React.FunctionComponent<SignupProps> = (props) => {
    const renderModal = () => {
        return props.isActive ? 'modal is-active' : 'modal';
    };

    return (
        <div className={renderModal()}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <h1>Sign Up</h1>
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => {
                    props.toggleSignup();
                }}
            ></button>
        </div>
    );
};

export default Signup;
