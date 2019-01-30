import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MenuButton extends Component {
  render() {
    return (
      <div
        className={`menu-button ${this.props.showNav ? 'close' : ''}`}
        onClick={this.props.onMenuButtonClick}
      >
        <div className="menu-button__line" />
        <div className="menu-button__line" />
        <div className="menu-button__line" />
      </div>
    );
  }
}

// PropTypes
MenuButton.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
  showNav: PropTypes.bool.isRequired
};
