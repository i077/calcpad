import React, { Component } from 'react';
import Textarea from "./components/Textarea/Textarea.react.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
{/*        <header classname="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
		<Textarea/>
	</div>
    );
  }
}

export default App;
