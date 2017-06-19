import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';


export default class OneListItem extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      imgHeight: 200,
      popVisible: false,
    };

    this.windowWidth = Dimensions.get('window').width;
  }

  componentDidMount() {
    Image.getSize(this.props.data.img_url, this.getSizeSuccess(), this.getSizeFailure);
  }

  getSizeSuccess = () => {
    let that = this;

    return (width, height) => {
      height = (that.windowWidth / width) * height;
      that.setState({
        imgHeight: height,
      })
    }
  }

  getSizeFailure = error => {
    alert(`get img size failure =>${error}`)
  }

  changePopVisible = () => {
    this.setState({
      popVisible: !this.state.popVisible
    });
  }


  render() {
    const { data, weather } = this.props;
    console.log(this.props)

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.dateText}>{weather.date.replace(/-/g, ' / ')}</Text>
        <Text style={styles.cityText}>{`${weather.climate},${weather.city_name}`}</Text>
        <TouchableWithoutFeedback
            onPress={this.changePopVisible}>
          <View style={styles.imgBox}>
            <Image
              source={{uri: data.img_url}}
              style={[styles.imgStyle, {height: this.state.imgHeight}, {width: this.windowWidth}]}
            />
            <Text style={styles.volText}>{data.volume}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.titleText}>{`${data.title} | ${data.pic_info}`}</Text>
        <Text style={styles.contentText}>{data.forward}</Text>
        <Text style={styles.authorText}>{data.words_info}</Text>
        <View style={styles.bottom}>
          <TouchableWithoutFeedback onPress = {this.pressEdit}>
            <View style={{flexDirection: 'row'}}>
              <Image 
                style={styles.bottomImg}
                source={require('../images/bubble_edit.png')}/>
              <Text style={styles.bottomText}>小记</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={{flex: 1}}/>
          <TouchableWithoutFeedback onPress = {this.pressLike}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.bottomText}>{data.like_count}</Text>
              <Image
                style={styles.bottomImg}
                source={require('../images/bubble_like.png')}/>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress = {this.pressShare}>
              <Image
                style={styles.bottomImg}
                source={require('../images/bubble_share.png')}/>
          </TouchableWithoutFeedback>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer : {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
    borderBottomWidth: 0.2,
    borderColor: '#DDDDDD',
  },
  dateText: {
    marginTop: 10,
    fontSize: 17,
    color: '#000000',
  },
  cityText: {
    fontSize: 11,
    color: '#222222',
  },
  imgBox: {
    marginTop: 7,
    marginBottom: 8,
    position: 'relative'
  },
  imgStyle: {
    width: this.windowWidth
  },
  volText: {
    position: 'absolute',
    left: 8,
    top: 8,
    color: '#FFFFFF',
    fontSize: 13,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2
  },
  titleText: {
    fontSize: 11,
    color: '#888888',
  },
  contentText: {
    fontSize: 12,
    lineHeight: 24,
    color: '#111111',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 40,
    marginRight: 40,
  },
  authorText: {
    fontSize: 11,
    color: '#888888',
    marginTop: 14,
    marginBottom: 14,
  },
  bottom: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 8,
  },
  bottomImg: {
    width: 18,
    height: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  bottomText: {
    color: '#888888',
    fontSize: 10,
    lineHeight: 16,
  }
});