import React, { Component } from 'react';
import {
  View, StyleSheet, /* Text, */
} from 'react-native';
import Header from '../src/components/header/Header';

import Icon from '../src/components/Icon';
import TempComponent from '../src/components/TempComponent';
import Item from '../src/components/item/Item';
import ItemWithIcon from '../src/components/item/ItemWithIcon';
import ItemWithDescription from '../src/components/item/ItemWithDescription';
import Background from '../src/components/Background';
import TextAdjust from '../src/components/TextAdjust';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'blue',
  },
});

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

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
    <View>
      <Item title="Item" />
      <ItemWithIcon title="Item With Icon" icon={{ name: 'md-settings', collection: 'Ionicons' }} />
      <ItemWithDescription title="Item With Description" description="a" />
    </View>
  )

  // renderPracticeNavigator = () => (
  //   <PracticeNavigator />
  // )

  renderIcons = () => (
    <Icon.Ionicons name="ios-arrow-back" />
    // <Backgrounds
    //   imageSource={{ uri: 'https://m.media-amazon.com/images/I/714TeAw75sL._SS500_.jpg' }}
    //   imageStyle={{ height:
    // />
  )

  renderTempComponent = () => (
    <TempComponent />
  )

  // renderIconimg=() => {
  //   <View>
  //     <Image
  //       style={{
  //         width: 64,
  //         height: 64,
  //       }}
  //       source={require('/assets/background/KnowledgeSmall.jpg')}
  //     />
  //   </View>
  // }

  renderHeader = () => (
    <Header
      style={style.header}
      large
      renderAll={() => <View style={{ flex: 1, backgroundColor: 'red' }} />}
      renderLeft={this.renderIcons}
    />
    // <HeaderWithBack style={style.header} large={false} />
  )

  renderTextAdjust = () => (
    <TextAdjust message="aaaaa" />
  )

  render() {
    return (
      <View style={style.container}>
        {this.renderBackground()}
        {/* {this.renderPracticeNavigator()} */}
        {/* {this.renderIcons()} */}
        {/* {this.renderBackground()} */}
        {this.renderHeader()}
        {this.renderTextAdjust()}
        {/* <Text>Gaku Nagata</Text> */}
        {/* <Play /> */}
        {this.renderItems()}
        {this.renderTempComponent()}
      </View>
    );

    // renderPopUpMenu = () => {
    //   const { menuVisible } = this.state;
    //   return (
    //     <View style={{ flex: 1 /* , backgroundColor: 'purple' */ }}>
    //       <TouchableOpacity onPress={() => this.setState({ menuVisible: true })}>
    //         <Text>a</Text>
    //       </TouchableOpacity>
    //       <PopUpMenuWithItems
    //         isVisible={menuVisible}
    //         setVisible={bool => this.setState({ menuVisible: bool })}
    //         overlayStyle={{ backgroundColor: Color.background3 }}
    //         items={[
    //           {
    //             title: 'test1',
    //             onPress: () => {
    //               console.log('test1');
    //             },
    //           },
    //           {
    //             title: 'test2aaaaaaaaaaaaaa',
    //             onPress: () => {
    //               console.log('test2');
    //             },
    //           },
    //           {
    //             title: 'test3',
    //             onPress: () => {
    //               console.log('test3');
    //             },
    //           },
    //         ]}
    //         renderMenu={() => (
    //          <TouchableOpacity
    //            onPress={() => console.log('test')}
    //            style={{ height: 200, width: 150, backgroundColor: 'white' }}>
    //            <Text>Contents</Text>
    //          </TouchableOpacity>
    //         )}
    //       />
    //     </View>
    //   );
    // };
    // renderKeyCode = () => <textarea onKeyDown={e => props.onKeyDown(e)} />;

  // renderItemComponent = () => (
  //   <View style={{ flex: 1 }}>
  //     <Item
  //       title="Item"
  //       containerStyle={style.item}
  //       onPress={() => console.log('aaa')}
  //     />
  //     <ItemWithIcon
  //       title="ItemWithIcon"
  //       containerStyle={style.itemwithicon}
  //       icon={{ collection: 'Ionicons', name: 'ios-arrow-back' }}
  //     />
  //     <ItemWithDescriptionRight
  //       title="ItemWithDescriptionRight"
  //       containerStyle={style.itemdescription}
  //       description="description"
  //     />
  //     {/* <SettingItem
  //       title="SettingItem"
  //       icon={{ collection: 'Ionicons', name: 'md-notifications' }}
  //     /> */}
  //   </View>
  // );
  }
}

export default Demo;
