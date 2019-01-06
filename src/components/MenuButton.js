import React, { Component } from 'react';

export default class MenuButton extends Component {
  render() {
    return (
      <div className="menu-button" onClick={this.props.onMenuButtonClick}>
        <div className="menu-button__line" />
        <div className="menu-button__line" />
        <div className="menu-button__line" />
      </div>
    );
  }
}
