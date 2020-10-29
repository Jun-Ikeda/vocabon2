import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import Color from '../../../config/Color';
import { behaviorOfKeyAvoidView } from '../../../config/Const';
import { auth } from '../../../config/Firebase/Firebase';

import Header from '../../../components/header/Header';
import Icon from '../../../components/Icon';
import { ModalError, ModalWithImage } from '../../../components/Modal';

const forgotPassword = require('../../../../assets/illustrations/forgetPassword.png');
const Email = require('../../../../assets/illustrations/email.png');

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { height: 125, width: 125, alignSelf: 'center' },
  title: {
    color: Color.font4,
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  paragraph: {
    color: Color.font4,
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  textinput: {
    borderColor: 'transparent',
    borderBottomColor: Color.font4,
    borderWidth: 1,
    height: 70,
    width: 270,
    color: Color.font4,
  },
  buttonSend: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primary1,
    height: 40,
    width: 150,
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
  },
  textSend: {
    color: Color.font1,
    fontSize: 16,
  },
  modalSentSuccessButton: {
    height: 40,
    width: 120,
    borderRadius: 20,
    backgroundColor: Color.primary1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const renderDescription = () => (
  <View>
    <Image source={forgotPassword} style={style.image} />
    <Text style={style.title}>Reset your password</Text>
    <Text style={style.paragraph}>
      The link to reset your password will be sent to the email you type below.
    </Text>
  </View>
);

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      email: navigation.state.params.email,
      isModalErrorVisible: false,
      isModalSentSuccessVisible: false,
      errorMessage: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={style.container}
        behavior={behaviorOfKeyAvoidView}
      >
        {this.renderHeader()}
        <View style={style.mainContainer}>
          {renderDescription()}
          {this.renderTextInput()}
          {this.renderButton()}
        </View>
        {this.renderModal()}
      </KeyboardAvoidingView>
    );
  }

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <Header
        renderLeft={() => (
          <Icon.Ionicons
            name="ios-arrow-back"
            style={{ color: Color.font4, fontSize: 25 }}
          />
        )}
        onPressLeft={() => navigation.goBack()}
      />
    );
  };

  renderTextInput = () => {
    const { email } = this.state;
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          value={email}
          onChangeText={this.setStateEmail}
          placeholder="EMAIL"
          placeholderTextColor={Color.font4}
          style={style.textinput}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
          }}
          onPress={() => {
            this.setStateEmail('');
          }}
        >
          <Icon.Ionicons name="md-close" color={Color.font4} size={20} />
        </TouchableOpacity>
      </View>
    );
  };

  setStateEmail = email => {
    const { navigation } = this.props;
    this.setState({ email });
    navigation.state.params.setStateEmail(email);
  };

  renderButton = () => (
    <TouchableOpacity style={style.buttonSend} onPress={this.sendResetLink}>
      <Text style={style.textSend}>Send</Text>
    </TouchableOpacity>
  );

  sendResetLink = () => {
    const { email } = this.state;
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.setState({ isModalSentSuccessVisible: true });
      })
      .catch(error => {
        this.setState({ errorMessage: error, isModalErrorVisible: true });
      });
  };

  renderModal = () => {
    const {
      isModalErrorVisible,
      errorMessage,
      isModalSentSuccessVisible,
      email,
    } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <ModalError
          isVisible={isModalErrorVisible}
          closeModal={() => this.setState({ isModalErrorVisible: false })}
          error={errorMessage.toString()}
        />
        <ModalWithImage
          isVisible={isModalSentSuccessVisible}
          onPressOutSide={() => navigation.navigate('signup')}
          closeModal={() => navigation.navigate('signup')}
          title="Check your Inbox!"
          message={`Link to reset password has been sent to ${email} successfully.`}
          imageSource={Email}
          imageStyle={{ height: 150, width: 200 }}
          renderButton={() => (
            <TouchableOpacity
              style={style.modalSentSuccessButton}
              onPress={() => navigation.navigate('signup')}
            >
              <Text style={{ color: Color.font1, fontSize: 20 }}>OK!</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
}

export default ResetPassword;
