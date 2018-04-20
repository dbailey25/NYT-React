import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Jumbotron />
      </div>
    );
  }
}

export default App;
