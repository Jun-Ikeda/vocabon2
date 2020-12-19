import React, { Component } from 'react';
import {
  View, StyleSheet, /* TouchableOpacity, */ Text, Image,
} from 'react-native';
import { Provider } from 'react-native-paper';
import { Button, Card, CheckBox } from 'react-native-elements';

import Header from '../src/components/header/Header';
import Icon from '../src/components/Icon';
import TempComponent from '../src/components/TempComponent';
import Item from '../src/components/item/Item';
import ItemWithIcon from '../src/components/item/ItemWithIcon';
import ItemWithDescription from '../src/components/item/ItemWithDescription';
import Background from '../src/components/Background';
import TextAdjust from '../src/components/TextAdjust';
import PopUpMenu from '../src/components/menu/PopUpMenu';
import UserIcon from '../src/components/UserIcon';
import DeckCarousel from '../src/components/carousel/DeckCarousel';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
});

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      isChecked: false,
    };
  }

  renderHeader = () => (
    <Header
      style={style.header}
      renderLeft={this.renderIcons}
      renderTitle={() => <Text>aaa</Text>}
    />
  )

  renderBackground = () => (
    <Background
      imageStyle={{ resizeMoede: 'cover', width: 'auto', flex: 1 }}
      imageSource={{ uri: 'https://images.unsplash.com/photo-1605491654512-cab6c6f016bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }}
      blurRadius={0}
      overlayColor="#ffffff"
      overlayOpacity={0.6}
    />
  )

  renderItems= () => (
    <View style={{ flex: 1 }}>
      <Item title="Item" onPress={() => this.setState({ menuVisible: true })} />
      <ItemWithIcon
        title="Item With Icon"
        icon={{ name: 'md-settings', collection: 'Ionicons' }}
        onPress={() => console.log('demo pressed')}
      />
      <ItemWithDescription
        title="Item With Description"
        description="a"
        onPress={() => console.log('demo pressed')}
      />
    </View>
  )

  renderIcons = () => (
    <Icon.Ionicons name="ios-arrow-back" />
  )

  renderTempComponent = () => (
    <TempComponent />
  )

  renderMenu = () => {
    const { menuVisible } = this.state;
    return (
      <PopUpMenu
        isVisible={menuVisible}
        setVisible={(bool) => this.setState({ menuVisible: bool })}
      />
    );
  }

  renderUserIcon = () => (
    <UserIcon
      user={{ name: 'Vocabon', background: '#53A1B3' }}
      size={52}
    />
  )

  renderCarousel = () => (
    <DeckCarousel data={[{ title: 'this' }, { title: 'is' }, { title: 'test' }]} />
  )

  renderTextAdjust = () => (
    <TextAdjust message="aaaaa" />
  )

  renderPaper = () => (
    <Button icon="camera" mode="contained" onPress={() => console.log('pressed')}>Press me</Button>
  )

  renderElements = () => (
    <View>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title>CARD of shimpei</Card.Title>
        <Card.Divider />
        <View
          style={{
            position: 'relative',
            alignItems: 'center',
          }}
        >
          <Image
            style={{ width: '100%', height: 300 }}
            resizeMode="contain"
            source={{
              uri:
              'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4',
            }}
          />
          <Text>sekibun no oni ni naritai</Text>
        </View>
      </Card>
      <Button
        buttonStyle={{
          width: 180,
          backgroundColor: '#00F',
        }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: '#00F',
        }}
        disabledTitleStyle={{ color: '00F' }}
        linearGradientProps={null}
        icon={<Icon name="react" size={15} color="#0FF" />}
        iconContainerStyle={{ background: '#000' }}
        loading
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => alert('otukare')}
        title="Hello"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
        type="clear"
      />

    </View>
  )

  render() {
    return (
      <Provider>
        <View style={style.container}>
          {/* {this.renderBackground()} */}
          {this.renderHeader()}
          {/* {this.renderItems()} */}
          {/* {this.renderTempComponent()} */}
          {/* {this.renderTextAdjust()} */}
          {/* {this.renderUserIcon()} */}
          {/* {this.renderCarousel()} */}
          {/* {this.renderMenu()} */}
          {/* {this.renderPaper()} */}
          {this.renderElements()}
        </View>
      </Provider>
    );
  }
}

export default Demo;
