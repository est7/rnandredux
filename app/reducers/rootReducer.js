/**
 * 根reducer
 */
import { combineReducers } from 'redux'
import mainReducer from './mainReducer'
import  setupReducer from './setupReducer'

export default function getReducers () {
  return combineReducers({
    mainReducer,
    setupReducer,
  })
}
