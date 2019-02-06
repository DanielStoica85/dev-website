import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class PortfolioItem extends Component {
  render() {
    return (
      <div className="item-container">
        <div className="item-image-container">
          <img
            className="item-image"
            src={this.props.image}
            alt="Portofolio Item"
          />
        </div>
        <h2 className="item-title">{this.props.title}</h2>
        <p className="item-description">{this.props.description}</p>
      </div>
    );
  }
}

export default PortfolioItem;

// PropTypes
PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
  github: PropTypes.string,
  tools: PropTypes.array
};
