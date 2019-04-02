/* global document fetch */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import MDReactComponent from 'markdown-react-js';
import styles from './job.scss';

class Job extends Component {
  static propTypes = {
    fields: propTypes.object
  }

  render() {
    const { fields } = this.props;
    return (
      <div className={styles.job}>
        <div className={styles.leftCol}>
          <p className={styles.title}>{fields.jobTitle}</p>
          <p>
            {moment(fields.employedFrom).format('MMM YYYY')}
            {' '}
            -
            {' '}
            {
              fields.employedTo
                ? moment(fields.employedTo).format('MMM YYYY')
                : 'present'
            }
            {}
          </p>
        </div>
        <div className={styles.rightCol}>
          <h4><a className={styles.employerLink} href={fields.employerWebsite}>{fields.employer}</a></h4>
          <MDReactComponent text={fields.jobDescription} />
        </div>
      </div>
    );
  }
}

export default Job;
