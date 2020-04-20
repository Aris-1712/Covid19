import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import DatatablePage from './DatatablePage'
import {Route,Switch} from 'react-router-dom'
import charts from './charts'


class  App extends Component {
  render(){return (
    <div className="App">
      <Switch>
     <Route exact path='/' component={Home}></Route>
     <Route path='/charts' component={charts}></Route>
     </Switch>
    </div>
  );
}}

export default App;
