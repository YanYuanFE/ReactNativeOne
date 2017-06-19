import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    ToastAndroid,
} from 'react-native';

export default class ContentItem extends Component {
    
    constructor(props ) {
        super(props);
        this.state = {
            imgHeight: 220,
        }

        this.contentMovie = 5;
        this.contentMusic = 4;

        this.windowWidth = Dimensions.get('window').width;
        this.width = this.windowWidth - 20;
        this.widthM4 = this.width / 4;
        this.widthM2 = this.width / 2;
    }

    getData = data => ({
        contentType: data.content_type,
        movieName: data.content_type == this.contentMovie ? data.subtitle : 'unknow',
        type: data.share_list.wx.title.split('|')[0].trim(),
        title: data.title,
        author: data.share_list.wx.desc.split(' ')[0].replace('/', ' / '),
        imgUrl: data.img_url,
        content: data.forward,
        time: 'n小时前',
        likeCount: data.like_count,
        url: data.share_info.url,
        musicInfo: `${data.music_name} · ${data.audio_author} | ${data.audio_album}`,
    })

    render() {
        console.log(this.props);
        const data = this.getData(this.props.data);
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.onPress(data.url, data.type)}>
                <View style={styles.contentView}>
                    <Text style={styles.typeText}>{`- ${data.type} -`}</Text>
                    <Text style={[styles.titleText, {width: this.width}]}>{data.title}</Text>
                    <Text style={[styles.authorText, {width: this.width}]}>{data.author}</Text>
                    {
                        data.contentType == this.contentMovie ? (
                            <View style={[styles.musicBox, {width: this.width, height: this.widthM2}]}>
                                <View>
                                    <Image 
                                    style={[styles.xiamiImg,  {top: this.widthM2 -32 }]}
                                    source={require('../images/xiami.png')}/>
                                </View>
                                <View style={{flex: 1}}/>
                                <Image 
                                    style={[styles.musicRightImg,  {height: this.widthM2}]}
                                    resizeMode="contain"
                                    source={require('../images/music_right.png')}/>
                            </View>
                        ) : (
                            <Image 
                                style={[styles.imgPic, {height: this.state.imgHeight, width: this.width}]}
                                resizeMode="stretch"
                                source={{uri: data.imgUrl}}/>
                        )
                    }
                </View>

            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    contentView: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 12,
    },
    typeText: {
        fontSize: 11,
        color: '#666666',
    },
    titleText: {
        lineHeight: 24,
        fontSize: 16,
        color: '#000000',
    },
    authorText: {
        lineHeight: 30,
        fontSize: 11,
        color: '#888888',
    },
    imgPic: {
        marginTop: 8,
        marginBottom: 8,
    },
    contentText: {
        fontSize: 13,
    },
    musicBox: {
        flexDirection: 'row',
    },
    xiamiImg: {
        width: 28,
        height: 28,
        position: 'absolute',
        left: 0,
    },
    musicRightImg: {
        alignSelf: 'flex-end',
    }
})