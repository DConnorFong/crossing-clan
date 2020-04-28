import * as React from 'react';
import Account from '../../interfaces/Account';

export interface AccountModalProps {
    isActive: boolean;
    toggleMe: Function;
    account: Account;
}

const AccountModal: React.FunctionComponent<AccountModalProps> = (props) => {
    const renderModal = () => {
        return props.isActive ? 'modal is-active' : 'modal';
    };

    return (
        <div className={renderModal()}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">My Account</p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={() => {
                            props.toggleMe();
                        }}
                    ></button>
                </header>
                <section className="modal-card-body">
                    <p>In Game Name: {props.account.acName}</p>
                    <p>Island: {props.account.acIsland}</p>
                </section>
            </div>
        </div>
    );
};

export default AccountModal;
