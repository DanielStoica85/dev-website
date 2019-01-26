import React from 'react';
import MenuButton from './MenuButton';
import NavigationMenu from './NavigationMenu';
import Logo from './Logo';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);

    this.state = {
      showNav: false
    };
  }

  onMenuButtonClick() {
    this.setState(prevState => {
      return {
        showNav: !prevState.showNav
      };
    });
  }

  render() {
    const showNav = this.state.showNav;
    return (
      <header>
        <Logo />
        <MenuButton
          onMenuButtonClick={this.onMenuButtonClick}
          showNav={showNav}
        />
        <NavigationMenu showNav={showNav} />
      </header>
    );
  }
}
