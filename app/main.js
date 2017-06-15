import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View
} from 'react-native';


export default class MainScreen extends Component {
  static navigationOptions = {
    title:'Main',
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style = {styles.style_image} source={require('./images/app_icon.png')}/>
        <TextInput 
          style={styles.style_user_input}
          placeholder='QQ号/手机号/邮箱'
          numberOfLines={1}
          autoFocus={true}
          underlineColorAndroid={'transparent'}
          textAlign='center'
        />
        <View style={{height:1,backgroundColor:'#f4f4f4'}}/>
        <TextInput
          style={styles.style_pwd_input}
          placeholder='密码'
          numberOfLines={1}
          autoFocus={true}
          underlineColorAndroid={'transparent'}
          secureTextEntry={true}
          textAlign='center'
        />
        <View style={styles.style_view_commit}>
          <Text style={{color:'#fff'}}>登录</Text>
        </View>
        <View style={styles.style_view_commit}>
          <Button style={{color:'#fff'}} title="Go" onPress = {() => navigate('Profile',{name:'jane'})}>登录</Button>
        </View>
        <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',buttom:10}}>
          <Text style={styles.style_view_unlogin}>无法登录?</Text>
          <Text style={styles.style_view_register}>
          新用户
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  style_image: {
    borderRadius: 35,
    height: 200,
    marginTop: 40,
    alignSelf:'center',
  },
  style_user_input: {
    backgroundColor: '#fff',
    marginTop: 10,
    height: 40,
  },
  style_pwd_input: {
    backgroundColor:'#fff',
    height:40,
  },
  style_view_commit: {
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#63B8FF',
    height:35,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },
  style_view_unlogin: {
    fontSize:12,
    color:'#63B8FF',
    marginLeft:10,
  },
  style_view_register: {
    fontSize:12,
    color:'#63B8FF',
    marginRight:10,
    alignItems:'flex-end',
    flex:1,
    flexDirection:'row',
    textAlign:'right',
  }
});

