import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer}></Route>
        </div>
      </Router>
    );
  }
}

export default App;