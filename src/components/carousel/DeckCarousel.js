import React, { Component } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Color from '../../config/Color';
import { func } from '../../config/Const';

import DeckCard from './DeckCard';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * DeckCarousel Component
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <DeckCarousel
 *  message="Hi, use me in this way"
 * />
 * ```
 */
class DeckCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      layout: { height: 300, width: 400 },
    };
    this.carouselRef = {};
  }

  renderItem = ({ item }) => {
    const { layout: { width } } = this.state;
    return (
      <DeckCard
        item={item}
        cardStyle={{
          width: width * 0.6,
          height: width * 0.45,
          borderRadius: width * 0.05,
        }}
      />
    );
  }

  render() {
    const { active, layout: { height, width } } = this.state;
    const { data, containerStyle } = this.props;
    return (
      <View
        style={[style.container, containerStyle]}
        onLayout={(e) => {
          this.setState({ layout: func.onLayoutContainer(e) });
        }}
      >
        <Carousel
          data={data}
          renderItem={this.renderItem}
          itemWidth={width * 0.6}
          sliderWidth={width * 1.0}
          onSnapToItem={(index) => this.setState({ active: index })}
          ref={(carouselRef) => {
            this.carouselRef = carouselRef;
          }}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={active}
          containerStyle={{ paddingVertical: 15 }}
          dotStyle={{ backgroundColor: Color.white3 }}
        />
      </View>
    );
  }
}

DeckCarousel.propTypes = {
  data: PropTypes.array,
  containerStyle: PropTypes.object,
};

DeckCarousel.defaultProps = {
  data: [],
  containerStyle: {},
};

export default DeckCarousel;