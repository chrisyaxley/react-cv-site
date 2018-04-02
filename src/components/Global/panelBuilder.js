import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

/* Possible Panels */
import FullImage from '../Modules/full-image';
import TextCta from '../Modules/text-cta';
import TextLeft from '../Modules/text-left';
import TextCentre from '../Modules/text-centre';
import TwoImages from '../Modules/two-images';
import TwoImagesRotating from '../Modules/two-images-rotating';
import Video from '../Modules/video';
import AutoPlayVideo from '../Modules/autoPlayVideo';
import Portrait from '../Modules/portrait';
import TwoImagesStack from '../Modules/two-imagesStack';
import Carousel from '../Modules/carousel';
import Logos from '../Modules/logos';
import Collaborators from '../Modules/collaborators';

const { object } = PropTypes;

class PanelBuilder extends Component {

  static propTypes = {
    panel: object.isRequired
  }

  render() {
    switch (this.props.panel.type) {
      case 'full-image':
        return (
          <LazyLoad height={'200px'} offset={[-100, 0]}>
            <FullImage url={this.props.panel.url} urlSmall={this.props.panel.urlSmall} urlMed={this.props.panel.urlMed} altText={this.props.panel.altText} ratio={this.props.panel.ratio} />
          </LazyLoad>
        );
      case 'text-cta':
        return (
          <TextCta text={this.props.panel.text} url={this.props.panel.url} cta={this.props.panel.cta} />
        );
      case 'text-left':
        return (
          <TextLeft text={this.props.panel.text} />
        );
      case 'text-centre':
        return (
          <TextCentre text={this.props.panel.text} />
        );
      case '2-images':
        return (
          <LazyLoad height={'200px'} offset={[0, 0]}>
            <TwoImages images={this.props.panel.images} />
          </LazyLoad>
        );
      case '2-images-rotating':
        return (
          <LazyLoad height={'200px'} offset={[0, 0]}>
            <TwoImagesRotating columns={this.props.panel.columns} />
          </LazyLoad>
        );
      case 'carousel':
        return (
          <LazyLoad height={'200px'} offset={[0, 0]}>
            <Carousel images={this.props.panel.images} />
          </LazyLoad>
        );
      case 'video':
        return (
          <LazyLoad height={'200px'} offset={[0, 0]}>
            <Video videoUrl={this.props.panel.videoUrl} />
          </LazyLoad>
        );
      case 'portrait-left':
        return (
          <LazyLoad height={'200px'} offset={[0, 0]}>
            <div className="flexRow collapsibleMargin">
              <Portrait images={this.props.panel.images} />
              <TwoImagesStack images={this.props.panel.images} />
            </div>
          </LazyLoad>
        );
      case 'portrait-right':
        return (
          <LazyLoad height={'200px'} offset={[0, 0]}>
            <div className="flexRow collapsibleMargin">
              <TwoImagesStack images={this.props.panel.images} />
              <Portrait images={this.props.panel.images} />
            </div>
          </LazyLoad>
        );
      case 'logos':
        return (
          <LazyLoad height={'200px'} offset={[0, 0]}>
            <Logos images={this.props.panel.images} headline={this.props.panel.headline} />
          </LazyLoad>
        );
      case 'auto-play-video':
        return (
          <LazyLoad height={'200px'} offset={[-100, 0]}>
            <AutoPlayVideo videoUrl={this.props.panel.videoUrl} />
          </LazyLoad>
        );
      case 'collaborators':
        return (
          <LazyLoad height={'200px'} offset={[-100, 0]}>
            <Collaborators collaborators={this.props.panel.collaborators} />
          </LazyLoad>
        );
      default:
        return (
          <div>
            <h1>Error</h1>
          </div>
        );
    }
  }
}

export default PanelBuilder;
