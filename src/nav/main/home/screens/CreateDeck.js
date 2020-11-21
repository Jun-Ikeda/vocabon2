import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';
// import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
  },
  itemTitleBox: {
    marginVertical: 20,
    borderWidth: 1,
  },
  itemTitle: {
    fontSize: 20,
  },
});

/* <TextInput
          value={text}
          onChangeText={text => this.setState({ text })}
        /> */

/**
 * Template Component
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <CreateDeck
 *  message="Hi, use me in this way" />
 * ```
 */

class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      value: '',
      language: {
        term: '',
        definition: '',
      },
    };
  }

  renderDeckName = () => {
    const { title } = this.state;
    return (
      <View style={style.itemContainer}>
        <View style={style.itemTitleBox}>
          <Text style={style.itemTitle}>Title</Text>
        </View>
        <View style={style.input}>
          <TextInput
            value={title}
            onChangeText={(title) => this.setState({ title })}
          />
        </View>
      </View>
    );
  }

  renderLanguageSelection = () => (
    <View style={style.itemContainer}>
      <View style={style.itemTitleBox}>
        <Text style={style.itemTitle}>Language</Text>
      </View>
      <RNPickerSelect
        placeholder={{ label: 'Term', value: '' }}
        onValueChange={(term) => this.setState((prev) => ({
          language: {
            term,
            definition: prev.definition,
          },
        }))}
        items={[
          { label: 'English', value: 'English' },
          { label: 'Japanese', value: 'Japanese' },
          { label: 'Spanish', value: 'Spanish' },
          { label: 'Chinese', value: 'Chinese' },
          { label: 'French', value: 'French' },
          { label: 'Korean', value: 'Korean' },
        ]}
      />
      <RNPickerSelect
        placeholder={{ label: 'Definition', value: '' }}
        onValueChange={(definition) => this.setState((prev) => ({
          language: {
            term: prev.term,
            definition,
          },
        }))}
        items={[
          { label: 'English', value: 'English' },
          { label: 'Japanese', value: 'Japanese' },
          { label: 'Spanish', value: 'Spanish' },
          { label: 'Chinese', value: 'Chinese' },
          { label: 'French', value: 'French' },
          { label: 'Korean', value: 'Korean' },
        ]}
      />
    </View>
  )

  render() {
    // const { message } = this.props;
    return (
      <View style={style.container}>
        {this.renderDeckName()}
        {this.renderLanguageSelection()}
        {/* <Text>{message}</Text> */}
      </View>
    );
  }
}

CreateDeck.propTypes = {
  // message: PropTypes.string,
};

CreateDeck.defaultProps = {
  // message: 'This is Template Component',
};

export default CreateDeck;
