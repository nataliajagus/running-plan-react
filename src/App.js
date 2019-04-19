import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import WeeksWrapper from './components/WeeksWrapper/WeeksWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WeeksWrapper />
      </div>
    );
  }
}

export default App;
