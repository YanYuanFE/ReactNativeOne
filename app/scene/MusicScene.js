import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import OneFlatList from '../component/OneFlatList';

import { GET_MUSIC_LIST } from '../api/API';


export default class MusicScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      musicData: []
    };
  }

  componentDidMount() {
    this.fetchMusicData();
  }

  fetchMusicData = () => {
    fetch(GET_MUSIC_LIST)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
            musicData: res.data
        })
      })
      .catch(err => {
        alert(`fetchMusicData: ${err}`);
      })
  }

  renderDataList = () => {
    const appNavigation = this.props.screenProps.appNavigation;

    return (
      <OneFlatList
        appNavigation = {appNavigation}
        data = {this.state.musicData}
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
    return this.state.musicData ? this.renderDataList() : this.renderLoadingView();
  }

  
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})