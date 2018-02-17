import PropTypes from 'prop-types';
import React from 'react';
import './HeaderBar.css';

export default class HeaderBar extends React.Component {
  render() {

    return (
      <div className="HeaderBar">
        <span id="title"> {this.props.title} </span>
        <span id="children"> {this.props.children} </span>
      </div>
    );
  }
}
