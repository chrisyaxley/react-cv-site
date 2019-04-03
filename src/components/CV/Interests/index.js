import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Interest from './interest';
import styles from './interests.scss';

class Interests extends Component {
  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    getInterestsData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);
    props.getInterestsData();
  }

  render() {
    const {
      loading, data,
    } = this.props;

    return (
      <section className={`${styles.interests} fadeIn ${loading ? 'loading' : 'loaded'}`}>
        <h3 className="sectionHeader">Interests</h3>
        <div className={styles.interestsList}>
          {!loading && data.map(interest => <Interest key={interest.sys.id} fields={interest.fields} />)}
        </div>
      </section>
    );
  }
}

export default Interests;
