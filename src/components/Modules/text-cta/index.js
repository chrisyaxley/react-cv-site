import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './text-cta.scss';

const { string } = PropTypes;

class TextCta extends Component {

  static propTypes = {
    url: string.isRequired,
    text: string.isRequired,
    cta: string.isRequired
  }

  render() {
    const { url, text, cta } = this.props;
    return (
      <div className={styles.textCta}>
        <p className="largeText">{text}</p>
        <a href={url}>{cta}</a>
      </div>
    );
  }
}

export default TextCta;
