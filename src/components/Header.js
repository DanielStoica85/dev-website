import React from 'react';
import MenuButton from './MenuButton';
import NavigationMenu from './NavigationMenu';

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
    console.log(this.state);
    return (
      <header>
        <MenuButton onMenuButtonClick={this.onMenuButtonClick} />
        {this.state.showNav && <NavigationMenu />}
      </header>
    );
  }
}
