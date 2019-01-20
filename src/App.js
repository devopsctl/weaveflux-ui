import React, { Component } from 'react';
import Header from './Header/Header';
import Grid from './Grid/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Grid />
      </div>
    );
  }
}

export default App;
