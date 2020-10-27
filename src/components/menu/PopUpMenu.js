import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Functions, StyleConst } from '../../config/Const';

const style = StyleSheet.create({
  container: {
    // position: 'absolute',
    // right: 0,
    // left: 0,
    // bottom: 0,
    // top: 0,
    // flex: 1,
    // backgroundColor: 'red',
    ...StyleConst.absoluteFullScreen,
  },
  overlay: {
    flex: 1,
    // backgroundColor: 'blue',
  },
});

class PopUpMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: { height: 0, width: 0 },
    };
  }

  render() {
    const {
      isVisible,
      renderMenu,
      overlayStyle,
      setVisible,
      onLayout,
    } = this.props;
    if (isVisible) {
      return (
        <View style={style.container}>
          <TouchableOpacity
            style={[style.overlay, overlayStyle]}
            onPress={() => setVisible(false)}
            onLayout={onLayout}
          >
            {renderMenu()}
          </TouchableOpacity>
        </View>
      );
    }
    return <View />;
  }
}

PopUpMenu.defaultProps = {
  renderMenu: () => (
    <View style={{ height: 200, width: 150, backgroundColor: 'white' }} />
  ),
};

export default PopUpMenu;
