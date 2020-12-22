import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import Color from '../../../config/Color';

const titleFontSize = 30;
const normalFontSize = 15;
const narrowIndent = 15;
const wideIndent = 20;

class DeckMenuUtilities extends Component {
  render() {
    const { language, title, user } = this.props;
    return (
      <View style={{ backgroundColor: Color.white1 }}>
        <View>
          <Text style={{
            fontSize: titleFontSize,
            paddingLeft: narrowIndent,
          }}
          >
            {title}
          </Text>
        </View>
        <View style={{
          fontSize: normalFontSize,
          paddingHorizontal: wideIndent,
          paddingVertical: 5,
          flexDirection: 'row',
        }}
        >
          <View style={{ flex: 1 }}>
            <Text>
              Definition in
              <Text style={{
                fontSize: normalFontSize * 1.2,
                fontWeight: 'bold',
              }}
              >
                {` ${language.definition}`}
              </Text>
            </Text>
            <Text>
              Term in
              <Text style={{
                fontSize: normalFontSize * 1.2,
                fontWeight: 'bold',
              }}
              >
                {` ${language.term}`}
              </Text>
            </Text>
          </View>
          <Image
            source={{ uri: 'https://kyoiku.yomiuri.co.jp/MOT_9160.jpg' }}
            style={
            {
              // borderRadius: cardStyle.height * 0.25,
              // height: cardStyle.height * 0.2,
              // width: cardStyle.height * 0.2,
              // position: 'absolute',
              // marginTop: 50,
              // marginLeft: 230,
              // right: 30,
              borderRadius: 45,
              height: 45,
              width: 45,
            }
          }
          />
        </View>
        <TouchableOpacity // renderAttribution()
          onPress={() => Linking.openURL(user.link)}
          style={{
            fontSize: normalFontSize,
            paddingLeft: wideIndent,
          }}
        >
          <Text style={{
            color: Color.gray2,
          }}
          >
            {`Photo by ${user.name} in Unsplash`}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

DeckMenuUtilities.propTypes = {
  title: PropTypes.string,
  language: PropTypes.shape({
    definition: PropTypes.string,
    term: PropTypes.string,
  }),
  user: PropTypes.object,
};

DeckMenuUtilities.defaultProps = {
  title: '',
  language: {
    definition: 'English',
    term: 'English',
  },
  user: {},
};


export default DeckMenuUtilities;
