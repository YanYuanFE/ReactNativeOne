import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';

import OneScene from '../scene/OneScene';
import ReadScene from '../scene/ReadScene';
import MusicScene from '../scene/MusicScene';
import MovieScene from '../scene/MovieScene';


const homeIcon = require('../images/home.png');
const homeIconActive = require('../images/home_active.png');
const readIcon = require('../images/reading.png');
const readIconActive = require('../images/reading_active.png');
const musicIcon = require('../images/music.png');
const musicIconActive = require('../images/music_active.png');
const movieIcon = require('../images/movie.png');
const movieIconActive = require('../images/movie_active.png');



const HomeNav = TabNavigator({
  One: {
    screen: OneScene,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? homeIconActive : homeIcon}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  Read: {
    screen: ReadScene,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? readIconActive : readIcon}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  Music: {
    screen: MusicScene,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? musicIconActive : musicIcon}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  Movie: {
    title:'一个影视',
    screen:MovieScene,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? movieIconActive : movieIcon}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),
    }
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

const styles = StyleSheet.create({
  tabIcon: {
    width: 50,
    height: 50,
  },
});

export default HomeNav;