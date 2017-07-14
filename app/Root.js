/*
 *入口
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {store} from './store/store'
import {BasicApp} from './BasicApp'


//无状态组件的写法
export default function Root()   {
    return (
      <Provider store={store}>
        <BasicApp />
      </Provider>
    )
}

