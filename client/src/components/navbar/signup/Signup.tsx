import * as React from 'react';

export interface SignupProps {
    toggleSignup: Function;
}

const Signup: React.SFC<SignupProps> = (props) => {
    return (
        <button
            className="button"
            onClick={() => {
                props.toggleSignup();
            }}
        >
            Sign Up
        </button>
    );
};

export default Signup;
