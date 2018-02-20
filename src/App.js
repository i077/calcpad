import React, { Component } from 'react';
import insultGenerator from './components/InsultGenTest/InsultGenTest.react.js';
import HeaderBar from './components/HeaderBar/HeaderBar.react.js';
import logo from './logo.svg';
import expandExpr from './Expander.react.js';
import Line from "./components/Line/Line.react.js";
import './App.css';
var math = require('mathjs');
var toRoast = false;

class App extends Component {

	  render() {
			function toggleRoast(e){
				toRoast = !toRoast;

if(toRoast){
	{document.getElementById("RoastButton").style.backgroundColor =  'red'}
	{document.getElementById("RoastButton").textContent="ROAST ON";}
}
else{
	{document.getElementById("RoastButton").style.backgroundColor =  '#b0c5e8'}
	{document.getElementById("RoastButton").textContent="roast off";}

}
			};



	function handleEnterKeyPress(e){

		if(e.which === 13){
			return(<Line lineNum={3}/>);
		}

	};
	    return (

      <div onKeyPress = {handleEnterKeyPress}>
	<div style={{color: '#b0c5e8'}}> {document.body.style.backgroundColor =  '#b0c5e8'};</div>
	   <div className="header">
		<h3>CALCPAD QUIPMATHS</h3>
	   </div>
		<div align="center">
			<p>Type some math, then press enter to create a new line. Use "$n" to refer to line n.</p>
			<button id="RoastButton" style={{backgroundColor: '#b0c5e8'}} onClick = {toggleRoast}>roast off</button>
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

						let expression = line.expression;
						let numValue = math.eval(expandExpr(line.expression, [], lineExpressions))
						var valueToReturn = numValue.toString();

						if (valueToReturn.indexOf("function") === 0) {
							return line
						}

						if (toRoast){
							valueToReturn = insultGenerator(valueToReturn)
						}


				return {
					expression: line.expression,
					value: valueToReturn
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
