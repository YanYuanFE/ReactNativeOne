import React, { Component } from 'react';

import {
  FlatList,
  StyleSheet,
} from 'react-native';

import OneListItem from './OneListItem';


export default class OneFlatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected:[]
    }
  }

  _keyExtractor = (item, index) => item.id;

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
        data = {this.props.data}
        extraData = {this.state}
        keyExtractor = {this._keyExtractor}
        renderItem = {this._renderItem}
      />
    )
  }
}