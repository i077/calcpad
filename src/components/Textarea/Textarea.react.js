import React from 'react';

export default class Textarea extends React.Component 
{
 render() {
	function handleKeyPress(e){
		
		if(e.which === 13){
			console.log("wuss poppin jimbo");
		}
	}
    return (
 	<div>
		<textarea rows="4" cols="50" onKeyPress = {handleKeyPress}>
		</textarea>
      	</div>
    );
  }

}

