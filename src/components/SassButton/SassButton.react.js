import React from 'react';
import './SassButton.css';

export default class SassButton extends React.Component {

  render() {
    return (
      <button className="SassButton">
        {this.props.children}
      </button>
    );
  }
}
