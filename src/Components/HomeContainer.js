import React from 'react'
import {View,ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function HomeContainer(props) {
  return (
  <View style={{flex:1,backgroundColor:'#fefefe',shadowOpacity:2}}>
    <KeyboardAwareScrollView >
      <ScrollView>
    {props.children}
    </ScrollView>
    </KeyboardAwareScrollView>
  </View>
  )
}

export default HomeContainer