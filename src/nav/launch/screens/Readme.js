import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';

import { HeaderConst } from '../../../config/Const';
import Storage from '../../../config/Storage';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  contents: {
    paddingTop: HeaderConst.paddingTopByOS(),
  },
  page: {
    alignItems: 'center',
  },
});

class Readme extends Component {
  scrollview = null;

  constructor(props) {
    super(props);
    this.AnimatedValue = new Animated.Value(0);
    this.state = {
      layout: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      },
    };
  }

  async UNSAFE_componentWillMount() {
    const { navigation } = this.props;
    const readme = await Storage.Function.load({ key: 'readme' });
    if (readme) {
      navigation.navigate('signup');
    }
  }

  render() {
    const { layout } = this.state;
    const AnimatedBackgroundColor = this.AnimatedValue.interpolate({
      inputRange: [...Array(this.pages.length)].map((_, i) => i * layout.width),
      outputRange: [...Array(this.pages.length)].map(
        (_, i) => this.pages[i].color,
      ),
      extrapolate: 'clamp',
    });
    return (
      <View style={style.container}>
        <Animated.View
          style={[
            style.background,
            { backgroundColor: AnimatedBackgroundColor },
          ]}
          onLayout={async ({ nativeEvent }) => {
            this.setState({
              layout: {
                height: nativeEvent.layout.height,
                width: nativeEvent.layout.width,
              },
            });
            await this.scrollview.scrollTo({ x: 0, y: 0, animated: false });
          }}
        />
        <ScrollView
          style={style.contents}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.AnimatedValue } } },
          ])}
          ref={scrollview => {
            this.scrollview = scrollview;
          }}
        >
          {this.renderPages()}
        </ScrollView>
      </View>
    );
  }

  renderPages = () => {
    const {
      layout: { height, width },
    } = this.state;
    return this.pages.map(page => (
      <View style={[style.page, { height, width }]}>
        <Text>{page.title}</Text>
        {page.content()}
        <Text>{page.description}</Text>
      </View>
    ));
  };

  pages = [
    {
      title: 'Thank you for downloading {APPNAME}',
      color: 'red',
      content: () => {},
      description: '',
    },
    {
      title: 'You can create your own Word Deck',
      color: 'blue',
      content: () => {},
      description: '',
    },
    {
      title: 'You can also use Decks of all users',
      color: 'green',
      content: () => (
        <TouchableOpacity
          style={{ backgroundColor: 'blue' }}
          onPress={this.gotoSignup}
        >
          <Text>Get Started</Text>
        </TouchableOpacity>
      ),
      description: '',
    },
  ];

  gotoSignup = async () => {
    const { navigation } = this.props;
    await Storage.Function.save({ key: 'readme', data: true, merge: false });
    navigation.navigate('signup');
  };
}

export default Readme;
