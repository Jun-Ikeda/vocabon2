import React, { Component } from 'react';
import { View, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Color from '../../../config/Color';
import { StyleConst } from '../../../config/Const';

import Background from '../../../components/Background';

import { BottomTabs, AppContainer } from './AppContainer';
import Drawer from '../drawer/Drawer';

const green = require('../../../../assets/background/powderGreenSmall.png');
const blue = require('../../../../assets/background/powderBlueSmall.png');
const red = require('../../../../assets/background/powderRedSmall.png');

const sources = [green, blue, red];

let navigator;
const drawerWidth = 160;

export const navigateBottomNav = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

class BottomNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointerEvents: 'none',
      tabBarVisible: true,
      layout: { height: 200, width: Dimensions.get('window').width },
    };
    this.currentScreen = 0;
    this.AnimatedIconsValue = BottomTabs.names.map(
      (tab, index) => new Animated.Value(index === 0 ? 1 : 0),
    );
    this.AnimatedBackgroundValue = BottomTabs.names.map(
      (tab, index) => new Animated.Value(index === 0 ? 1 : 0),
    );
    this.AnimatedDrawerValue1 = new Animated.Value(0);
    this.AnimatedDrawerX = this.AnimatedDrawerValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0, drawerWidth / 2],
      extrapolate: 'clamp',
    });
    this.AnimatedDrawerValue2 = new Animated.Value(0);
  }

  async UNSAFE_componentWillMount() {
    // this.AnimatedIconsValue[this.currentScreen].setValue(1);
    // this.AnimatedBackgroundValue[this.currentScreen].setValue(1);
  }

  render() {
    const { pointerEvents } = this.state;
    this.AnimatedDrawerRotate = this.AnimatedDrawerValue1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0rad', this.returnRotateY()],
      extrapolate: 'clamp',
    });
    return (
      <View
        style={this.style.container}
        onLayout={event => {
          const { height, width } = event.nativeEvent.layout;
          this.setState({ layout: { height, width } });
        }}
      >
        <Drawer animated={this.AnimatedDrawerValue2} />
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: 'black',
            transform: [
              { perspective: 850 },
              { translateX: this.AnimatedDrawerX },
              { rotateY: this.AnimatedDrawerRotate },
            ],
          }}
        >
          {this.renderBackgrounds()}
          <AppContainer
            ref={navigatorRef => {
              navigator = navigatorRef;
            }}
          />
          {this.renderIcons()}
          <View
            style={StyleConst.absoluteFullScreen}
            pointerEvents={pointerEvents}
          >
            <TouchableOpacity
              onPress={this.closeDrawer}
              style={this.style.animatedTouchable}
            />
          </View>
        </Animated.View>
      </View>
    );
  }

  style = {
    container: {
      flex: 1,
    },
    animatedButton: index => ({
      opacity: this.returnAnimatedOpacity(index),
    }),
    // animatedContainer:
    icon: {
      alignItems: 'center',
      width: 54,
    },
    animatedText: index => ({
      color: Color.font3,
      fontSize: this.returnFontSize(index),
      opacity: this.AnimatedIconsValue[index],
    }),
    tabbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      bottom: 0,
      right: 0,
      left: 0,
      height: 54,
    },
    background: {
      flex: 1,
      resizeMode: 'contain',
      width: 'auto',
    },
    backgroundOverlay: { backgroundColor: 'black', opacity: 0.1 },
    backgroundContainer: index => ({
      ...StyleConst.absoluteFullScreen,
      opacity: this.AnimatedBackgroundValue[index],
    }),
    animatedTouchable: {
      flex: 1,
    },
  };

  returnRotateY = () => {
    const { layout } = this.state;
    return `-${Math.acos(1 - drawerWidth / layout.width).toString()}rad`;
  };

  renderIcons = () => {
    const { tabBarVisible } = this.state;
    const renderIcon = () =>
      BottomTabs.names.map((tab, index) => (
        <Animated.View style={this.style.animatedButton(index)}>
          <TouchableOpacity
            style={this.style.icon}
            onPress={() => this.navigate(index)}
          >
            {BottomTabs.icon[index]()}
            <Animated.Text style={this.style.animatedText(index)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      ));
    if (tabBarVisible) {
      return <View style={this.style.tabbar}>{renderIcon()}</View>;
    }
    return null;
  };

  setTabVisible = ({ visible }) => {
    this.setState({ tabBarVisible: visible });
  };

  animate = (value, toValue, duration) => {
    Animated.timing(value, {
      toValue,
      duration,
    }).start();
  };

  navigate = index => {
    this.animate(this.AnimatedIconsValue[this.currentScreen], 0, 200);
    this.animate(this.AnimatedIconsValue[index], 1, 200);
    this.animate(this.AnimatedBackgroundValue[this.currentScreen], 0, 500);
    this.animate(this.AnimatedBackgroundValue[index], 1, 500);
    this.currentScreen = index;
    navigateBottomNav(BottomTabs.names[index]);
  };

  renderBackgrounds = () => {
    const renderBackground = () =>
      sources.map((source, index) => (
        <Animated.View style={this.style.backgroundContainer(index)}>
          <Background
            imageSource={source}
            imageStyle={this.style.background}
            overlayStyle={this.style.backgroundOverlay}
          />
        </Animated.View>
      ));
    return (
      <View style={StyleConst.absoluteFullScreen}>{renderBackground()}</View>
    );
  };

  OnSwipedLeft = () => {
    if (this.currentScreen >= 0) {
      if (!(this.currentScreen === BottomTabs.names.length - 1)) {
        this.navigate(this.currentScreen + 1);
      }
    }
  };

  OnSwipedRight = () => {
    if (this.currentScreen > 0) {
      this.navigate(this.currentScreen - 1);
    } else {
      this.openDrawer();
    }
  };

  returnAnimatedOpacity = index =>
    Animated.add(Animated.multiply(this.AnimatedIconsValue[index], 0.4), 0.5);

  returnFontSize = index =>
    Animated.add(Animated.multiply(this.AnimatedIconsValue[index], 9), 3);

  openDrawer = () => {
    this.animate(this.AnimatedDrawerValue1, 1, 300);
    this.animate(this.AnimatedDrawerValue2, 1, 500);
    this.setState({ pointerEvents: 'auto' });
    this.currentScreen -= BottomTabs.names.length;
  };

  closeDrawer = () => {
    this.animate(this.AnimatedDrawerValue1, 0, 300);
    this.animate(this.AnimatedDrawerValue2, 0, 150);
    this.setState({ pointerEvents: 'none' });
    this.currentScreen += BottomTabs.names.length;
  };
}

let bottomRef;

export default class BottomNav extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BottomNavComponent
          ref={ref => {
            bottomRef = ref;
          }}
        />
      </View>
    );
  }
}

export { bottomRef };
