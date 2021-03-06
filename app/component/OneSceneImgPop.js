import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default class OneSceneImgPop extends Component {

    render() {
        const textStyle = [styles.text, {width: this.props.imgSize.width }];

        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={styles.body}>
                    <Text style={textStyle}>{this.props.volume}</Text>
                    <Image style={this.props.imgSize}
                            source={{uri: this.props.imgUrl}}/>
                    <Text style={textStyle}>{this.props.info}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    text: {
        color: '#DDDDDD',
        fontSize: 12,
        marginTop: 14,
        marginBottom: 14,
        paddingLeft: 4,
    }
});