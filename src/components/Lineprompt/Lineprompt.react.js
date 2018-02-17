import React from 'react';


export default class Lineprompt extends React.Component 
{
	constructor(props){
		super(props);
		this.state = {numLines: 2};
		this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
	}
	handleEnterKeyPress(){
		this.setState({numLines: 1});
		console.log("wuss poppin");
	}
 	render() {
		let numLines = this.state.numLines;
		let element = 1;	
		if(numLines === 2) {
		 	element = for(int i = 0; i < numLines; i++){<div>2</div>};
		}
		else {
			element = <div>1</div>;	
		}
    		return(
			<div onClick = {this.handleEnterKeyPress}>
				{element}
			</div>
   		 );
  }

}

