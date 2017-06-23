import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default class Setting extends Component {

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={this.props.onPress}>
                <View style={StyleSheet.body}>
                    <Image style={StyleSheet.icon}
                        source={this.props.leftSource}/>
                    <Text style={styles.infoText}>{this.props.info}</Text>
                    <View style={{flex: 1}}/>
                    <Image style={styles.icon}
                        source={this.props.rightSource}/>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 50,
        padding: 10,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    infoText: {
        fontSize: 14,
        color: '#111111',
    }
})