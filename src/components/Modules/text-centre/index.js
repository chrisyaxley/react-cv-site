import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './text-centre.scss';

const { string } = PropTypes;

class TextCta extends Component {

  static propTypes = {
    text: string.isRequired
  }

  render() {
    const { text } = this.props;
    return (
      <div className={styles.textCta}>
        <p className="largeText">{text}</p>
      </div>
    );
  }
}

export default TextCta;
