import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';
import { Button } from 'react-native-elements';

import Color from '../../../config/Color';
import { func } from '../../../config/Const';

import HeaderWithBack from '../../../components/header/HeaderWithBack';

import { DeckGeneral, DeckContent } from '../../../../dev/TestData';

import PlayCounter from './PlayCounter';
import Icon from '../../../components/Icon';
import PlayButtons from './PlayButtons';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  deckswiperContainer: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: { height: 0, width: 0 },
      swipedRight: [],
      swipedLeft: [],
    };
    this.swiper = {};
  }

  onSwipedRight = (cardIndex) => {
    const { swipedRight } = this.state;
    swipedRight.push(cardIndex);
    this.setState({ swipedRight });
  }

  onSwipedLeft = (cardIndex) => {
    const { swipedLeft } = this.state;
    swipedLeft.push(cardIndex);
    this.setState({ swipedLeft });
  }

  onSwipedAll = () => {
    const { swipedRight, swipedLeft } = this.state;
    alert(`Left: ${JSON.stringify(swipedLeft)}  Right: ${JSON.stringify(swipedRight)}`);
  }

  renderHeader = () => (
    <HeaderWithBack title={DeckGeneral[0].title} />
  )

  renderCounter = () => {
    const { swipedRight, swipedLeft } = this.state;
    return (
      <PlayCounter swipedRight={swipedRight} swipedLeft={swipedLeft} />
    );
  }

  renderButtons = () => {
    const { layout: { height } } = this.state;
    if (!(height === 0)) {
      return (
        <PlayButtons swiper={this.swiper} />
      );
    }
    return null;
  }

  renderDeckSwiper = () => {
    const { layout: { height } } = this.state;
    if (!(height === 0)) {
      return (
        <DeckSwiper
          cards={DeckContent}
          renderCard={(card) => (
            <View style={style.card}>
              <Text style={style.text}>{card.term}</Text>
              <Text style={style.text}>{card.definition}</Text>
              <Text style={style.text}>{card.example}</Text>
            </View>
          )}
          ref={(swiper) => {
            this.swiper = swiper;
          }}
          onSwipedAll={this.onSwipedAll}
          onSwipedRight={this.onSwipedRight}
          onSwipedLeft={this.onSwipedLeft}
          disableTopSwipe
          disableBottomSwipe
          backgroundColor={Color.defaultBackground}
          cardIndex={0}
          stackSize={3}
          cardStyle={{ height: height - 120 }}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <View
        style={style.container}
      >
        {this.renderHeader()}
        <View
          style={style.deckswiperContainer}
          onLayout={(e) => this.setState({ layout: func.onLayoutContainer(e) })}
        >
          {this.renderDeckSwiper()}
        </View>
        {this.renderCounter()}
        {this.renderButtons()}
      </View>
    );
  }
}

export default Play;
