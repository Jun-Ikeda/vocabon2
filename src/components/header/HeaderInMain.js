import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';

const style = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingLeft: 24,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
  },
});

/**
 * Header Component in Main screens
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <HeaderInMain
 *  message="Hi, use me in this way" />
 * ```
 */
class HeaderInMain extends Component {
  renderAll = () => {
    const { title } = this.props;
    return (
      <View style={style.headerContainer}>
        <Text style={style.headerTitle}>{title}</Text>
      </View>
    );
  }

  render() {
    return (
      <Header medium renderAll={this.renderAll} />
    );
  }
}

HeaderInMain.propTypes = {
  title: PropTypes.string,
};

HeaderInMain.defaultProps = {
  title: '',
};

export default HeaderInMain;
