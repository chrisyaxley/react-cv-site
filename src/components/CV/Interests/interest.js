/* global document fetch */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './interests.scss';

class Interest extends Component {
  static propTypes = {
    fields: propTypes.object
  }

  render() {
    const { fields } = this.props;
    return (
      <div className={styles.interest}>
        <img className={styles.interestIcon} alt={fields.name} src={fields.icon.fields.file.url} alt={fields.icon.fields.file.title} />
        <p className={styles.interestName}>{fields.name}</p>
      </div>
    );
  }
}

export default Interest;
