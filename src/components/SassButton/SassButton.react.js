import React from 'react';
import './SassButton.css';

export default class SassButton extends React.Component {



  render() {
    let toRoast = false;

    function toggleRoast(e){
      alert(toRoast);
      toRoast = !toRoast;
      return toRoast;
    };

    return (
      <button className="SassButton" onClick= {toggleRoast}>
        {this.props.children}
      </button>
    );
  }
}
