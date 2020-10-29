import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TagInput from 'react-native-tags-input';
import Icon from '../../../../../../../../components/Icon';
import Color from '../../../../../../../../config/Color';
import HeaderWithBackSave from '../../../../../../../../components/header/HeaderWithBackSave';
import Deck from '../../../../../../../../config/Firebase/Deck';

const mainColor = Color.primary6;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
  },
  textInput: {
    height: 40,
    borderColor: Color.background2,
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    alignSelf: 'stretch',
  },
  taginput: {
    flex: 1,
  },
  tag: {
    backgroundColor: Color.font1,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  tagText: {
    color: mainColor,
  },
  deleteIcon: {
    color: Color.font5,
    fontSize: 18,
  },
  inputview: {
    flex: 3,
    padding: 20,
    justifyContent: 'center',
  },
});

class DeckTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: [],
      },
      tagsColor: mainColor,
      tagsText: Color.font1,
    };
    this.inputRef = {};
  }

  updateTagState = state => {
    this.setState({
      tags: state,
    });
  };

  render() {
    const { tags, tagsColor, tagsText } = this.state;
    return (
      <View style={style.container}>
        {this.renderHeader()}
        <View style={style.inputview}>
          <TagInput
            updateState={this.updateTagState}
            tags={tags}
            placeholder="Tags..."
            label="Press Space or Enter to add a tag.When you finished, press Save Button!"
            labelStyle={{ color: Color.font1 }}
            // leftElement={
            //   <Icon.Ionicons name="md-pricetags" style={style.deleteIcon} />
            // }
            leftElementContainerStyle={{ marginLeft: 3 }}
            containerStyle={style.taginput}
            inputContainerStyle={[
              style.textInput,
              { backgroundColor: tagsColor },
            ]}
            inputStyle={{ color: tagsText }}
            onFocus={() =>
              this.setState({
                tagsColor: Color.background2,
                tagsText: mainColor,
              })
            }
            onBlur={() =>
              this.setState({ tagsColor: mainColor, tagsText: '#fff' })
            }
            autoCorrect={false}
            tagStyle={style.tag}
            tagTextStyle={style.tagText}
            // keysForTag=","
            deleteElement={
              <Icon.Ionicons name="md-close" style={style.deleteIcon} />
            }
            ref={inputRef => {
              this.inputRef = inputRef;
            }}
          />
        </View>
        <View style={{ flex: 3 }} />
      </View>
    );
  }

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <HeaderWithBackSave
        title="Tags"
        navigation={navigation}
        onPressRight={this.save}
      />
    );
  };

  componentDidMount() {
    this.inputRef.focus();
    const { navigation } = this.props;
    const deckinfo = navigation.getParam('deckinfo');
    const { tag } = deckinfo;
    const pretagsArray = Object.keys(tag);
    this.setState({ tags: { tag: '', tagsArray: pretagsArray } });
    // this.inputRef.focus();
    // const { navigation } = this.props;
    // const tag = navigation.getParam('tag');
    // const pretagsArray = Object.keys(tag);
    // this.setState({ tags: { tag: '', tagsArray: pretagsArray } });
  }

  save = () => {
    const {
      tags: { tagsArray },
    } = this.state;
    console.log(tagsArray);
    const { navigation } = this.props;
    const updateDeckInfo = navigation.getParam('updateDeckInfo');
    // const deckinfo = navigation.getParam('deckinfo');
    const newTagsObject = {};
    tagsArray.forEach(tag => {
      newTagsObject[tag] = true;
    });
    // deckinfo.tag = newTagsObject;
    console.log({ newTagsObject });
    updateDeckInfo({ tag: newTagsObject });
    navigation.goBack();
    // const {
    //   tags: { tagsArray },
    // } = this.state;
    // console.log(tagsArray);
    // const { navigation } = this.props;
    // const updateDeckInfo = navigation.getParam('updateDeckInfo');
    // const newTagsObject = {};
    // tagsArray.forEach(tag => {
    //   newTagsObject[tag] = true;
    // });
    // console.log({ newTagsObject });
    // updateDeckInfo({ tag: newTagsObject });
    // navigation.goBack();
  };
}

export default DeckTags;
