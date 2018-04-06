import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Home from '../views/Home';
import Details from '../views/Details';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiUrl: 'https://api.coinmarketcap.com/v1/ticker/',
      cryptos: [],
      isLoading: true,
      timer: null
    }

    this.fetchCryptos = this.fetchCryptos.bind(this)
  }

  fetchCryptos() {
    return fetch(`${this.state.apiUrl}?limit=10`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          cryptos: res,
          isLoading: false
        })
      });
  }

  componentDidMount() {
    this.fetchCryptos();
    this.timer = setInterval(() => {
      this.fetchCryptos();
    }, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    const { cryptos } = this.state;

    return(
      <div className="app">
        <Nav {...this.state} />
        <div className="container">
          <Switch>
			      <Route exact path="/" render={() => (
            	<Home {...this.state} />
            )} />
            <Route path="/details/:cryptoId" render={({match}) => (
              <Details crypto={cryptos.find(c => c.id === match.params.cryptoId)} />
            )} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
