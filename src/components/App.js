import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import Login from './Login'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NavLink to='/'>[ Home ]</NavLink>
        <NavLink to='/login'>[ Login ]</NavLink>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
