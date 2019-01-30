import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import portrait from '../../assets/images/portrait.png';
import PropTypes from 'prop-types';

export default class NavigationMenu extends Component {
  render() {
    console.log(portrait);
    return (
      <nav className={`menu ${this.props.showNav ? 'show' : ''}`}>
        <div className={`menu__brand ${this.props.showNav ? 'show' : ''}`}>
          <div className="portrait" />
        </div>

        <ul className={`menu__navigation ${this.props.showNav ? 'show' : ''}`}>
          <li
            className={`menu__navigation__item ${
              this.props.showNav ? 'show' : ''
            }`}
          >
            <NavLink
              to="/"
              activeClassName="is-active"
              className="menu__navigation__item__link"
              exact={true}
              onClick={this.props.onMenuButtonClick}
            >
              Home
            </NavLink>
          </li>
          <li
            className={`menu__navigation__item ${
              this.props.showNav ? 'show' : ''
            }`}
          >
            <NavLink
              to="/contact"
              activeClassName="is-active"
              className="menu__navigation__item__link"
              onClick={this.props.onMenuButtonClick}
            >
              About
            </NavLink>
          </li>
          <li
            className={`menu__navigation__item ${
              this.props.showNav ? 'show' : ''
            }`}
          >
            <NavLink
              to="/contact"
              activeClassName="is-active"
              className="menu__navigation__item__link"
              onClick={this.props.onMenuButtonClick}
            >
              Portfolio
            </NavLink>
          </li>
          <li
            className={`menu__navigation__item ${
              this.props.showNav ? 'show' : ''
            }`}
          >
            <NavLink
              to="/contact"
              activeClassName="is-active"
              className="menu__navigation__item__link"
              onClick={this.props.onMenuButtonClick}
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
  onMenuButtonClick: PropTypes.func.isRequired,
  showNav: PropTypes.bool.isRequired
};
