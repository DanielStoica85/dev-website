import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: false
    };
  }

  revealDetails = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        cover: !prevState.cover
      };
    });
  };

  render() {
    return (
      <div className="item-container">
        <div className="item-image-container">
          <div
            className={`toggle ${this.state.cover ? 'cover' : ''}`}
            onClick={this.revealDetails}
          >
            +
          </div>
          <img
            className="item-image"
            src={this.props.image}
            alt="Portofolio Item"
          />
          <div className="item-links">
            <a
              href={this.props.url}
              className={`item-url ${this.state.cover ? 'show' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-eye" /> Live project
            </a>
            <a
              href={this.props.github}
              className={`item-url ${this.state.cover ? 'show' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" /> Github
            </a>
          </div>
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
