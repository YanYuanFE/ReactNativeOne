import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';

import AppNav from './app/navigator/AppNav';


class OneApp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppNav
        screenProps = {{navigation: this.props.navigation}}
        style={{flex: 1}} />
    )
  }
} 

AppRegistry.registerComponent('ReactNativeOne', () => OneApp);
