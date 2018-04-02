/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './autoPlayVideo.scss';

const { string } = PropTypes;

class AutoPlayVideo extends Component {
  static propTypes = {
    videoUrl: string.isRequired
  }
  componentDidMount() {
    this.refs.video.play();
  }
  render() {
    const { videoUrl } = this.props;
    return (
      <div className={styles.fullWidthVideo}>
        <video ref="video" className={styles.videoEl} src={videoUrl} />
      </div>
    );
  }
}

export default AutoPlayVideo;
