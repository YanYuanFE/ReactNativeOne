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
  }


  render() {
    const { data, weather } = this.props;
    console.log(this.props)

    return (
      <View>
        <Modal
          onRequestClose={() => {}}>
        </Modal>
        <Text>{weather.date}</Text>
        <Text>{`${weather.climate},${weather.city_name}`}</Text>
        <TouchableWithoutFeedback
        >
          <View>
            <Image
              source={{uri: data.img_url}}
            />
            <Text>{data.volume}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}