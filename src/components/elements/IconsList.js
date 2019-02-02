import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class IconsList extends Component {
  render() {
    return (
      <ul className="icons slide-up">
        <li>
          <Link to="/portfolio">
            <span />
            <span />
            <span />
            <span />
            <i className="fas fa-briefcase" />
          </Link>
        </li>
        <li>
          <Link to="/" target="_blank" rel="noopener">
            <span />
            <span />
            <span />
            <span />
            <i className="fab fa-linkedin" />
          </Link>
        </li>
        <li>
          <Link to="/" target="_blank" rel="noopener">
            <span />
            <span />
            <span />
            <span />
            <i className="fab fa-github" />
          </Link>
        </li>
      </ul>
    );
  }
}

export default IconsList;
