import React, { Component, Fragment } from 'react';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';


import classes from './PhotoGallery.module.css';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
      showLightbox: false,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({ showLightbox: true, currentImage: obj.index });
  }

  closeLightbox() {
    this.setState({showLightbox: false});
  }

  gotoPrevious() {
    this.setState(prevState => ({ currentImage: prevState.currentImage - 1}));
  }

  gotoNext() {
    this.setState(prevState => ({ currentImage: prevState.currentImage + 1}));
  }

  render() {
    const { images, columns } = this.props;
    const { showLightbox, currentImage } = this.state;

    console.log(this.state);
    return (
      <Fragment>
        <div className={classes.Gallery}>
          <Gallery photos={images} columns={columns} onClick={this.openLightbox}/>
        </div>
          <Lightbox 
            images={images}
            currentImage={currentImage}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            isOpen={showLightbox}
            onClose={this.closeLightbox} />
      </Fragment>
    );
  }
}

export default PhotoGallery;
