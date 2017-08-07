import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import OneFlatList from '../component/OneFlatList';

import { GET_DATA_ARRAY, GET_DAY_LIST } from '../api/API';


export default class OneScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      weather: null,
      dataArr: [],
      dataOne: null,
    };
  }

  componentDidMount() {
    this.fetchDataArr();
  }

  fetchDataArr = () => {
    fetch(GET_DATA_ARRAY)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          dataArr: res.data
        });
        this.fetchOne(this.getId());
      })
      .catch(err => {
        alert(`fetchDataArr: ${err}`);
      })
  }

  getId = () => {
    let params = this.props.screenProps.appNavigation.state.params;

    let num = params.oneSceneNum;

    if (num > 9 || num < 0) {
      alert('unknown error');
      return;
    }

    params.oneSceneNum ++;

    return this.state.dataArr[num]

  }

  fetchOne = id => {
    const URL = GET_DAY_LIST(id);
    console.log(URL);

    fetch(URL)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        let data = res.data;
        data.weather.date = data.date.split(' ')[0];
        console.log(data.date.split(' ')[0])

        this.setState({
          dataOne: data.content_list,
          weather: data.weather,
        })
      })
      .catch(err => {
        alert(`fetchOne: ${err}`);
      })
  }

  renderDataList = () => {
    const appNavigation = this.props.screenProps.appNavigation;

    return (
      <OneFlatList
        appNavigation = {appNavigation}
        weather = {this.state.weather}
        data = {this.state.dataOne}
      />
    )
  }

  renderLoadingView = () => {
    return (
      <View style={styles.loading}>
        <Text>Loading</Text>
      </View>
    )
  }

  render() {
    console.log(this.state.dataOne == true)
    return this.state.dataOne ? this.renderDataList() : this.renderLoadingView();
  }

  
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})