import React, { Component } from 'react';
import Line from "./components/Line/Line.react.js";
import './App.css';

class App extends Component {
	  render() {

	function handleEnterKeyPress(e){
		
		if(e.which === 13){
			return(<Line lineNum={3}/>);
		}
		
	};
	    return (
      <div className="App" onKeyPress = {handleEnterKeyPress}>
{/*        <header classname="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
		<Line 
			calculateExpressions={
			(lines)=> Promise.resolve(
				lines.map( line => {
					try {
					
				return {
					expression: line.expression,
					value: eval(line.expression)
				}
				}catch(err){
					return line	
				}
				})
			)
			}
		/>
	</div>
    );
  }
}

export default App;
