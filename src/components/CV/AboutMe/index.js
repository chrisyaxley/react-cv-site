import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AboutMe extends Component {
  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    getAboutMeData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);
    props.getAboutMeData();
  }

  render() {
    const {
      loading, data,
    } = this.props;
    return (
      <section className={`fadeIn ${loading ? 'loading' : 'loaded'}`}>
        <h3 className="sectionHeader">About me</h3>
        {!loading && <p>{data[0].fields.text}</p>}
      </section>
    );
  }
}

export default AboutMe;
