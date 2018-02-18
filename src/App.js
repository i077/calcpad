import React, { Component } from 'react';
import insultGenerator from './components/InsultGenTest/InsultGenTest.react.js';
import HeaderBar from './components/HeaderBar/HeaderBar.react.js';
import SassButton from './components/SassButton/SassButton.react.js';
import logo from './logo.svg';
import expandExpr from './Expander.react.js';
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
	   <div className="header">
		<h3>CALCPAD</h3>
	   {/* <SassButton id="RoastButton"></SassButton>*/}
	   </div>
		<Line 
			calculateExpressions={
			(lines)=> Promise.resolve(
				lines.map( line => {
				let lineExpressions = new Array(lines.length);
				let i = 0; 
				lines.forEach(function(l){
					lineExpressions[i] = l.expression;
					i = i+1;
				});
					try {
					
				return {
					expression: line.expression,
					value: insultGenerator(eval(expandExpr(line.expression, [], lineExpressions)))
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
