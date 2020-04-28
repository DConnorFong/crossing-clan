import * as React from 'react';
import TurnipData from '../../interfaces/TurnipData';

export interface TurnipInputProps {
    turnipData: TurnipData;
}

export interface TurnipInputState {
    updatedTurnipBuyPrice: string;
    updatedTurnipSellPrices: string[][];
    errorMessage: string;
}

class TurnipInput extends React.Component<TurnipInputProps, TurnipInputState> {
    state = {
        updatedTurnipBuyPrice: '',
        updatedTurnipSellPrices: [
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
        ],
        errorMessage: '',
    };

    render() {
        return (
            <React.Fragment>
                <h1>Your Turnip Data</h1>
                <div className="errorTurnipInput">
                    <p>{this.state.errorMessage}</p>
                </div>
                <div className="field">
                    <label className="label">Buy Price</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipBuyPrice}
                            placeholder={`${this.props.turnipData.turnipBuyPrice}`}
                            onChange={this.handleTurnipBuyPriceUpdate}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Monday AM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[0][0]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[0][0]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    0,
                                    0
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Monday PM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[0][1]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[0][1]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    0,
                                    1
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tuesday AM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[1][0]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[1][0]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    1,
                                    0
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tuesday PM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[1][1]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[1][1]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    1,
                                    1
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Wednesday AM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[2][0]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[2][0]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    2,
                                    0
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Wednesday PM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[2][1]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[2][1]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    2,
                                    1
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Thursday AM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[3][0]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[3][0]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    3,
                                    0
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Thursday PM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[3][1]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[3][1]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    3,
                                    1
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Friday AM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[4][0]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[4][0]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    4,
                                    0
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Friday PM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[4][1]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[4][1]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    4,
                                    1
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Saturday AM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[5][0]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[5][0]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    5,
                                    0
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Saturday PM</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={this.state.updatedTurnipSellPrices[5][1]}
                            placeholder={`${this.props.turnipData.turnipSellPrices[5][1]}`}
                            onChange={(event) => {
                                this.handleTurnipSellPriceUpdate(
                                    event.target.value,
                                    5,
                                    1
                                );
                            }}
                        />
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button
                            className="button is-link"
                            onClick={this.submitUpdates}
                        >
                            Update
                        </button>
                    </div>
                    <div className="control">
                        <button
                            className="button is-link is-light"
                            onClick={this.resetFields}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    private handleTurnipBuyPriceUpdate = (event: any) => {
        this.setState({
            updatedTurnipBuyPrice: event.target.value,
        });
    };

    private handleTurnipSellPriceUpdate = (
        value: string,
        dayIndex: number,
        timeIndex: number
    ) => {
        const currUpdates = this.state.updatedTurnipSellPrices;
        currUpdates[dayIndex][timeIndex] = value;
        this.setState({
            updatedTurnipSellPrices: currUpdates,
        });
    };

    private resetFields = () => {
        const resetTurnipBuyPrice = '';
        const resetTurnipSellPrices = [
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
        ];
        const resetErrorMessage = '';

        this.setState({
            updatedTurnipBuyPrice: resetTurnipBuyPrice,
            updatedTurnipSellPrices: resetTurnipSellPrices,
            errorMessage: resetErrorMessage,
        });
    };

    private submitUpdates = () => {
        // validate proposed updates
        const currBuy = this.state.updatedTurnipBuyPrice;

        if (currBuy != '' && !this.validateTurnipBuyPrice(currBuy)) {
            this.setState({
                errorMessage: `Invalid Buy Price`,
            });

            return;
        }

        for (let i = 0; i <= 5; i++) {
            for (let j = 0; j <= 1; j++) {
                const currSell = this.state.updatedTurnipSellPrices[i][j];

                console.log(i * 2 + j);

                if (currSell != '' && !this.validateTurnipSellPrice(currSell)) {
                    this.setState({
                        errorMessage: `Invalid Sell Price ${1 + i * 2 + j}`,
                    });

                    return;
                }
            }
        }
    };

    private validateTurnipBuyPrice = (price: any) => {
        if (isNaN(price)) return false;

        const parsedPrice = parseInt(price);

        if (parsedPrice < 90 || parsedPrice > 110) return false;

        return true;
    };

    private validateTurnipSellPrice = (price: any) => {
        if (isNaN(price)) return false;

        const parsedPrice = parseInt(price);

        if (parsedPrice < 20 || parsedPrice > 660) return false;

        return true;
    };
}

export default TurnipInput;
