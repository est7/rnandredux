/**
 * App
 */

import React, { Component }from 'react'

import { connect } from 'react-redux'
import { AppNavigator } from './routers'

class App extends Component {
  render () {
    return (
      <AppNavigator>
      </AppNavigator>
    )
  }
}

/*
 //这里的mainReducer其实就是在reducers/rootReducer里面定义的不同的reducer,是为了分出来,这样可以选择传入不同的reduxer
 const mapStateToProps = (state) => {
 const { mainReducer } = state;
 return {
 mainReducer
 };
 };
 */


//里面的mapStateToProps不写就是state所有的props都传<App>
//mapDispatchToProps不写就是dispatch方法默认也传给<App>
export const BasicApp = connect()(App)

