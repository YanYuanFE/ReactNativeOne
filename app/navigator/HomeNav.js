import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';


const homeIcon = require('../images/home.png');
const homeIconActive = require('../images/home_active.png');
const readIcon = require('../images/reading.png');
const readIconActive = require('../images/reading_active.png');
const musicIcon = require('../images/music.png');
const musicIconActive = require('../images/music_active.png');
const movieIcon = require('../images/movie.png');
const movieIconActive = require('../images/movie_active.png');

class Home extends React.Component {
  static navigationOptions = {
    title:'一个',
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        source={focused ? homeIconActive : homeIcon}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Go to notifications"
      />
    );
  }
}

class Music extends React.Component {
  static navigationOptions = {
    title:'一个音乐',
    tabBarLabel: 'Music',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        source={focused ? musicIconActive : musicIcon}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

class Read extends React.Component {
  static navigationOptions = {
    title:'一个阅读',
    tabBarLabel: 'Read',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        source={focused ? readIconActive : readIcon}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

class Movie extends React.Component {
  static navigationOptions = {
    title:'一个影视',
    tabBarLabel: 'Movie',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        source={focused ? movieIconActive : movieIcon}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 50,
    height: 50,
  },
});

const MyApp = TabNavigator({
  Home: {
    title:'一个',
    screen: Home,
  },
  Read: {
    title:'一个阅读',
    screen: Read,
  },
  Music: {
    title:'一个音乐',
    screen: Music,
  },
  Movie: {
    title:'一个影视',
    screen:Movie
  }
}, {
  tabBarPosition:'bottom',
  tabBarOptions: {
    activeTintColor: '#000000',
    inactiveTintColor:'#666666',
    showLabel:false,
    showIcon:true,
    indicatorStyle:{height:0},
    style: {
      backgroundColor:'#ffffff',
    }
  },
});