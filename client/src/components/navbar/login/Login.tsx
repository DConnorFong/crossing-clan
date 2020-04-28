import * as React from 'react';

export interface LoginProps {
    toggleLogin: Function;
}

const Login: React.FunctionComponent<LoginProps> = (props) => {
    return (
        <button
            className="button"
            onClick={() => {
                props.toggleLogin();
            }}
        >
            Login
        </button>
    );
};

export default Login;
