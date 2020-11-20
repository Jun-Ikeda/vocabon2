import React, { Component } from 'react';
import {
  View, Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import HeaderInMain from '../../../../components/header/HeaderInMain';
import DeckCarousel from '../../../../components/carousel/DeckCarousel';
import AddButton from './create/AddButton';

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
    const {} = this.state;
    return (
      <View>
        <Text>{title}</Text>
        <DeckCarousel data={[{ title: 'this' }, { title: 'is' }, { title: 'test' }]} />
      </View>
    );
  }

  renderButton = () => (
    <AddButton />
  )

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

export default Home;
