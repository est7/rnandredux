/**
 * Created by Administrator on 2017/7/13.
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mainPageActions from '../actions/mainPageActions'
import MainScreen from '../components/MainScreen'

function mapStateToProps (state) {
  const {mainReducer} = state
  return {
    mainReducer
  }
}

 const mapDispatchToProps = dispatch => ({
 actions111: bindActionCreators(mainPageActions, dispatch)
 })

//不使用bindActionCreators时候：
/*
function mapDispatchToProps (dispatch) {
  return {
    fetchDataAAA: () => dispatch(mainPageActions.fetchData())
  }
}
*/

/*
//不知道为什么,不能这样子用...想只导出其中一个方法,但是好像不行,不知道原因
//所以单独导出一个方法的话,就不要用bindActionCreators,而是用上面的吧
 const mapDispatchToProps = (dispatch) => {
 bindActionCreators({
 fetchDataAAA: mainPageActions.fetchData(),
 }, dispatch)
 }
 */



export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

