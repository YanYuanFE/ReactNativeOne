import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScene from '../scene/Home';

import Toolbar from '../component/Toolbar';

const AppNav = StackNavigator({
  Home: {
    screen: HomeScene,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Toolbar 
          inHome={true} navigation={navigation}/>
      )
      
    })
  }
}, {
    initialRouteParams: {
      oneSceneNum: 0,
      title: '一个'
    }
});


export default AppNav;