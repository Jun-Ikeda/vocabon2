import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
} from 'react-native';
import Color from '../../../../../../../../config/Color';

const style = StyleSheet.create({
  container: { flex: 1 },
  button: { alignSelf: 'flex-end' },
  text: { color: Color.font5 },
});

export default class Attribution extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { deckinfo } = this.props;
    try {
      if (deckinfo.th.user.name !== 'me') {
        return (
          <View style={style.container}>
            <TouchableOpacity
              style={style.button}
              onPress={() => Linking.openURL(deckinfo.th.user.link)}
            >
              <Text style={style.text}>
                {`Photo by ${deckinfo.th.user.name} / Unsplash`}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }
    } catch (error) {
      return null;
    }
    return null;
  }
}
