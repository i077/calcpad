import React, { Component } from 'react';
import Button from './hackCWRUexamples/Button.react.js';
import HeaderBar from './components/HeaderBar.react.js';
import MyButton from './components/MyButton.react.js';

import test from './hackCWRUexamples/test.react.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
           get started, edit <code>src/App.js</code> and save to reload.
        </p>

   <HeaderBar title="CALCPAD">
    <MyButton id="RoastButton"></MyButton>
  </HeaderBar>

	</div>
    );
  }
}

export default App;
