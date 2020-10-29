import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Functions, HeaderConst, StyleConst } from '../../../../../../../../config/Const';
import Color from '../../../../../../../../config/Color';

import Header from '../../../../../../../../components/header/Header';
import Icon from '../../../../../../../../components/Icon';
import UserIcon from '../../../../../../../../components/UserIcon';

import { bottomRef } from '../../../../../BottomNav';
import Attribution from './Attribution';
import DeckButtons from './Buttons';

const AnimatedIonicons = Animatable.createAnimatableComponent(Icon.Ionicons);

const headerMinPadding = HeaderConst.heightMin + HeaderConst.paddingTopByOS();

const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Color.primary5,
  },
  headerIcon: {
    fontSize: 25,
    color: Color.font3,
  },
  deckinfoContainer: {
    flex: 1,
    // backgroundColor: Color.background1,
  },
  headerContainer: {},
  titleContainer: {
    position: 'absolute',
    flexDirection: 'row',
  },
  animateImage: {
    width: 'auto',
    ...StyleConst.absoluteFullScreen,
    resizeMode: 'cover',
  },
  usericon: {},
  infoContainer: { flex: 1 },
  contentContaierSmall: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContaier: {
    backgroundColor: Color.background1,
    padding: 5,
  },
  photographerButton: {
    alignItems: 'flex-end',
    flex: 1,
  },
  gesture: {
    ...StyleConst.absoluteFullScreen,
  },
  deckButtonContainer: {
    flexDirection: 'row',
  },
  deckButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  deckButtonTitle: {
    fontSize: 15,
  },
  deckButtonIcon: {
    fontSize: 20,
  },
});

class DeckMenu extends Component {
  constructor(props) {
    super(props);
    this.AnimatedImageValue = new Animated.Value(0);
    this.scrollview = null;
    this.state = {
      id: '',
      deckinfo: {},
      v: 0,
      user: {},
      layout: { height: 0, width: 0 },
      header: { max: HeaderConst.heightMax, min: HeaderConst.heightMin },
      title: { height: 0, width: 0 },
    };
  }

  async UNSAFE_componentWillMount() {
    const { navigation } = this.props;
    const deck = navigation.getParam('deck');
    const user = navigation.getParam('user');
    const v = navigation.getParam('v');
    bottomRef.setTabVisible({ visible: false });
    this.setState({
      id: Object.keys(deck)[0],
      deckinfo: Object.values(deck)[0],
      v,
      user,
    });
  }

  render() {
    return (
      <View
        style={style.container}
        onLayout={({ nativeEvent }) => {
          const { height, width } = nativeEvent.layout;
          this.setState({ layout: { height, width } });
          this.setState({ header: { max: width * 0.66 } });
        }}
      >
        {this.renderAnimated({
          renderContent: () => (
            <View>
              {this.renderContent()}
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
            </View>
          ),
        })}
      </View>
    );
  }

  renderBasicHeader = () => {
    const { navigation } = this.props;
    const {
      header: { max },
    } = this.state;
    const AnimateIconColor = this.AnimatedImageValue.interpolate({
      inputRange: [0, max - headerMinPadding],
      outputRange: [Color.font3, Color.font2],
      extrapolate: 'clamp',
    });
    return (
      <Header
        renderLeft={() => (
          <AnimatedIonicons
            name="ios-arrow-back"
            style={[style.headerIcon, { color: AnimateIconColor }]}
          />
        )}
        onPressLeft={() => navigation.goBack()}
        onLongPressLeft={() => navigation.popToTop()}
        style={style.headerContainer}
      />
    );
  };

