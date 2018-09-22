import React, { Component } from 'react';
import { Redirect, Link, Route, Switch, Router, BrowserRouter } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {
  Glyphicon
} from 'reactstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(
      <SideNav
        onSelect={(selected) => {
            /*const to = '/' + selected;
            if (location.pathname !== to) {
                        history.push(to);
                    }*/
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
        <Link to="/app/pay">
            <NavItem eventKey="home">
                <NavIcon>
                  
                    <p>P</p>
                  
                </NavIcon>
                <NavText>
                  <Link to="/app/pay">
                    Perfil
                  </Link>
                </NavText>
            </NavItem>
            </Link>
            <NavItem eventKey="charts">
                <NavIcon>
                    <p>$</p>
                </NavIcon>
                <NavText>
                    Pagos
                </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText>
                      <Link to="/app/pay">
                        Line Chart
                      </Link>
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        Bar Chart
                    </NavText>
                </NavItem>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
  );
}
}

class RootComponent extends Component {
  render() {
    return(
      <p>RootComponent</p>
    );
  }
}

class Home extends Component {
  render() {
    return(
      <p>Home</p>
    );
  }
}

class Devices extends Component {
  render() {
    return(
      <p>Devices</p>
    );
  }
}

export default App;