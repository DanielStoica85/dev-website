import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class IconsList extends Component {
  render() {
    return (
      <div className="icons slide-up">
        <Link to="/portfolio">
          <i className="fas fa-briefcase fa-2x" />
        </Link>
        <Link to="/" target="_blank" rel="noopener">
          <i className="fab fa-linkedin fa-2x" />
        </Link>
        <Link to="/" target="_blank" rel="noopener">
          <i className="fab fa-github fa-2x" />
        </Link>
      </div>
    );
  }
}

export default IconsList;
