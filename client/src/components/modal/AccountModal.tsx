import * as React from 'react';

export interface AccountModalProps {
    isActive: boolean;
    toggleMe: Function;
}

const AccountModal: React.FunctionComponent<AccountModalProps> = (props) => {
    const renderModal = () => {
        return props.isActive ? 'modal is-active' : 'modal';
    };

    return (
        <div className={renderModal()}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <h1>Account</h1>
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => {
                    props.toggleMe();
                }}
            ></button>
        </div>
    );
};

export default AccountModal;
