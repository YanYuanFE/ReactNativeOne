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
import moment from 'moment';
import 'moment/locale/zh-cn';
// moment.locale('zh-cn');
// 在react-native 设置moment.locale('zh-cn')无效，
// 只能通过改moment.js源文件中的baseConfig配置中文

import MusicView from './MusicView';

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

    ComponentDidMount() {
        Image.getSize(this.props.data.img_url, this.getSizeSuccess(), this.getSizeFailure);
    }

    getSizeSuccess = () => {
        const that = this;

        return (width, height) => {
            heigth = ((that.windowWidth - 20) / that.width) * height;
            that.setState({
                imgHeight: height,
            })
        }
    }

    getSizeFailure = error => {
        alert(`get img size failure => ${error}`);
    }

    getData = data => ({
        contentType: data.content_type,
        movieName: data.content_type == this.contentMovie ? data.subtitle : '',
        type: data.share_list.wx.title.split('|')[0].trim(),
        title: data.title,
        author: data.share_list.wx.desc.split(' ')[0].replace('/', ' / '),
        imgUrl: data.img_url,
        content: data.forward,
        time: moment(data.post_date, 'YYYY-MM-DD hh:mm:ss').fromNow(),
        likeCount: data.like_count,
        url: data.share_info.url,
        musicInfo: `${data.music_name} · ${data.audio_author} | ${data.audio_album}`,
    })

    render() {
        const data = this.getData(this.props.data);
        
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.onPress(data.url, data.type)}>
                <View style={styles.contentView}>
                    <Text style={styles.typeText}>{`- ${data.type} -`}</Text>
                    <Text style={[styles.titleText, {width: this.width}]}>{data.title}</Text>
                    <Text style={[styles.authorText, {width: this.width}]}>{data.author}</Text>
                    {
                        data.contentType == this.contentMusic ? (
                            <View style={[styles.musicBox, {width: this.width, height: this.widthM2}]}>
                                <View>
                                    <Image 
                                    style={[styles.xiamiImg,  {top: this.widthM2 -32 }]}
                                    source={require('../images/xiami.png')}/>
                                    <MusicView
                                        width={this.widthM2}
                                        source={{uri: data.imgUrl}}/>
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
                    <Text style={data.contentType == this.contentMusic ? [styles.musicNameText,  {width: this.width}] : {height: 0}}>{data.musicInfo}</Text>
                    <Text style={[styles.contentText, {width: this.width}]}>{data.content}</Text>
                    <Text style={data.contentType == this.contentMovie ? [styles.movieNameText, {width: this.width}]: {height: 0}}>{`-- 《${data.movieName}》`}</Text>
                    <View style={styles.bottomView}>
                        <Text style={styles.bottomText}>{data.time}</Text>
                        <View style={{flex: 1}}/>
                        <TouchableWithoutFeedback onPress={this.pressLike}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.bottomText}>{data.likeCount}</Text>
                                <Image 
                                    style={styles.bottomImg}
                                    source={require('../images/bubble_like.png')}/>
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{width: 20}}/>
                        <TouchableWithoutFeedback onPress={this.pressShare}>
                            <View style={{flexDirection: 'row'}}>
                                <Image 
                                    style={styles.bottomImg}
                                    source={require('../images/bubble_share.png')}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
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
    },
    musicNameText: {
        marginTop: 8,
        fontSize: 12,
        color: '#BBBBBB',
    },
    contentText: {
        fontSize: 13,
        color: '#999999',
        lineHeight: 26
    },
    movieNameText: {
        textAlign: 'right',
        fontSize: 14,
        color: '#999999',
    },
    bottomView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 8,
    },
    bottomText: {
        height: 18,
        fontSize: 11,
        color: '#BBBBBB',
        marginRight: 5,
        lineHeight: 17,
    },
    bottomImg: {
        width: 18,
        height: 18,
    }

})