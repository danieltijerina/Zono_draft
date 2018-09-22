import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar'
import ZonoIntro from '../components/ZonoIntro'
import Zono from './Zono'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <Redirect to="/home/us"/>
        <Switch>
          <Route path="/home/us" component={ZonoIntro}/>
        </Switch>
      </div>
    );
  }
}

export default App;