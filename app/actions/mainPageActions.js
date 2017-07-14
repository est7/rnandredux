/**
 * Created by Administrator on 2017/7/10.
 */
'use strict'

import { Util } from '../utils/fetch.js'
import * as actionTypes from './actionTypes'

export function fetchData () {
  let url = 'http://api.douban.com/v2/movie/top250'

  return (dispatch, getState) => {
    //loading
    dispatch({type: actionTypes.actionLoading})

    return Util.get(url,
      (response) => {

        dispatch({
          type: actionTypes.actionLoadSuccessful,
          subjects: response
        })
      },
      (error) => {
        // console.log('Fetch banner list error: ' + error);
        dispatch({
          type: actionTypes.actionLoadError,
          subjects: error
        })
      }
    )
  }
}