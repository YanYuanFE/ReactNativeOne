import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import OneFlatList from '../component/OneFlatList';

import { GET_MOVIE_LIST } from '../api/API';


export default class MusicScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieData: []
    };
  }

  componentDidMount() {
    this.fetchMovieData();
  }

  fetchMovieData = () => {
    fetch(GET_MOVIE_LIST)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
            movieData: res.data
        })
      })
      .catch(err => {
        alert(`fetchMovieData: ${err}`);
      })
  }

  renderDataList = () => {
    const appNavigation = this.props.screenProps.appNavigation;

    return (
      <OneFlatList
        appNavigation = {appNavigation}
        data = {this.state.movieData}
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
    return this.state.movieData ? this.renderDataList() : this.renderLoadingView();
  }

  
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})