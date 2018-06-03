import React, { Component }  from 'react';
import { Router, Route, browserHistory }  from 'react-router';
import Markets from './Components/Markets'
import MarketItem from './Components/MarketItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './styles/logo.svg';
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Crypto Exchange</h1>
                </header>
                <Router history={browserHistory}>
                    <Route>
                        <Route path="/" component={Markets}/>
                        <Route path="/marketItem/:symbolId/:icon" component={MarketItem}/>
                    </Route>
                </Router>
            </div>
        );
    }
}

export default App;
