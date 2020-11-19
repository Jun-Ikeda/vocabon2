import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../config/Color';
import { func } from '../config/Const';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    backgroundColor: Color.white1,
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
      <TouchableOpacity
        style={[
          style.carouselContainer,
          {
            width: width * 0.6,
            height: width * 0.5,
            borderRadius: width * 0.05,
          },
        ]}
        onPress={() => {
          console.log('aaa');
        }}
      >
        <Text>{item.title}</Text>
        {/* <Image
          source={{ uri: `https://images.unsplash.com/${deckinfo.th.uri}` }}
          style={[
            style.thumbnail,
            {
              borderTopLeftRadius: width * 0.05,
              borderTopRightRadius: width * 0.05,
            },
          ]}
        /> */}
        {/* <View style={{ padding: width * 0.03 }}>
          <Text style={{ fontSize: 18 }}>{deckinfo.ti}</Text>
          <View style={{ padding: 5, flexDirection: 'row' }}>
            <View>
              <Text style={{ fontSize: 12, color: Color.font5 }}>
                {`${deckinfo.num} words ${v[id]} views`}
              </Text>
              <Text style={{ fontSize: 12, color: Color.font5 }}>
                {`Learn ${deckinfo.lang1} In ${deckinfo.lang2}`}
              </Text>
            </View>
            <UserIcon user={user[id]} size={32} />
          </View>
        </View> */}
      </TouchableOpacity>

    );
  };

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
  width: PropTypes.number,
  containerStyle: PropTypes.object,
};

DeckCarousel.defaultProps = {
  data: [],
  width: 360,
  containerStyle: {},
};

export default DeckCarousel;
