/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Image,
} from 'react-native';
import OriginalModal from 'react-native-modal';

import Color from '../config/Color';

import TextAutoAdjust from './TextAutoAdjust';

const Error = require('../../assets/illustrations/error.png');

let counter = true;

export default class Modal extends Component {
  // props: {isVisible, messageForPC, closeModal, onPressOutSide}
  render() {
    const { isVisible, messageForPC, closeModal, children } = this.props;
    if (Platform.OS === 'web') {
      if (isVisible) {
        if (counter) {
          alert(messageForPC);
          counter = false;
          closeModal();
        }
        counter = true;
      }
      return null;
    }
    return (
      <OriginalModal isVisible={isVisible}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
          }}
          onPress={this.onPressOutSide}
        >
          <TouchableWithoutFeedback
            style={{ alignSelf: 'center' }}
            onPress={() => {}}
          >
            {children}
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </OriginalModal>
    );
  }

  onPressOutSide = () => {
    const { onPressOutSide, closeModal } = this.props;
    try {
      onPressOutSide();
    } catch (error) {
      closeModal();
    }
  };
}

const styleModalWithImage = StyleSheet.create({
  modal: {
    alignSelf: 'center',
    backgroundColor: Color.background2,
    // height: 200,
    width: 360,
    borderRadius: 20,
    paddingBottom: 15,
  },
  imageContainer: {
    backgroundColor: Color.primary2,
    alignItems: 'center',
    paddingVertical: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  paragraph: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  button: {
    height: 40,
    width: 120,
    borderRadius: 20,
    backgroundColor: Color.primary1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class ModalWithImage extends Component {
  /*
    props: {
      isVisible,
      message,
      closeModal,
      onPressOutSide,
      title,
      imageSource
      imageStyle
      renderButton optional
    }
  */
  render() {
    const {
      isVisible,
      onPressOutSide,
      closeModal,
      message,
      imageSource,
      imageStyle,
      title,
    } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        onPressOutSide={onPressOutSide}
        closeModal={closeModal}
        messageForPC={message}
      >
        <View style={styleModalWithImage.modal}>
          <View style={styleModalWithImage.imageContainer}>
            <Image source={imageSource} style={imageStyle} />
          </View>
          <View style={styleModalWithImage.paragraph}>
            <TextAutoAdjust
              style={{
                textAlign: 'center',
                fontSize: 30,
                width: 300,
                height: 80,
              }}
            >
              {title}
            </TextAutoAdjust>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                paddingHorizontal: 20,
              }}
            >
              {message}
            </Text>
          </View>
          {this.renderButton()}
        </View>
      </Modal>
    );
  }

  renderButton = () => {
    const { renderButton, closeModal } = this.props;
    try {
      return renderButton();
    } catch (error) {
      return (
        <TouchableOpacity
          style={styleModalWithImage.button}
          onPress={closeModal}
        >
          <Text style={{ color: Color.font1, fontSize: 20 }}>OK!</Text>
        </TouchableOpacity>
      );
    }
  };
}

const styleModalError = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    paddingVertical: 50,
  },
});

export class ModalError extends Component {
  // props: {
  //   isVisible
  //   closeModal
  //   error
  // }
  render() {
    const { isVisible, closeModal, error } = this.props;
    return (
      <ModalWithImage
        isVisible={isVisible}
        onPressOutSide={closeModal}
        closeModal={closeModal}
        title={`Hmmm...${'\r\n'}something went wrong`}
        message={error}
        imageSource={Error}
        imageStyle={styleModalError.image}
      />
    );
  }
}
