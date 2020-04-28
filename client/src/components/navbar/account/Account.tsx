import * as React from 'react';

export interface AccountProps {
    account: {};
    toggleAccount: Function;
}

class Me extends React.Component<AccountProps, {}> {
    render() {
        return (
            <button
                className="button"
                onClick={() => {
                    this.props.toggleAccount();
                }}
            >
                Me
            </button>
        );
    }
}

export default Account;
