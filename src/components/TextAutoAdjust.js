import React, { Component } from 'react';
import { Text } from 'react-native';

class TextAutoAdjust extends Component {
  constructor(props) {
    super(props);
    const { style } = this.props;
    this.state = {
      currentFont: style.fontSize,
    };
    this.CopyStyle = JSON.parse(JSON.stringify(style));
    delete this.CopyStyle.height;
    delete this.CopyStyle.width;
    delete this.CopyStyle.fontSize;
  }

  render() {
    const { children, numberOfLines } = this.props;
    const { currentFont } = this.state;
    return (
      <Text
        numberOfLines={numberOfLines}
        adjustsFontSizeToFit
        style={[this.CopyStyle, { fontSize: currentFont }]}
        onTextLayout={e => {
          const { lines } = e.nativeEvent;
          if (lines.length > numberOfLines) {
            this.setState(prev => ({ currentFont: prev.currentFont - 1 }));
          }
        }}
      >
        {children}
      </Text>
    );
  }
}

export default TextAutoAdjust;
