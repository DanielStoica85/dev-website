import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export class Logo extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img className="logo-image" src={logo} alt="Logo" />
        </Link>
      </div>
    );
  }
}

export default Logo;
