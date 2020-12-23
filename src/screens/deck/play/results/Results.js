import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import HeaderWithBack from '../../../../components/header/HeaderWithBack';
// import { DeckGeneral } from '../../../../../dev/TestData';

import Color from '../../../../config/Color';
import Unsplash from '../../../../config/Unsplash';

const imgHeight = 250;
const titleFontSize = 20;

const style = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFill,
    flex: 1,
  },
  overlayContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
  },
  countersContainer: {
    flex: 1,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  counter: {
    alignItems: 'center',
  },
  counterText: {
    color: Color.white1,
    fontSize: 26,
  },
  counterNum: {
    color: Color.white1,
    fontSize: 44,
  },
  buttonTitle: {
    fontSize: 18,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    margin: 3,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

class PlayResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: [],
      right: [],
      uri: '',
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const left = navigation.getParam('left');
    const right = navigation.getParam('right');
    const uri = navigation.getParam('uri');
    this.setState({ left, right, uri });
  }

  renderThumbnail = () => {
    const { uri } = this.state;
    return (
      <Image
        source={{ uri: Unsplash.unshortenURI(uri) }}
        style={{
          height: imgHeight,
          width: '100%',
          opacity: 0.7,
        }}
      />
    );
  }

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <HeaderWithBack
        navigation={navigation}
        style={{
          backgroundColor: 'transparent',
        }}
      />
    );
  };

  renderButtons = () => {
    const { right, left } = this.state;
    const { navigation } = this.props;
    const buttons = [
      {
        title: 'Replay',
        num: `(${right.length + left.length})`,
        onPress: () => navigation.push('play'),
      },
      {
        title: 'Play mistaken cards',
        num: `(${left.length})`,
        onPress: () => alert('play mistaken cards'),
      },
      {
        title: 'Options', // go back to options
        num: '',
        onPress: () => navigation.navigate('playoption'),
      },
      {
        title: 'Finish this Deck',
        num: '',
        onPress: () => navigation.navigate('home'),
      },
    ];

    return buttons.map((button) => (
      <TouchableOpacity
        style={style.button}
        onPress={button.onPress}
      >
        <Text style={style.buttonTitle}>{`${button.title} ${button.num}`}</Text>
      </TouchableOpacity>
    ));
  }

  renderCounter = () => {
    const { left, right } = this.state;
    const counters = [
      { title: 'Marked', num: left.length },
      { title: 'Clear', num: right.length },
    ];
    return (
      <View style={style.countersContainer}>
        {counters.map((counter) => (
          <View style={style.counter}>
            <Text style={style.counterText}>{counter.title}</Text>
            <Text style={style.counterNum}>{counter.num}</Text>
          </View>
        ))}
      </View>
    );
  }

  renderMessage = () => {
    const { right, left } = this.state;
    let message = '';
    if (right.length / (right.length + left.length) < 0.4) {
      message = 'Break your leg!';
    } else if ( right.length / (right.length + left.length) < 0.6) {
      message = 'You could do better!';
    } else if (right.length / (right.length + left.length) < 0.8) {
      message = 'Almost perfect!';
    } else {
      message = 'Well done!';
    }
    return (
      <Text style={{
        fontSize: titleFontSize,
        paddingVertical: 10,
      }}
      >
        {message}
      </Text>
    );
  }

  render() {
    return (
      <View style={style.container}>
        <View>
          {this.renderThumbnail()}
          <View style={style.overlayContainer}>
            {this.renderHeader()}
            {this.renderCounter()}
          </View>
        </View>
        <View style={{
          paddingHorizontal: 40,
        }}
        >
          {this.renderMessage()}
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}

PlayResults.propTypes = {
  navigation: PropTypes.object.isRequired,
};

PlayResults.defaultProps = {
};

export default PlayResults;
