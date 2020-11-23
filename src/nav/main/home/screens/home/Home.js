import React, { Component } from 'react';
import {
  View, Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import HeaderInMain from '../../../../../components/header/HeaderInMain';
import DeckCarousel from '../../../../../components/carousel/DeckCarousel';
import AddButton from './AddButton';

// 使ってないかもだけど消さないで
import { Deck } from '../../../../../../dev/TestData';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderRow = ({ title }) => {
    const { navigation } = this.props;
    return (
      <View>
        <Text>{title}</Text>
        <DeckCarousel
          data={[{ title: 'this' }, { title: 'is' }, { title: 'test' }]}
          onPress={() => navigation.navigate('deckmenu', { deck: Deck[0] })}
        />
      </View>
    );
  }

  renderButton = () => {
    const { navigation } = this.props;
    return (
      <AddButton navigation={navigation} />
    );
  }

  render() {
    return (
      <View style={style.container}>
        <ScrollView style={style.scrollContainer}>
          <HeaderInMain title="Home" />
          {this.renderRow({ title: 'LOCAL' })}
          {this.renderRow({ title: 'BOOKMARK' })}
          {this.renderRow({ title: 'BOOKMARK' })}
          {this.renderRow({ title: 'BOOKMARK' })}
          {this.renderRow({ title: 'BOOKMARK' })}
          {this.renderRow({ title: 'BOOKMARK' })}
          {this.renderRow({ title: 'BOOKMARK' })}
          {this.renderRow({ title: 'BOOKMARK' })}
          {this.renderRow({ title: 'BOOKMARK' })}
          {this.renderRow({ title: 'BOOKMARK' })}
        </ScrollView>
        {this.renderButton()}
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
