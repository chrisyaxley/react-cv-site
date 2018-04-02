/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './video.scss';

const { string } = PropTypes;

class Video extends Component {
  static propTypes = {
    videoUrl: string.isRequired
  }
  componentDidMount() {
    // this.refs.progress.value = 0;
    // const supportsProgress = (document.createElement('progress').max !== undefined);
    // if (!supportsProgress) this.refs.progress.setAttribute('data-state', 'fake');

    this.refs.video.addEventListener('ended', () => {
      this.refs.playPauseButton.setAttribute('data-state', 'play');
      this.refs.fullScreenBtn.setAttribute('data-state', 'play');
      this.refs.video.currentTime = 0;
      // this.refs.progress.value = 0;
    });
    // this.refs.video.addEventListener('timeupdate', this.updateProgressBar.bind(this), false);
  }
  updateProgressBar() {
    const progress = this.refs.progress;
    const percentage = Math.floor((100 / this.refs.video.duration) * this.refs.video.currentTime);
    progress.value = percentage;
  }
  playPause() {
    if (this.refs.video.paused || this.refs.video.ended) {
      this.refs.video.play();
      this.refs.playPauseButton.setAttribute('data-state', 'pause');
      this.refs.fullScreenBtn.setAttribute('data-state', 'pause');
    } else {
      this.refs.video.pause();
      this.refs.playPauseButton.setAttribute('data-state', 'play');
      this.refs.fullScreenBtn.setAttribute('data-state', 'play');
    }
  }
  goFullScreen() {
    if (this.refs.video.requestFullscreen) {
      this.refs.video.requestFullscreen();
    } else if (this.refs.video.mozRequestFullScreen) {
      this.refs.video.mozRequestFullScreen(); // Firefox
    } else if (this.refs.video.webkitRequestFullscreen) {
      this.refs.video.webkitRequestFullscreen(); // Chrome and Safari
    }
  }
  render() {
    const { videoUrl } = this.props;
    return (
      <div className={styles.fullWidthVideo}>
        <video ref="video" className={styles.videoEl} src={videoUrl} data-state="playing" />
        <div id="video-controls" className={styles.controls} data-state="hidden">
          <button id="playpause" ref="playPauseButton" className={styles.playPauseBtn} type="button" onClick={this.playPause.bind(this)} data-state="play" />
          <button className={styles.fullScreenBtn} ref="fullScreenBtn" data-state="play" onClick={this.goFullScreen.bind(this)} />
          {/* <div className="progress">
            <progress ref="progress" id="progress" value="0" min="0" max="100">
              <span id="progress-bar" />
            </progress>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Video;
