import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    const { text } = this.state;
    return (
      <View>
        <TextInput
          value={text}
          onChangeText={text => this.setState({ text })}
        />
      </View>
    );
  }

  componentDidMount() {
    const { card } = this.props;
    this.setState({ text: card });
  }

  // componentWillUnmount() {
  //   const { text } = this.state;
  //   const { setState, index } = this.props;
  //   setState(prev => {
  //     const state = prev;
  //     state.array[index] = text;
  //     return { array: state.array };
  //   });
  // }

  returnText = () => {
    const { text } = this.state;
    return text;
  };
}

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   card: {
//     flex: 1,
//     borderRadius: 4,
//     borderWidth: 2,
//     borderColor: '#E8E8E8',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 50,
//     backgroundColor: 'transparent',
//   },
// });

// export default class PageContent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       texttest: '',
//     };
//   }

//   render() {
//     const { texttest } = this.state;
//     return (
//       <View style={style.container}>
//         <View style={styles.card}>
//           <TextInput
//             value={texttest}
//             onChangeText={text =>
//               this.setState(
//                 { texttest: text },
//                 /* prev => {
//                     const state = prev;
//                     state.arraytest[index] = text;
//                     this.setState({ arraytest: state.arraytest });
//                   }, () => this.validate() */
//               )
//             }
//           />
//         </View>
//         {/* {this.renderTextInputs()} */}
//       </View>
//     );
//   }

//   componentDidMount() {
//     const { setStateInputs, card } = this.props;
//     setStateInputs({ texttest: card });
//   }

//   componentWillUnmount() {
//     console.log('will unmount called')
//     const { texttest } = this.state;
//     const { setStateInputs } = this.props;
//     setStateInputs({ texttest });
//   }

//   renderTextInputs = () => {
//     const {
//       page: { word, def, eg, syn, ant, cf },
//       setState,
//     } = this.props;
//     const inputs = [
//       { title: 'Word', setState: word => setState({ word }), value: word },
//       {
//         title: 'Definition',
//         setState: def => setState({ def }),
//         value: def,
//       },
//       { title: 'Example', setState: eg => setState({ eg }), value: eg },
//       { title: 'Synonym', setState: syn => setState({ syn }), value: syn },
//       { title: 'Antonyms', setState: ant => setState({ ant }), value: ant },
//       { title: 'cf', setState: cf => setState({ cf }), value: cf },
//     ];
//     return inputs.map(input => (
//       <View style={style.inputContainer}>
//         <Text>{input.title}</Text>
//         <TextInput onChangeText={input.setState} value={input.value} />
//       </View>
//     ));
//   };
// }
