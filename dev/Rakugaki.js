import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 一個のファイルにつき一個しかできない
export default classdanostringdanoobjectdano;
// 何個でも
export { nanika, nandemo, ii, nannkodemo };

import NanikaDefaultDeExportSaretaYatsu, { nanika, nandemo, ii, nannkodemo } from 'soutaipasu';

const arrowfunction = (a, b) => {
  const sum = a + b;
  return sum;
};

const style = StyleSheet.create({
  text: {
    fontSize: 20
  }
})

// fucntion addition(a, b) {
//   return a + b;
// }

const k = [1, 2, 3, 4, 5]; // 再代入不可
var i = 'aifdoaji'; // 
let j = 0; // 再代入可

const addition = (a,b) => {
  return a + b;
}

const answer = addition(3,4)

export default class Rakugaki extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header renderTitle={() => {
          return <Text>Kore ga taitoru</Text>
        }} />
        <Text style={{ fontSize: 20 }}> Rakugaki </Text>
      </View>
    );
  }
}

/* 
string 文字列
const message = 'Hi, good morning';

number 数字
const i = 0;

array 配列
const hairetsu = [1, 2, 3, 'どんな', 'データも', '入れられる'];
hairetu[0] <- 0番目のデータ（この場合は1）が出てくる
hairetu[5] <- '入れられる'が出てくる
const sum = hairetsu[0] + hairetsu[2]; <- ４になる
*データの再入力
hairetsu[5] = '入れられます'; //とすると
[1, 2, 3, 'どんな', 'データも', '入れられます'] //になる
*データの追加
hairetsu.push('!')
[1, 2, 3, 'どんな', 'データも', '入れられる', '!']
hairetsu.shif(0)
[0, 1, 2, 3, 'どんな', 'データも', '入れられる']

object オブジェクト
const obj = { fname: 'Jun', lname: 'Ikeda', age: 16 }
*取り出し
obj.fname <- 'Jun'
console.log(obj.fname) <- コンソールにJunが表示される
*再代入
obj.fname = 'Hayato';
obj.age = 0;
obj['age'] = 0;
*データの追加
obj.number = 5403;
{ fname: 'Jun', lname: 'Ikeda', age: 16, number: 5403 }

objectとarrayの変換
Object.values(obj) <- ['Jun', 'Ikeda', 16];
Object.keys(obj) <- ['fname', 'lname', 'age'];

*/

