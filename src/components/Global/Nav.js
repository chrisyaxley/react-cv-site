import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import SVGInline from 'react-svg-inline';
import NavLinks from './nav_link';
import styles from './nav.scss';

import cart from '../../assets/images/svgs/inline/icon-cart.svg';

class Nav extends Component {
  static propTypes = {
    numberOfItems: PropTypes.number,
    openClosed: PropTypes.bool,
  }

  render() {
    const { numberOfItems, openClosed } = this.props;
    return (
      <nav className={'main_nav ' + openClosed}>
        <ul className={'nav_list ' + styles.nav_list}>
          <li>
            <NavLinks to="/work/" name="Work" />
          </li>
          <li>
            <NavLinks to="/studio/" name="Studio" />
          </li>
          <li>
            <NavLinks to="/shop/" name="Shop" />
          </li>
          <li>
            <NavLinks to="/contact/" name="Contact" />
          </li>
          <li>
            <NavLinks to="/basket/" icon={cart} mobile={'Basket' + (numberOfItems > 0 ? (': ') : ('')) + (numberOfItems === 0 ? ('') : (String(numberOfItems)))} name={numberOfItems === 0 ? ('') : (String(numberOfItems))} />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
