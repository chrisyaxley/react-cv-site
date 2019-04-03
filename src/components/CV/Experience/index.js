import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Job from './Job';

class Experience extends Component {
  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    getExperienceData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);
    props.getExperienceData();
  }

  render() {
    const {
      loading, data,
    } = this.props;

    return (
      <section className={`fadeIn ${loading ? 'loading' : 'loaded'}`}>
        <h3 className="sectionHeader">Experience</h3>
        {!loading && data.map(position => <Job key={position.sys.id} fields={position.fields} />)}
      </section>
    );
  }
}

export default Experience;
