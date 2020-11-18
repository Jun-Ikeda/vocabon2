import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../config/Color';

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
    };
    this.carouselRef = {};
  }

  renderItem = ({ item }) => (
    <View style={{ backgroundColor: 'purple' }}>
      <Text>{item.title}</Text>
    </View>
  );

  render() {
    const { active } = this.state;
    const { data, width, containerStyle } = this.props;
    return (
      <View
        style={[style.container, containerStyle]}
        onLayout={() => {}}
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
  width: PropTypes.number,
  containerStyle: PropTypes.object,
};

DeckCarousel.defaultProps = {
  data: [],
  width: 360,
  containerStyle: {},
};

export default DeckCarousel;
