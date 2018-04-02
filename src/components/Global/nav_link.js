// modules/NavLink.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import { NavLink } from 'react-router-dom';
import styles from './header.scss';

class NavLinks extends Component {
  static propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    mobile: PropTypes.string,
    to: PropTypes.string,
  }
  render() {
    const { name, icon, mobile } = this.props;
    return (
      <NavLink to={this.props.to} activeClassName="active">
        {icon ? <SVGInline className={styles.SVGInline} svg={icon} /> : name}
        {icon && <span className={'hideMobile ' + styles.textInIcon}>{name}</span>}
        {mobile && <span className={'hideDesktop '}>{mobile}</span>}
      </NavLink>
    );
  }
}

export default NavLinks;
