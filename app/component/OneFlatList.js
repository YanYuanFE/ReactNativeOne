import React, { Component } from 'react';

import {
  FlatList,
  StyleSheet,
  Text
} from 'react-native';

import OneListItem from './OneListItem';


export default class OneFlatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected:[]
    }
  }

  _keyExtractor = (item, index) => index;

  _onPressItem = id => {

  }

  _renderItem = ({item}) => {
    return item.content_type == 0 ? this.renderOne(item) : null;
  };

  renderOne = item => (
    <OneListItem
      appNavigation = {this.props.appNavigation}
      weather = {this.props.weather}
      data = {item}
    />
  )

  render () {
    return (
      <FlatList 
        keyExtractor = {this._keyExtractor}
        data = {this.props.data}
        renderItem = {this._renderItem}
      />
    )
  }
}