import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationMenu extends Component {
  render() {
    console.log(this.props);
    return (
      <nav className="menu">
        <div className="menu__brand" />

        <ul className="menu__navigation">
          <li className="menu__navigation__item">
            <NavLink to="/" activeClassName="is-active" exact={true}>
              Home
            </NavLink>
          </li>
          <li className="menu__navigation__item">
            <NavLink to="/about" activeClassName="is-active">
              About
            </NavLink>
          </li>
          <li className="menu__navigation__item">
            <NavLink to="/portfolio" activeClassName="is-active" exact={true}>
              Portfolio
            </NavLink>
          </li>
          <li className="menu__navigation__item">
            <NavLink to="/contact" activeClassName="is-active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
