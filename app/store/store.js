'use strict'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import getReducers from '../reducers/rootReducer'

export default function getStore () {
  return createStore(
    getReducers(),
    applyMiddleware(thunk)
  )
}
/*
 const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
 const store = createStoreWithMiddleware(rootReducer, initialState);

 */

export let store = getStore()

