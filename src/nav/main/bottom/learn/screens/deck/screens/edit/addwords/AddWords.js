import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../../../../../../../../components/header/Header';
import Icon from '../../../../../../../../../components/Icon';
import Color from '../../../../../../../../../config/Color';
// import Deck from '../../../../../../../../config/Firebase/Deck';
// import { TextInput } from 'react-native-gesture-handler';
import { StyleConst/* , Functions */ } from '../../../../../../../../../config/Const';

import ControlButtons from './ControlButtons';
import Page from './Page';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background1,
  },
  headerIcon: {
    color: Color.font2,
    fontSize: 25,
  },
  contentContainer: {
    flex: 1,
  },
  page: {},
  pageContainer: {},
  absoluteBox: {
    ...StyleConst.absoluteFullScreen,
    // backgroundColor: 'blue',
  },
});

class AddWords extends Component {
  constructor(props) {
    super(props);
    this.scrollviewRef = {};
    this.state = {
      word: '',
      def: '',
      eg: '',
      syn: '',
      ant: '',
      cf: '',
      bundle: [],
      // layout: {
      //   height: 0,
      //   width: Dimensions.get('window').width,
      // },
      // currentWord: 0,
      // currentScreen: 0,
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Header
          renderLeft={() => (
            <Icon.Ionicons name="ios-arrow-back" style={style.headerIcon} />
          )}
          onPressLeft={() => navigation.goBack()}
          renderTitle={() => <Text>Add Words</Text>}
        />
        <View style={style.contentContainer}>
          {this.renderEmptyAbsoluteBox()}
          {this.renderSwipeCard()}
          {this.renderButtons()}
        </View>
      </View>
    );
  }

  renderEmptyAbsoluteBox = () => (
    <View
      // onLayout={e => {
      //   const layout = Functions.onLayoutContainer(e);
      //   this.setState({ layout });
      // }}
      style={style.absoluteBox}
    />
  );

  renderSwipeCard = () => {
    const { word, def, eg, syn, ant, cf } = this.state;
    return (
      <Page
        page={{ word, def, eg, syn, ant, cf }}
        setState={state => this.setState(state)}
      />
    );
  };

  renderButtons = () => {
    const { word, def, eg, syn, ant, cf, bundle } = this.state;
    const { navigation } = this.props;
    return (
      <ControlButtons
        page={{ word, def, eg, syn, ant, cf }}
        bundle={bundle}
        navigation={navigation}
        setState={state => this.setState(state)}
      />
    );
  };
}

export default AddWords;
