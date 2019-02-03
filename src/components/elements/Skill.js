import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Skill extends Component {
  render() {
    const divStyle = {
      width: this.props.percentage
    };

    return (
      <div className="skill-container">
        <div className="skill-color" style={divStyle}>
          <div className="skill-name">{this.props.name}</div>
          <div className="skill-percentage">{this.props.percentage}</div>
        </div>
      </div>
    );
  }
}

// PropTypes
Skill.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired
};
