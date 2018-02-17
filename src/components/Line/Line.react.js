import PropTypes from 'prop-types';
import React from 'react';


export default class Line extends React.Component 
{
	constructor(props){
		super(props);
		this.state ={focusedInputIndex: 0, lines: [{expression: '', value: 0}]};
		this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	setFocusedIndex(index) {
		this.setState({focusedInputIndex: index})
	}

	handleChange(event,line,index) {
		let lines = this.state.lines;
		let nextState = {
			lines: [
				...lines.slice(0,index),	
				{ ...lines[index], 
				  expression: event.target.value },
				...lines.slice(index + 1)
			]	
		};
		this.setState(nextState);
		if(this.props.calculateExpressions)
			this.props.calculateExpressions(nextState.lines)
				.then((updatedLinesWithValues) => {
					this.setState({lines: updatedLinesWithValues})
				});
	}

	

	handleSubmit(event) {
		console.log('A name was submitted: ' + this.state.value);
       		event.preventDefault();
  	}
	handleEnterKeyPress(e){
		if(e.which === 13){
		this.setState({
			focusedInputIndex: this.state.lines.length,
			lines: this.state.lines.concat({expression: '', value: 0})
		});
	
}}
	render() {
		
	    return (
	      <form onSubmit={this.handleSubmit} onKeyPress = {this.handleEnterKeyPress}>
		{this.state.lines.map((line,index) => 
		<div style={{ 
			display: 'flex', 
			justifyContent: 'space-between', 
			width: '75vw',
			margin: 'auto',
			marginTop: '20px'
		     }}
		>
			<label key={index}>
		  		{index}~&gt;
		  		<input
					ref={(input) => {
						if(input && this.state.focusedInputIndex === index)
							input.focus()
					}}
					type="text" 
					value={line.expression} 
					onChange={(event) => this.handleChange(event,line,index)} 
					onFocus={() => this.setFocusedIndex(index)}
				/>
			</label>
			<span> 
				{ line.value }
			</span>
		</div>
		)}	
	      </form>
	    );
  	}
}
Line.propTypes = {
	lineNum: PropTypes.number
}
