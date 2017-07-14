import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation'

import MainScreen from '../containers/MainContainer'
import SetupScreen from '../components/SetupScreen.js'
const TabbarNavigator = TabNavigator({
  Home: {screen: MainScreen},
  Setup: {screen: SetupScreen},

}, {
  initialRouteName: 'Home'
})

const AppNavigator = StackNavigator({
  TabBar: {
    screen: TabbarNavigator,
    navigationOptions: {
      header: null
    }
  }
})

export {
  AppNavigator
}