  renderAnimated = ({ renderContent }) => {
    try {
      const {
        deckinfo,
        layout: { width },
        header: { max },
        title: { height: titleHeight, width: titleWidth },
      } = this.state;
      // const { navigation } = this.props;
      const animateKeyArray = [
        { key: 'AnimateImageHeight', outputRange: [max, headerMinPadding] },
        {
          key: 'AnimateImageColor',
          outputRange: [Color.transparent2, Color.background1],
        },
        {
          key: 'AnimateTitlePositionX',
          outputRange: [10, (width - titleWidth) / 2],
        },
        {
          key: 'AnimateTitlePositionY',
          outputRange: [
            max - titleHeight,
            (HeaderConst.heightMin - titleHeight) / 2 +
              HeaderConst.paddingTopByOS(),
          ],
        },
        { key: 'AnimateTitleColor', outputRange: [Color.font3, Color.font2] },
        { key: 'AnimateTitleFontSize', outputRange: [48, 20] },
      ];
      const AnimateKey = {};
      animateKeyArray.forEach(key => {
        AnimateKey[key.key] = this.AnimatedImageValue.interpolate({
          inputRange: [0, max - headerMinPadding],
          outputRange: key.outputRange,
          extrapolate: 'clamp',
        });
      });
      const renderImage = () => (
        <View style={StyleConst.absoluteFullScreen}>
          <Image
            source={{ uri: `https://images.unsplash.com/${deckinfo.th.uri}` }}
            style={style.animateImage}
          />
          <Animated.View
            style={{
              backgroundColor: AnimateKey.AnimateImageColor,
              ...StyleConst.absoluteFullScreen,
            }}
          />
        </View>
      );

      const renderTitle = () => (
        <Animated.View
          style={[
            style.titleContainer,
            {
              marginLeft: AnimateKey.AnimateTitlePositionX,
              marginTop: AnimateKey.AnimateTitlePositionY,
            },
          ]}
        >
          <Animated.Text
            onLayout={e => {
              const { height, width } = e.nativeEvent.layout;
              this.setState({ title: { height, width } });
            }}
            style={{
              color: AnimateKey.AnimateTitleColor,
              fontSize: AnimateKey.AnimateTitleFontSize,
            }}
          >
            {deckinfo.ti}
          </Animated.Text>
        </Animated.View>
      );
      return (
        <View style={{ flex: 1 }}>
          <ScrollView
            scrollEventThrottle={16}
            contentContainerStyle={{ paddingTop: max }}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: { contentOffset: { y: this.AnimatedImageValue } },
              },
            ])}
            style={style.deckinfoContainer}
            ref={scrollview => {
              this.scrollview = scrollview;
            }}
            overScrollMode="never"
          >
            {renderContent()}
          </ScrollView>
          <Animated.View
            style={{
              position: 'absolute',
              width,
              height: AnimateKey.AnimateImageHeight,
            }}
          >
            {/* <GestureRecognizer
              onSwipedUp={() => {
                this.scrollview.scrollTo({
                  x: 0,
                  y: max - headerMinPadding,
                  animated: true,
                });
              }}
              onSwipedDown={() => navigation.goBack()}
              config={{
                velocityThreshold: 0.01,
                gestureIsClickThreshold: 0.1,
                directionalOffsetThreshold: 80,
              }}
              style={StyleConst.absoluteFullScreen}
            > */}
            <View style={StyleConst.absoluteFullScreen}>
              {renderImage()}
              {renderTitle()}
              {this.renderBasicHeader()}
              {/* </GestureRecognizer> */}
            </View>
          </Animated.View>
        </View>
      );
    } catch (error) {
      return null;
      // console.log(error);
    }
  };

  renderDeckInfo = () => {
    const { deckinfo, v, user } = this.state;
    const { navigation } = this.props;
    return (
      <View style={style.contentContaierSmall}>
        <View style={style.infoContainer}>
          <Text>{deckinfo.ti}</Text>
          <Text>{`${deckinfo.num} words ${v} viewed`}</Text>
          <Text>{`Learn ${deckinfo.lang1} In ${deckinfo.lang2}`}</Text>
          <Text>
            Tags:
            {Functions.returnTagsInString({ tag: deckinfo.tag })}
          </Text>
        </View>
        <TouchableOpacity
          pointerEvents="box-none"
          onPress={() =>
            navigation.push('usermenu', { user, uid: deckinfo.user })
          }
        >
          <UserIcon style={style.usericon} user={user} size={48} />
        </TouchableOpacity>
      </View>
    );
  };

  renderContent = () => {
    const {
      id,
      deckinfo,
      // v,
      // user,
      layout: { width },
    } = this.state;
    const { navigation } = this.props;
    return (
      <View
        style={[
          style.contentContaier,
          {
            borderBottomLeftRadius: width * 0.08,
            borderBottomRightRadius: width * 0.08,
          },
        ]}
      >
        <Attribution deckinfo={deckinfo} />
        <DeckButtons
          id={id}
          deckinfo={deckinfo}
          navigation={navigation}
          layout={{ width }}
        />
        {this.renderDeckInfo()}
      </View>
    );
  };

  componentWillUnmount() {
    bottomRef.setTabVisible({ visible: true });
  }
}

