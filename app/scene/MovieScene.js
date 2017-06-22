import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Animated,
} from 'react-native';




export default class MovieScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
        this.state.fadeAnim,
        {
            toValue:1,
        }
    ).start();
  }

  render() {
    return (
        <Animated.View
            style={{
                ...this.props.style,
                opacity: this.state.fadeAnim,
            }}>
            {this.props.children}
        </Animated.View>
    )
  }

  
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})