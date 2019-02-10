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
          <a
            href="https://www.linkedin.com/in/daniel-stoica-18262650/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span />
            <span />
            <span />
            <span />
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DanielStoica85"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span />
            <span />
            <span />
            <span />
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
    );
  }
}

export default IconsList;
