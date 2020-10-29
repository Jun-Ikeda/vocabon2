import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import Color from '../../../config/Color';
import Storage from '../../../config/Storage';
import User from '../../../config/Firebase/User';

import Icon from '../../../components/Icon';
import { ModalWithImage, ModalError } from '../../../components/Modal';
import { behaviorOfKeyAvoidView } from '../../../config/Const';

const Info = require('../../../../assets/illustrations/Info.png');
const AccountEmailVerified = require('../../../../assets/illustrations/accountVerified.png');
const List = require('../../../../assets/illustrations/list.png');

let TimerPasswrodHidden;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: 270,
  },
  textinput: {
    flex: 1,
    borderColor: 'transparent',
    borderBottomColor: Color.font4,
    borderWidth: 1,
    height: 70,
    color: Color.font4,
  },
  buttonsContainer: {
    paddingVertical: 20,
    height: 170,
    justifyContent: 'space-between',
  },
  buttonSignUpLogIn: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.background2,
    height: 40,
    width: 150,
    borderRadius: 20,
    padding: 10,
  },
  textSignUpLogIn: {
    color: Color.primary1,
    fontSize: 16,
  },
  or: {
    textAlign: 'center',
    color: Color.font4,
  },
  modal1Image: {
    height: 150,
    width: 200,
  },
  modal3Image: {
    height: 150,
    width: 150,
    paddingVertical: 30,
  },
  modal3Button: {
    height: 40,
    width: 120,
    borderRadius: 20,
    backgroundColor: Color.primary1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal4Image: {
    height: 100,
    width: 100,
    paddingVertical: 30,
  },
  subButtonsContainer: {
    paddingTop: 15,
  },
  subButtons: {
    color: Color.font5,
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 13,
  },
});

