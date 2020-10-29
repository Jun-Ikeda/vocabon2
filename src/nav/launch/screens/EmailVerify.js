import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Color from '../../../config/Color';
import User from '../../../config/Firebase/User';
import Storage from '../../../config/Storage';

import Timer, { TimerProcess } from '../../../components/Timer';
import { ModalWithImage } from '../../../components/Modal';

import { navigateNav } from '../../Nav';

const EmailImage = require('../../../../assets/illustrations/email.png');
const AccountVerified = require('../../../../assets/illustrations/accountVerified.png');
const DeleteAccount = require('../../../../assets/illustrations/deleteAccount.png');
const Clock = require('../../../../assets/illustrations/clock.png');

const duaration = 300000;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: { height: 200, width: 200, alignSelf: 'center' },
  title: {
    color: Color.font4,
    fontSize: 30,
    textAlign: 'center',
  },
  paragraph: {
    color: Color.font4,
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  emailInParagraph: {
    color: Color.hyperlink1,
  },
  textDeleteAcount: {
    color: Color.font5,
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 13,
  },
  remain: {
    color: Color.font4,
    textAlign: 'center',
    fontSize: 50,
    marginVertical: 20,
  },
  modalConfirmDeleteAccountContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  modalConfirmDeleteAccountButton1: {
    height: 40,
    width: 120,
    borderRadius: 20,
    backgroundColor: Color.primary1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  modalConfirmDeleteAccountButton2: {
    height: 40,
    width: 120,
    borderRadius: 20,
    backgroundColor: Color.background2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: Color.primary1,
  },
  modalTimeupButton: {
    height: 40,
    width: 120,
    borderRadius: 20,
    backgroundColor: Color.primary1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalGetStartedButton: {
    height: 40,
    width: 120,
    borderRadius: 20,
    backgroundColor: Color.primary1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class EmailVerify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalConfirmDeleteAccount: false,
      isModalTimeup: false,
      isModalGetStarted: false,
      remain: 0,
      auth: {
        email: '',
        password: '',
      },
    };
  }

  async UNSAFE_componentWillMount() {
    const auth = await Storage.Function.load({ key: 'auth' });
    const { email, password } = auth;
    this.setState({ auth: { email, password } });
    await User.login({
      email,
      password,
      init: false,
    });
    const { emailVerified } = User.authentication.getCurrentUser();
    if (emailVerified) {
      navigateNav('main');
    } else {
      this.initTimer();
      TimerProcess.setInterval({
        key: 'checkEmailVerified',
        duaration: 2000,
        callback: this.checkEmailVerified,
      });
    }
  }

  render() {
    const { auth } = this.state;
    return (
      <View style={style.container}>
        <View>
          <Image source={EmailImage} style={style.image} />
          <View>
            <Text style={style.title}>Check your Inbox!</Text>
            <Text style={style.remain}>{this.convertSecondToMinSec()}</Text>
            <Text style={style.paragraph}>
              Please verify your email by clicking the link sent to
              {' '}
              <Text style={style.emailInParagraph}>{auth.email}</Text>
              {' '}
              within 5
              minutes. If you do not, this account will be automatically
              deleted.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.setState({ isModalConfirmDeleteAccount: true })}
          >
            <Text style={style.textDeleteAcount}>Wrong email address?</Text>
          </TouchableOpacity>
        </View>
        {this.renderModal()}
      </View>
    );
  }

  sendEmail = () => {
    User.sendEmail();
  };

  checkEmailVerified = async () => {
    await User.authentication.reload();
    const user = await User.authentication.getCurrentUser();
    if (user.emailVerified) {
      TimerProcess.clearInterval({ key: 'checkEmailVerified' });
      this.stop();
      Storage.Function.save({ key: 'auth', data: { emailverified: true } });
      this.setState({ isModalGetStarted: true });
      return null;
    }
    return null;
  };

  initTimer = () => {
    Timer.initTimer(this.triggeredFunction, this.start, remain =>
      this.setState({ remain }));
  };

  start = () => {
    this.sendEmail();
    this.setState({ remain: duaration / 1000 });
    Timer.start(this.triggeredFunction, duaration, remain =>
      this.setState({ remain }));
  };

  stop = () => {
    this.setState({ remain: 0 });
    Timer.stop();
  };

  triggeredFunction = async () => {
    await this.deleteAccount();
    TimerProcess.clearInterval({ key: 'checkEmailVerified' });
    this.setState({ isModalTimeup: true });
  };

  deleteAccount = async () => {
    const {
      auth: { email, password },
    } = this.state;
    await User.remove({ email, password });
  };

  convertSecondToMinSec = () => {
    const { remain } = this.state;
    const min = Math.floor(remain / 60).toString();
    let sec = (remain % 60).toString();
    if (sec.length === 1) {
      sec = `0${sec}`;
    }
    const result = `${min}:${sec}`;
    return result;
  };

  renderModal = () => {
    const {
      isModalConfirmDeleteAccount,
      isModalTimeup,
      isModalGetStarted,
    } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <ModalWithImage
          isVisible={isModalConfirmDeleteAccount}
          closeModal={async () => {
            await this.setState({ isModalConfirmDeleteAccount: false });
            await this.stop();
            await this.deleteAccount();
            TimerProcess.clearInterval({ key: 'checkEmailVerified' });
            navigation.navigate('signup');
          }}
          onPressOutSide={() =>
            this.setState({ isModalConfirmDeleteAccount: false })
          }
          title="Are you sure?"
          message="Please click Confirm to delete this account and sign up again with correct email."
          imageSource={DeleteAccount}
          imageStyle={{ height: 100, width: 100, marginVertical: 25 }}
          renderButton={() => (
            <View style={style.modalConfirmDeleteAccountContainer}>
              <TouchableOpacity
                onPress={async () => {
                  await this.stop();
                  await this.deleteAccount();
                  TimerProcess.clearInterval({ key: 'checkEmailVerified' });
                  navigation.navigate('signup');
                }}
                style={style.modalConfirmDeleteAccountButton1}
              >
                <Text style={{ color: Color.font1, fontSize: 20 }}>
                  Confirm
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ isModalConfirmDeleteAccount: false })
                }
                style={style.modalConfirmDeleteAccountButton2}
              >
                <Text style={{ color: Color.primary1, fontSize: 20 }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <ModalWithImage
          isVisible={isModalTimeup}
          closeModal={() => navigation.navigate('signup')}
          onPressOutSide={() => navigation.navigate('signup')}
          title="Time up!"
          message="We didn't verify your email in time. Please try again."
          imageSource={Clock}
          imageStyle={{ height: 100, width: 100, marginVertical: 25 }}
          renderButton={() => (
            <TouchableOpacity
              style={style.modalTimeupButton}
              onPress={() => navigation.navigate('signup')}
            >
              <Text style={{ color: Color.font1, fontSize: 20 }}>OK!</Text>
            </TouchableOpacity>
          )}
        />
        <ModalWithImage
          isVisible={isModalGetStarted}
          closeModal={() => navigateNav('main')}
          onPressOutSide={() => navigateNav('main')}
          title="Verified successfully!"
          message="Congratulation! Click below to get started."
          imageSource={AccountVerified}
          imageStyle={{ height: 100, width: 100, marginVertical: 25 }}
          renderButton={() => (
            <TouchableOpacity
              style={style.modalGetStartedButton}
              onPress={() => navigateNav('main')}
            >
              <Text style={{ color: Color.font1, fontSize: 20 }}>
                Get Started!
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
}

export default EmailVerify;
