import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import portrait from '../../assets/images/portrait.png';
import PropTypes from 'prop-types';

export default class NavigationMenu extends Component {
  render() {
    console.log(portrait);
    return (
      <nav className="menu">
        <div className={`menu__brand ${this.props.showNav ? 'show' : ''}`}>
          <div className="portrait" />
        </div>

        <ul className={`menu__navigation ${this.props.showNav ? 'show' : ''}`}>
          <li className="menu__navigation__item">
            <NavLink
              to="/"
              activeClassName="is-active"
              className="menu__navigation__item__link"
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li className="menu__navigation__item">
            <NavLink
              to="/about"
              activeClassName="is-active"
              className="menu__navigation__item__link"
            >
              About
            </NavLink>
          </li>
          <li className="menu__navigation__item">
            <NavLink
              to="/portfolio"
              activeClassName="is-active"
              className="menu__navigation__item__link"
              exact={true}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="menu__navigation__item">
            <NavLink
              to="/contact"
              activeClassName="is-active"
              className="menu__navigation__item__link"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

// PropTypes
NavigationMenu.propTypes = {
  showNav: PropTypes.bool.isRequired
};
