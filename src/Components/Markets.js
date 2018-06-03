import React, { Component } from 'react'
import { Link }  from 'react-router'
import * as Icon from 'react-cryptocoins'

export default class Markets extends Component {
  // TODO Make an API call and fetch all the symbols to be displayed
  render() {
    return (
        <div className="container">
          <table className="table table-hover">
            <tbody>
            <tr>
              <td><Icon.Btc /></td>
              <td><Link id="tBTCUSD" to="/marketItem/tBTCUSD/Btc" className="active">Bitcoin/USD</Link></td>
            </tr>
            <tr>
              <td><Icon.Ltc /></td>
              <td><Link id="tLTCUSD" to="/marketItem/tLTCUSD/Ltc" className="active">Litecoin/USD</Link></td>
            </tr>
            <tr>
              <td><Icon.Eth /></td>
              <td><Link id="tETHUSD" to="/marketItem/tETHUSD/Eth" className="active">Etherium/USD</Link></td>
            </tr>
            <tr>
              <td><Icon.Usdt /></td>
              <td><Link id="fUSD" to="/marketItem/fUSD/Usdt" className="active">Funding/USD</Link></td>
            </tr>
            <tr>
              <td><Icon.Btc /></td>
              <td><Link id="fBTC" to="/marketItem/fBTC/Btc" className="active">Funding/Bitcoin</Link></td>
            </tr>
            </tbody>
          </table>
        </div>
    )
  }
}