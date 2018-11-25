import React, { Component, Fragment } from 'react';
import Img from 'gatsby-image';

import Modal from '../Modal/Modal';

import classes from './ModalImage.module.css';

class ModalImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.showToggleModalHandler = this.showToggleModalHandler.bind(this);
  }

  showToggleModalHandler() {
    console.log('showToggleModalHandler');
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  }

  render() {
    const { fluid } = this.props;
    const { showModal } = this.state;

    const img = <Img className={classes.Img} onClick={this.showToggleModalHandler} fluid={fluid} />;
    return (
      <Fragment>
        <Modal show={showModal} modalClosed={this.showToggleModalHandler}>
            <Img className={classes.ModalImage} fluid={fluid} />
        </Modal>
        <div onClick={this.showToggleModalHandler}>{img}</div>
      </Fragment>
    );
  }
}

export default ModalImage;
