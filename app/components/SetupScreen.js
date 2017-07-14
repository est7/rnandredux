/**
 * Created by Administrator on 2017/7/4.
 */

'use strict'

import { Button, Image, StyleSheet }from 'react-native'
import React, { Component } from 'react'

export default class SetupScreen extends React.Component {

  constructor (props) {
    super(props)

  }



  static navigationOptions = {
    tabBarLabel: 'Setup',
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/ic_cart.png')}
             style={[styles.icon, {tintColor: tintColor}]}
      />),
  }

  render () {
    const {goBack} = this.props.navigation
    return (
      <Button
        title="Go back to home tab"
        onPress={() => goBack()}
      />

    )
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 26, height: 26
  }
})