import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    Animated,
    Easing,
    TouchableWithoutFeedback,
    ToastAndroid,
} from 'react-native';

const musicPlay = require('../images/play.png');
const musicPause = require('../images/pause.png');

export default class MusicView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false,
            rotate: new Animated.Value(0),
        };
    }

    onPress = () => {
        ToastAndroid.show('转', ToastAndroid.SHORT);
        if(this.state.isPlaying) {
            this.state.rotate.stopAnimation();
        } else {
            this.startTimingRotateAnim();
        }
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

    startTimingRotateAnim = () => {
        Animated.timing(
            this.state.rotate,
            {
                toValue: 1,
                duration: 1000 * 60 * 60,
                easing: Easing.linear,
            }
        ).start();
    }

    render() {
        const { width } = this.props;
        const transform = [{
            rotate: this.state.rotate.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', `${60*360}deg`],
            })
        }];

        const animateStyle = {
            width: width,
            height: width,
            borderRadius: width,
            borderWidth: 1,
            borderColor: 'rgba(80,80,80,0.1)',
            transform: transform,
        };

        return (
            <View style={{marginLeft: width /2 }}>
                <Animated.Image
                    style={animateStyle}
                    source={this.props.source}/>
                    <View style={[styles.musicView, {height: width, width: width}]}>
                        <TouchableWithoutFeedback 
                            onPress={this.onPress}>
                            <Image 
                                style={styles.imgStyle}
                                source={this.state.isPlaying ? musicPause : musicPlay}/>
                        </TouchableWithoutFeedback>
                    </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    musicView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
    },
    imgStyle: {
        width: 28,
        height: 28,
    }
})