import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';

function onAuthRequired({history}){
  history.push('/login');

}


export default class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-921875.oktapreview.com/oauth2/default'
            client_id='0oag6993aeNM4maLv0h7'
            redirect_uri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired} >

          <div className="App">
            <Navbar/>
            <div className="container">
              <Route path = "/" exact={true} component = { Home } />
              <SecureRoute path = "/staff" exact={true} component = { Staff } />
              <Route path='/login' render={() => <Login baseUrl='https://dev-921875.oktapreview.com' />} />
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </div>
          </div>

        </Security>
      </Router>
    );
  }
}

