import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  // TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import DeckSwiper from 'react-native-deck-swiper';

import { Button } from 'react-native-paper';
import { func } from '../../../../config/Const';
import Color from '../../../../config/Color';

import HeaderWithBack from '../../../../components/header/HeaderWithBack';

import PlayCard from './PlayCard';
import PlayCounter from './PlayCounter';
import PlayButtons from './PlayButtons';

import { DeckGeneral, DeckContent } from '../../../../../dev/TestData';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.swiper = {};
    this.card = {};
    this.state = {
      layout: { height: 0, width: 0 },
      deckG: { thumbnail: { uri: '' } },
      deckC: [],
      right: [],
      left: [],
    };
  }

  componentDidMount() {
    this.setState({ deckG: DeckGeneral[0] });
    this.setState({ deckC: DeckContent[1] });
  }

  onSwipedRight = (index) => {
    const { right } = this.state;
    right.push(index);
    this.setState({ right });
  };

  onSwipedLeft = (index) => {
    const { left } = this.state;
    left.push(index);
    this.setState({ left });
  };

  swipeBack = () => {
    this.swiper.swipeBack(this.swiper.previousCardIndex);
    const { right, left } = this.state;
    const rightNew = right.filter(
      (hello) => hello !== right.length + left.length - 1,
    );
    const leftNew = left.filter(
      (goodbye) => goodbye !== right.length + left.length - 1,
    );
    this.setState({ right: rightNew, left: leftNew });
  };

  // onSwipedAll = () => {
  //   const { right, left, deckG: { thumbnail: { uri } } } = this.state;
  //   const { navigation } = this.props;
  //   navigation.navigate('results', { right, left, uri });
  // };

  renderHeader = () => {
    const { deckG: { title } } = this.state;
    const { navigation } = this.props;
    return (
      <HeaderWithBack
        navigation={navigation}
        title={title}
      />
    );
  }

  renderSwiper = () => {
    const { layout: { height, width }, deckC } = this.state;
    if (!(height === 0)) {
      return (
        <DeckSwiper
          cards={deckC}
          renderCard={(content) => (
            <PlayCard
              content={content}
              ref={(ref) => { this.card = ref; }}
            />
          )}
          onSwipedRight={this.onSwipedRight}
          onSwipedLeft={this.onSwipedLeft}
          disableTopSwipe
          disableBottomSwipe
          horizontalThreshold={width / 8}
          cardIndex={0}
          backgroundColor="transparent"
          ref={(ref) => { this.swiper = ref; }}
          stackSize={1}
          cardVerticalMargin={20}
          useViewOverflow={false}
          cardStyle={{ height: height - 40 }}
        />
      );
    }
    return null;
  };

  renderFinishButton = () => {
    const {
      deckC, right, left, deckG: { thumbnail: { uri } },
    } = this.state;
    const { navigation } = this.props;
    const finish = (deckC.length === right.length + left.length);
    if (finish) {
      return (
        <View style={[StyleSheet.absoluteFill, { right: 20, left: 20, justifyContent: 'center' }]}>
          <Button color={Color.green3} mode="contained" onPress={() => navigation.push('results', { right, left, uri })}>
            Show Results
          </Button>
        </View>
      );
    }
    return null;
  }

  renderCounter= () => {
    const { left, right } = this.state;
    return (
      <PlayCounter swipedLeft={left} swipedRight={right} />
    );
  }

  renderButtons = () => {
    const { deckC, left, right } = this.state;
    return (
      <PlayButtons
        flip={() => this.card.flip()}
        finished={deckC.length === left.length + right.length}
        swipeLeft={() => this.swiper.swipeLeft()}
        swipeRight={() => this.swiper.swipeRight()}
        swipeBack={() => this.swipeBack()}
      />
    );
  };

  render() {
    return (
      <View style={style.container}>
        {this.renderHeader()}
        <View style={{ flex: 1 }}>
          <View
            style={style.container}
            onLayout={(e) => this.setState({ layout: func.onLayoutContainer(e) })}
          >
            {this.renderSwiper()}
            {this.renderFinishButton()}
          </View>
          {this.renderCounter()}
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}

Swiper.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Swiper.defaultProps = {
};

export default Swiper;

/* import React, { Component } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';

import Color from '../../../config/Color';
import { func } from '../../../config/Const';

import HeaderWithBack from '../../../components/header/HeaderWithBack';

import { DeckGeneral, DeckContent } from '../../../../dev/TestData';

import PlayCounter from './PlayCounter';
import PlayButtons from './PlayButtons';
import PlayCard from './PlayCard';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  deckswiperContainer: {
    flex: 1,
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
    this.card = {};
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
        <PlayButtons swiper={this.swiper} card={this.card}  flip={() => this.card.flip()} />
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
            <PlayCard term={card.term} ref={(cardRef) => { this.card = cardRef; }} />
          )}
          ref={(swiperRef) => {
            this.swiper = swiperRef;
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
 */