const renderIcon = () => (
  <View
    style={{
      width: 240,
      height: 130,
      alignSelf: 'center',
      justifyContent: 'center',
      padding: 20,
    }}
  >
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 30, textAlign: 'center' }}>LOGO</Text>
    </View>
  </View>
);

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      passwordhidden: true,
      isModal1Visible: false,
      isModal2Visible: false,
      isModal3Visible: false,
      isModal4Visible: false,
      modal2Message: '',
      modal1Title: '',
      modal1Paragpaph: '',
    };
  }

  async UNSAFE_componentWillMount() {
    const auth = await Storage.Function.load({ key: 'auth' });
    const { navigation } = this.props;
    if (auth.loggedin) {
      navigation.navigate('emailverify');
    }
  }

  render() {
    const { isFocused } = this.props;
    return (
      <KeyboardAvoidingView
        style={[style.container, { opacity: isFocused ? 1 : 0 }]}
        behavior={behaviorOfKeyAvoidView}
      >
        <View style={style.mainContainer}>
          {renderIcon()}
          <View style={style.form}>{this.renderTextInputs()}</View>
          <View style={style.buttonsContainer}>{this.renderButtons()}</View>
          <View style={style.subButtonsContainer}>
            {this.renderSubButtons()}
          </View>
        </View>
        {this.renderModal()}
      </KeyboardAvoidingView>
    );
  }

  renderTextInputs = () => {
    const { email, name, password, passwordhidden } = this.state;
    const textInputs = [
      {
        value: email,
        onChangeText: email => this.setState({ email }),
        placeholder: 'EMAIL',
        secureTextEntry: false,
        button: () => null,
      },
      {
        value: name,
        onChangeText: name => this.setState({ name }),
        placeholder: 'NAME',
        secureTextEntry: false,
        button: () => (
          <TouchableOpacity
            style={{ position: 'absolute', right: 10 }}
            onPress={() => this.setState({ isModal4Visible: true })}
          >
            <Icon.Ionicons
              name="md-help-circle"
              color={Color.font4}
              size={20}
            />
          </TouchableOpacity>
        ),
      },
      {
        value: password,
        onChangeText: password => this.setState({ password }),
        placeholder: 'PASSWORD',
        secureTextEntry: passwordhidden,
        button: () => {
          let icon = '';
          if (passwordhidden) {
            icon = 'md-eye-off';
          } else {
            icon = 'md-eye';
          }
          return (
            <TouchableOpacity
              style={{ position: 'absolute', right: 10 }}
              onPress={() => {
                clearTimeout(TimerPasswrodHidden);
                this.setState(prev => ({
                  passwordhidden: !prev.passwordhidden,
                }));
                TimerPasswrodHidden = setTimeout(
                  () => this.setState({ passwordhidden: true }),
                  30000,
                );
              }}
            >
              <Icon.Ionicons name={icon} color={Color.font4} size={20} />
            </TouchableOpacity>
          );
        },
      },
    ];
    return textInputs.map(textInput => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          value={textInput.value}
          onChangeText={textInput.onChangeText}
          placeholder={textInput.placeholder}
          placeholderTextColor={Color.font4}
          secureTextEntry={textInput.secureTextEntry}
          style={style.textinput}
        />
        {textInput.button()}
      </View>
    ));
  };

  renderButtons = () => {
    const buttons = [
      { onPress: this.signup, title: 'Sign Up' },
      { onPress: this.login, title: 'Log in' },
    ];

    return buttons.map(button => (
      <TouchableOpacity
        style={style.buttonSignUpLogIn}
        onPress={button.onPress}
      >
        <Text style={style.textSignUpLogIn}>{button.title}</Text>
      </TouchableOpacity>
    ));
  };

  renderSubButtons = () => {
    const { navigation } = this.props;
    const { email } = this.state;
    const subButtons = [
      {
        onPress: () =>
          navigation.navigate('resetpassword', {
            setStateEmail: this.setStateEmail.bind(this),
            email,
          }),
        title: 'Forgot password?',
      },
      {
        onPress: () => this.setState({ isModal4Visible: true }),
        title: 'Forgot name?',
      },
    ];
    return subButtons.map(subButton => (
      <TouchableOpacity onPress={subButton.onPress}>
        <Text style={style.subButtons}>{subButton.title}</Text>
      </TouchableOpacity>
    ));
  };

  setStateEmail(email) {
    this.setState({ email });
  }

  renderModal = () => {
    const {
      isModal1Visible,
      isModal2Visible,
      isModal3Visible,
      isModal4Visible,
      modal1Title,
      modal1Paragpaph,
      modal2Message,
    } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <ModalWithImage
          isVisible={isModal1Visible}
          onPressOutSide={() => this.setState({ isModal1Visible: false })}
          closeModal={() => {
            this.setState({ isModal1Visible: false });
          }}
          title={modal1Title}
          message={modal1Paragpaph}
          imageSource={List}
          imageStyle={style.modal1Image}
        />
        <ModalError
          isVisible={isModal2Visible}
          closeModal={() => this.setState({ isModal2Visible: false })}
          error={modal2Message.toString()}
        />
        <ModalWithImage
          isVisible={isModal3Visible}
          onPressOutSide={() => navigation.navigate('emailverify')}
          closeModal={() => navigation.navigate('emailverify')}
          title="Log in successfully!"
          message="Congratulation! Click below to get started."
          imageSource={AccountEmailVerified}
          imageStyle={style.modal3Image}
          renderButton={() => (
            <TouchableOpacity
              style={style.modal3Button}
              onPress={() => navigation.navigate('emailverify')}
            >
              <Text style={{ color: Color.font1, fontSize: 20 }}>OK!</Text>
            </TouchableOpacity>
          )}
        />
        <ModalWithImage
          isVisible={isModal4Visible}
          onPressOutSide={() => this.setState({ isModal4Visible: false })}
          closeModal={() => this.setState({ isModal4Visible: false })}
          title="Hint"
          message="Name is required to create an account, but not necessary to log in."
          imageSource={Info}
          imageStyle={style.modal4Image}
        />
      </View>
    );
  };

  signup = async () => {
    const { email, name, password } = this.state;
    const { navigation } = this.props;
    if (email === '' || name === '' || password === '') {
      this.setState({
        modal1Title: 'Fill all the blanks!',
        modal1Paragpaph:
          'These information is required to create an account. Please fill in the blanks and click Sign Up',
        isModal1Visible: true,
      });
    } else {
      await User.create({ email, password, name })
        .then(() => navigation.navigate('emailverify'))
        .catch(error => {
          this.setState({ modal2Message: error });
          this.setState({ isModal2Visible: true });
        });
    }
  };

  login = () => {
    const { email, password } = this.state;
    const { navigation } = this.props;
    if (email === '' || password === '') {
      this.setState({
        modal1Title: 'Email and Password!',
        modal1Paragpaph:
          'Email and password is required to log in. Please fill in those blanks and try again.',
        isModal1Visible: true,
      });
    } else {
      User.login({ email, password })
        .then(() => navigation.navigate('emailverify'))
        .catch(error => {
          this.setState({ modal2Message: error, isModal2Visible: true });
        });
    }
  };
}

export default withNavigationFocus(Signup);
