import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SVGInline from 'react-svg-inline';
import Nav from './Nav';
import styles from './header.scss';

import studioJuiceLogo from '../../assets/images/svgs/inline/studio-juice-logo.svg';
import closeIcon from '../../assets/images/svgs/inline/icon-close.svg';
import hamburgerIcon from '../../assets/images/svgs/inline/icon-hamburger.svg';

class Header extends Component {
  static propTypes = {
    staticHeader: PropTypes.bool,
    numberOfItems: PropTypes.number
  }
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menuIcon: hamburgerIcon
    };
  }
  openCloseNav() {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false,
        menuIcon: hamburgerIcon
      });
    } else {
      this.setState({
        menuOpen: true,
        menuIcon: closeIcon
      });
    }
  }
  render() {
    const { menuOpen } = this.state;
    const { staticHeader, numberOfItems } = this.props;
    return (
      <header className={'globalSiteHeader ' + menuOpen + ' ' + (staticHeader ? styles.site_header + ' ' + styles.static : styles.site_header)}>
        <div className={styles.container + ' container'}>
          <h1 className={styles.logo + ' logo'}>
            <Link to="/">
              <SVGInline svg={studioJuiceLogo} />
            </Link>
          </h1>

          <button className={styles.mobileNavButton + ' hideDesktop mobileNavButton ' + menuOpen} onClick={this.openCloseNav.bind(this)}>&nbsp;</button>

          <Nav numberOfItems={numberOfItems} openClosed={menuOpen} />
        </div>
      </header>
    );
  }
}

export default Header;
