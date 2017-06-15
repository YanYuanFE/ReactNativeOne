import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import MainScreen from './main';



const App = StackNavigator({
  Main:{screen: MainScreen},
  Profile:{screen:ProfileScreen},
});

export default App;