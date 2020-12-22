import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Linking, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import HeaderWithBack from '../../../../components/header/HeaderWithBack';
import { DeckGeneral } from '../../../../../dev/TestData';

import Color from '../../../../config/Color';
import Unsplash from '../../../../config/Unsplash';

const style = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFill,
    flex: 1,
  },
  countersContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: 240,
    justifyContent: 'space-between',
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
    fontSize: 18
  }
});
const imgHeight = 250;
const normalFontSize = 15;
const titleFontSize = 20;
const wideIndent = 20;
const narrowIndent = 10;

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
      // <View style={{
      //   position: 'absolute',
      // }}
      // >
      <HeaderWithBack
        navigation={navigation}
        style={{
          backgroundColor: 'transparent',
        }}
      />
      // </View>
    );
  };

  renderButtons = () => {
    const { right, left } = this.state;
    const buttons = [
      {
        title: 'Replay',
        num: `(${right.length + left.length})`,
        onPress: () => alert('replay'),
      },
      {
        title: 'Play mistaken cards',
        num: `(${left.length})`,
        onPress: () => alert('play mistaken cards'),
      },
      // {
      //   title: 'Play chosen cards',
      //   num:
      //   onPress: () => alert('play chosen cards'),
      // },
      {
        title: 'Go back to Options',
        num: '',
        onPress: () => alert('go back to options'),
      },
      {
        title: 'Finish this Deck',
        num: '',
        onPress: () => alert('finish this deck'),
      },
    ];

    return buttons.map((button) => (
      <TouchableOpacity style={{
        borderRadius: 10,
        paddingVertical: 10,
        margin: 3,
        backgroundColor: 'white',
        alignItems: 'center',
      }}
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

  render() {
    return (
      <View style={style.container}>
        <View>
          {this.renderThumbnail()}
          <View style={{ position: 'absolute', right: 0, left: 0 }}>
            {this.renderHeader()}
            {this.renderCounter()}
          </View>
        </View>
        <View style={{
          paddingHorizontal: 40,
        }}
        >
          <Text style={{
            fontSize: titleFontSize,
          }}
          >
            Well done!
          </Text>
          <View>
            {this.renderButtons()}
          </View>
        </View>
      </View>
    );
  }
}

PlayResults.propTypes = {
  navigation: PropTypes.object.isRequired,
  // left: PropTypes.array,
  // right: PropTypes.array,
  // uri: PropTypes.string,
};

PlayResults.defaultProps = {
  // left: [],
  // right: [],
  // uri: '',
};

export default PlayResults;
