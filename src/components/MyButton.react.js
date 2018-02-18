import PropTypes from 'prop-types';
import React from 'react';
import './MyButton.css';

export default class MyButton extends React.Component {

  render() {
    return (
      <button className="MyButton">
        {this.props.children}
      </button>
    );
  }
}
