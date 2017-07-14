'use strict'

import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  error: false,
  data: 'haha'
}

let mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case  actionTypes.actionLoading:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.actionLoadSuccessful:
      return {
        ...state,
        isLoading: false,

      }
    case actionTypes.actionLoadError:
      return {
        ...state,
        error: true,
        isLoading: false
      }
    //这个一定要记得加
    default:
      return state
  }
}

export default mainReducer