export default DeckMenu;

/*

BookMark,
Import,
Export,
Duplicate,
Share,
Test,
Analyze
Delete < 薄赤のボタンで

（これらをMoreで出るようにする）

buttons = [
      {
        title: 'Duplicate',
        icon: () => <Icon.Feather name="duplicate" style={style.deckButtonIcon} />,
        onPress: () => {
          navigation.navigate('deckduplicate', { id, deckinfo });
        },
      },
      {
        title: 'Share',
        icon: () => <Icon.Feather name="share" style={style.deckButtonIcon} />,
        onPress: () => {
          navigation.navigate('deckshare', { id, deckinfo });
        },
      },
]
renderFourButtonColumn = (buttons) => {
  ~~~~~~
  ~~~~
  ~
  ~
  ~
  ~
  return (
    ４つのボタをを
  )
}

renderDeckButton = () => {
  this.renderFourButtonColumn(button)
}

renderMore = () => {
  this.renderFourButtonClumn(buttons1)
  this.renderFourButtomColumn(button2)
}

*/

// renderAttribution = () => {
//   const { deckinfo } = this.state;
//   if (deckinfo.th.user.name !== 'me') {
//     return (
//       <TouchableOpacity
//         style={style.photographerButton}
//         onPress={() => Linking.openURL(deckinfo.th.user.link)}
//         pointerEvents="box-none"
//       >
//         <Text style={{ color: Color.font5 /* textAlign: 'right' */ }}>
//           {`Photo by ${deckinfo.th.user.name} / Unsplash`}
//         </Text>
//       </TouchableOpacity>
//     );
//   }
//   return null;
// };

// renderFourButtonColumn = buttons => {
//   const {
//     layout: { width },
//   } = this.state;
//   return (
//     <View style={style.deckButtonContainer}>
//       {buttons.map(button => (
//         <TouchableOpacity
//           style={[style.deckButton, { height: width * 0.25 }]}
//           onPress={button.onPress}
//         >
//           {button.icon()}
//           <Text style={style.deckButtonTitle}>{button.title}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// renderDeckButton = () => {
//   const {
//     id,
//     deckinfo,
//     layout: { width },
//     isAdditionalButtonsVisible,
//   } = this.state;
//   const { navigation } = this.props;
//   const buttons = [
//     {
//       title: 'Play',
//       icon: () => <Icon.Feather name="play" style={style.deckButtonIcon} />,
//       onPress: () => {
//         navigation.navigate('deckplay', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Property',
//       icon: () => (
//         <Icon.Ionicons name="md-list" style={style.deckButtonIcon} />
//       ),
//       onPress: () => {
//         navigation.navigate('deckproperty', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Edit',
//       icon: () => <Icon.Feather name="edit" style={style.deckButtonIcon} />,
//       onPress: () => {
//         navigation.navigate('deckedit', { id, deckinfo });
//       },
//     },
//     {
//       title: isAdditionalButtonsVisible ? 'Close' : 'More',
//       icon: () => (
//         <Icon.Feather
//           name={isAdditionalButtonsVisible ? 'chevron-up' : 'chevron-down'}
//           style={style.deckButtonIcon}
//         />
//       ),
//       onPress: () => {
//         this.setState(prev => ({
//           isAdditionalButtonsVisible: !prev.isAdditionalButtonsVisible,
//         }));
//       },
//     },
//   ];
//   return this.renderFourButtonColumn(buttons);
// };

