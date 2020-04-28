import * as React from 'react';

export interface MeProps {
    account: {};
    toggleMe: Function;
}

class Me extends React.Component<MeProps, {}> {
    render() {
        return (
            <button
                className="button"
                onClick={() => {
                    this.props.toggleMe();
                }}
            >
                Me
            </button>
        );
    }
}

export default Me;
