import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

// import Color from '../../../../../config/Color';
import Icon from '../../../../../components/Icon';
import SettingItem from './SettingItem';

// import Gesture from '../../Gesture';
import TopHeader from '../../TopHeader';

// import SettingItem from './SettingItem';
import Color from '../../../../../config/Color';
import Item from '../../../../../components/item/Item';

// const mameimg = require('../../../../../../assets/illustrations/Aboutusmame.png');

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemsContainer: {
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    marginVertical: 50,
    marginHorizontal: 30,
  },
  itemContainer: {
    justifyContent: 'center',
    marginVertical: 10,
    paddingLeft: 20,
    backgroundColor: Color.background2,
    borderRadius: 10,
  },
  iconStyle: {
    color: Color.font2,
    fontSize: 25,
  },
  containerLine: {
    paddingVertical: 10, // 固定値だから変える
    flexDirection: 'row',
    // borderWidth: 1,
  },
  containerLineB: {
    height: 0,
  },
  titleStyle: {
    color: Color.font2,
  },
  // buttonIcon: {
  //   fontSize: 20,
  //   paddingHorizontal: 50,
  //   color: Color.background1,
  // },
  // itemsContainer: {
  //   flex: 1,
  //   justifyContent: 'space-between',
  //   marginVertical: 50,
  //   marginHorizontal: 30,
  //   // borderWidth: 2,
  //   // borderColor: 'white',
  // },
  // itemContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   // borderBottomWidth: 2,
  //   // borderBottomColor: Color.background1,
  //   // borderBottomEndRadius: 50,
  //   // borderBottomStartRadius: 50,
  // },
});

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isFocused } = this.props;
    return (
      <View style={{ opacity: isFocused ? 1 : 0 }}>
        {/* <Gesture style={{ opacity: isFocused ? 1 : 0 }}> */}
        <TopHeader title="Setting" />
        <View style={style.container} pointerEvents="box-none">
          <View style={style.itemsContainer}>
            {this.renderItem()}
            {this.renderTest()}
          </View>
        </View>
        {/* </Gesture> */}
      </View>
    );
  }

  renderItem = () => {
    const { navigation } = this.props;
    const items = [
      {
        title: 'Account',
        icon: {
          collection: 'Ionicons',
          name: 'ios-person',
          style: style.buttonIcon,
        },
        onPress: () => navigation.navigate('account'),
      },
      {
        title: 'Notification',
        icon: {
          collection: 'Ionicons',
          name: 'md-notifications',
        },
        onPress: () => navigation.navigate(''),
      },
      {
        title: 'Appearance',
        icon: {
          collection: 'Ionicons',
          name: 'md-eye',
        },
        onPress: () => navigation.navigate(''),
      },
      {
        title: 'Hint',
        icon: {
          collection: 'Ionicons',
          name: 'md-information-circle',
        },
        onPress: () => navigation.navigate(''),
      },
      {
        title: 'Help',
        icon: {
          collection: 'Ionicons',
          name: 'md-help-circle',
          style: style.buttonIcon,
        },
        onPress: () => {},
      },
      // {
      //   title: 'About Us',
      //   renderLeft: () => (
      //     <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'blue' }}>
      //       <Image
      //         source={mameimg}
      //         style={{ flex: 1, resizeMode: 'cover', width: 'auto' }}
      //       />
      //     </View>
      //   ),
      // },
    ];

    return items.map((item) => (
      <View style={style.itemContainer}>
        <SettingItem
          {...item}
          titleStyle={style.titleStyle}
          iconStyle={style.iconStyle}
          containerLine={style.containerLine}
          containerLineB={style.containerLineB}
        />
      </View>
    ));
  };

  // renderTest = () => {
  //   return (
  //     <Item
  //       renderLeft={() => (
  //         <View
  //           style={{
  //             flex: 1,
  //             justifyContent: 'center',
  //             // backgroundColor: 'blue',
  //           }}
  //         >
  //           <Image
  //             source={mameimg}
  //             style={{ flex: 1, resizeMode: 'cover', width: 'auto' }}
  //           />
  //         </View>
  //       )}
  //     />
  //   );
  // };
}

export default withNavigationFocus(Setting);
