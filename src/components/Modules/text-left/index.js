import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './text-left.scss';

const { string } = PropTypes;

class TextLeft extends Component {

  static propTypes = {
    text: string.isRequired
  }

  render() {
    const { text } = this.props;
    return (
      <div className={styles.text}>
        <p className="largeText">{text}</p>
      </div>
    );
  }
}

export default TextLeft;