// renderDeckMoreButton = () => {
//   const { id, deckinfo, isAdditionalButtonsVisible } = this.state;
//   const { navigation } = this.props;
//   const buttons1 = [
//     {
//       title: 'Bookmark',
//       icon: () => (
//         <Icon.Feather name="bookmark" style={style.deckButtonIcon} />
//       ),
//       onPress: () => {
//         navigation.navigate('deckbookmark', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Import',
//       icon: () => (
//         <Icon.Feather name="download" style={style.deckButtonIcon} />
//       ),
//       onPress: () => {
//         navigation.navigate('deckimport', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Export',
//       icon: () => <Icon.Feather name="upload" style={style.deckButtonIcon} />,
//       onPress: () => {
//         navigation.navigate('deckexport', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Duplicate',
//       icon: () => <Icon.Feather name="copy" style={style.deckButtonIcon} />,
//       onPress: () => {
//         navigation.navigate('deckduplicate', { id, deckinfo });
//       },
//     },
//   ];
//   const buttons2 = [
//     {
//       title: 'Share',
//       icon: () => <Icon.Entypo name="share" style={style.deckButtonIcon} />,
//       onPress: () => {
//         navigation.navigate('deckshare', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Test',
//       icon: () => (
//         <Icon.AntDesign name="checkcircleo" style={style.deckButtonIcon} />
//       ),
//       onPress: () => {
//         navigation.navigate('decktest', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Analyze',
//       icon: () => (
//         <Icon.Entypo name="line-graph" style={style.deckButtonIcon} />
//       ),
//       onPress: () => {
//         navigation.navigate('deckanalyze', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Delete',
//       icon: () => <Icon.Feather name="delete" style={style.deckButtonIcon} />,
//       onPress: () => {
//         navigation.navigate('deckdelete', { id, deckinfo });
//       },
//     },
//   ];
//   if (isAdditionalButtonsVisible) {
//     return (
//       <View>
//         {this.renderFourButtonColumn(buttons1)}
//         {this.renderFourButtonColumn(buttons2)}
//       </View>
//     );
//   }
//   return null;
// };

// renderDeckMoreButton2 = () => {
//   const {
//     id,
//     deckinfo,
//   } = this.state;
//   const { navigation } = this.props;
//   const buttons = [
//     {
//       title: 'Share',
//       icon: () => <Icon.Entypo name="share" style={style.deckButtonIcon} />,
//       onPress: () => {
//         navigation.navigate('deckshare', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Test',
//       icon: () => (
//         <Icon.AntDesign name="checkcircleo" style={style.deckButtonIcon} />
//       ),
//       onPress: () => {
//         navigation.navigate('decktest', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Analyze',
//       icon: () => (
//         <Icon.Entypo name="line-graph" style={style.deckButtonIcon} />
//       ),
//       onPress: () => {
//         navigation.navigate('deckanalyze', { id, deckinfo });
//       },
//     },
//     {
//       title: 'Delete',
//       icon: () => <Icon.Feather name="delete" style={style.deckButtonIcon} />,
//       onPress: () => {
//         navigation.navigate('deckdelete', { id, deckinfo });
//       },
//     },
//   ];
//   return this.renderFourButtonColumn(buttons);
// };

// renderAdditionalButtons = () => {
//   const { isAdditionalButtonsVisible } = this.state;
//   if (isAdditionalButtonsVisible) {
//     return (
//       <View>
//         <View style={style.deckButtonContainer}>
//           {this.renderDeckMoreButton1()}
//         </View>
//         <View style={style.deckButtonContainer}>
//           {this.renderDeckMoreButton2()}
//         </View>
//       </View>
//     );
//   }
//   return null;
// };
