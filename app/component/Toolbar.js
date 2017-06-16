import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

export default class Toolbar extends Component {

  constructor(props) {
    super(props);

    let { params } = this.props.navigation.state;
    this.state = {
      title: params.title,
    };
  }

  render() {
    let inHome = this.props.inHome;
    let onlyLeft = this.props.onlyLeft;

    return (
      <View style = {[styles.box, this.props.bgColor ? {backgroundColor: this.props.bgColor,borderColor: 'rgba(0,0,0,0)'} : {}]}>
        <TouchableWithoutFeedback>
          <View style={styles.iconBtn}>
            <Image style={styles.iconStyle} 
              source={inHome ? require('../images/user.png') : require('../images/back.png')} />
          </View>
        </TouchableWithoutFeedback>
        <View style={{flex: 1}}/>
          <Text style={styles.titleText}>{this.state.title}</Text>
        <View style={{flex: 1}}/>
        <View>
          {
            onlyLeft ? (<View/>) : (
              <TouchableWithoutFeedback>
                <View style={styles.iconBtn}>
                  <Image style={styles.iconStyle}  
                    source={inHome ? require('../images/search.png') : require('../images/bubble_share.png')}/>
                </View>
              </TouchableWithoutFeedback>
            )
          }
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  box: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderColor: '#DDDDDD',
  },
  titleText: {
    color: '#000000',
    fontSize: 16,
  },
  iconBtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 20,
    height: 20,
  }
})