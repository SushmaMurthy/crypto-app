import React, {Component} from 'react'
import { Link }  from 'react-router'
import * as Icon from 'react-cryptocoins'

export default class MarketItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marketDetails: {}
        };
    }

    componentWillMount() {
        fetch('https://api.bitfinex.com/v2/ticker/' + this.props.params.symbolId)
            .then(response => {
                return response.json();
            }).then(data => {
            if ((this.props.params.symbolId.toString()).startsWith('t')) {
                this.setState({
                    marketDetails: {
                        BID: data[0],
                        BID_SIZE: data[1],
                        ASK: data[2],
                        ASK_SIZE: data[3],
                        DAILY_CHANGE: data[4],
                        LAST_PRICE: data[6],
                        VOLUME: data[7]
                    }
                });
            } else {
                this.setState({
                    marketDetails: {
                        BID: data[1],
                        BID_SIZE: data[2],
                        ASK: data[4],
                        ASK_SIZE: data[5],
                        DAILY_CHANGE: data[7],
                        LAST_PRICE: data[9],
                        VOLUME: data[10]
                    }
                });
            }
        }).catch(err => {
            console.log('Unable to fetch data from bitfinex API' + err)
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ASSET</td>
                        <td>{}</td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BID</td>
                            <td>{this.state.marketDetails.BID}</td>
                        </tr>
                        <tr>
                            <td>BID SIZE</td>
                            <td>{this.state.marketDetails.BID_SIZE}</td>
                        </tr>
                        <tr>
                            <td>ASK</td>
                            <td>{this.state.marketDetails.ASK}</td>
                        </tr>
                        <tr>
                            <td>ASK SIZE</td>
                            <td>{this.state.marketDetails.ASK_SIZE}</td>
                        </tr>
                        <tr>
                            <td>DAILY CHANGE</td>
                            <td>{this.state.marketDetails.DAILY_CHANGE}</td>
                        </tr>
                        <tr>
                            <td>LAST PRICE</td>
                            <td>{this.state.marketDetails.LAST_PRICE}</td>
                        </tr>
                        <tr>
                            <td>VOLUME</td>
                            <td>{this.state.marketDetails.VOLUME}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-default">
                    <Link to="/" className="active">Back</Link>
                </button>
            </div>
        )
    }
}