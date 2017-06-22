import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import OneFlatList from '../component/OneFlatList';

import { GET_READ_LIST } from '../api/API';


export default class ReadScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      readData: []
    };
  }

  componentDidMount() {
    this.fetchReadData();
  }

  fetchReadData = () => {
      console.log(GET_READ_LIST)
    fetch(GET_READ_LIST)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
            readData: res.data
        })
      })
      .catch(err => {
        alert(`fetchReadData: ${err}`);
      })
  }

  renderDataList = () => {
    const appNavigation = this.props.screenProps.appNavigation;

    return (
      <OneFlatList
        appNavigation = {appNavigation}
        data = {this.state.readData}
      />
    )
  }

  renderLoadingView = () => {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    )
  }

  render() {
    return this.state.readData ? this.renderDataList() : this.renderLoadingView();
  }

  
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})