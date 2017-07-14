/**
 * Created by Administrator on 2017/7/4.
 */
import { Button, Image, StyleSheet, View, Text }from 'react-native'
import React, {} from 'react'

export default class MainScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Main',
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/ic_tab_home.png')}
             style={[styles.icon, {tintColor: tintColor}]}
      />),
  }

  doSomething () {
    //如果在contaniner/MainContainer里面没有mapDispatchToProps方法,那就需要用如下方法调用
    //但是我们为了 让UI组件无感知redux的存在,所以我们会用bindActionCreators 进行绑定
    /*const {dispatch} = this.props

     dispatch(actions.fetchData())*/

  }

  static defaultProps = {
    subjects: 'defaul4ttext'
  }

  render () {
    const {navigate} = this.props.navigation
    const {actions111} = this.props
    // const {fetchDataAAA} = this.props
    return (
      <View style={{flex: 1}}>
        <Button
          style={styles.button}
          title="Go to Setup Tab"
          onPress={() => navigate('Setup')}
        />
        <Button
          style={styles.button}
          title="load"
          //onPress={() => this.doSomething()}
          onPress={() => actions111.fetchData()}
          //onPress={() => fetchDataAAA()}
        />
        <Text >
          {this.props.subjects}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  button: {

    width: 26,
    height: 26
  }
})

