import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ControlScreen from './src/ControlScreen';
import MonitorScreen from './src/MonitorScreen';
import MainScreen from './src/MainScreen';




const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Control: ControlScreen,
    Monitor: MonitorScreen
  }, 
  {
    initialRouteName: 'Main'
});

export default createAppContainer(navigator);
