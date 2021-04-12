import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  ImageBackground,
  Image,
  TouchableOpacity,
  CheckBox,
  Icon,
} from 'react-native';

export default class Main extends Component {
  state = { user: 'Trọng' };
  render() {
    return (
      <ImageBackground
        source={require('../assets/home.png')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txth1}>Chào {this.state.user} </Text>
            <Text style={styles.txth2}>Let’s Learn More About App</Text>
          </View>

          <View style={styles.content}>
          <TouchableOpacity style={styles.box}
          onPress={() => {this.props.navigation.navigate('Profile')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/user.png')}></ImageBackground>
            <Text style={styles.txtbox}>Quản lý {'\n'} tài khoản</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}
          onPress={() => {this.props.navigation.navigate('QLSP')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/qlsp.png')}></ImageBackground>
            <Text style={styles.txtbox}>Quản lý {'\n'} sản phẩm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}
          onPress={() => {this.props.navigation.navigate('QLNV')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/qlnv.png')}></ImageBackground>
            <Text style={styles.txtbox}>Quản lý {'\n'} nhân viên</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}
          onPress={() => {this.props.navigation.navigate('DoiTac')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/qldt.png')}></ImageBackground>
            <Text style={styles.txtbox}>Quản lý {'\n'} đối tác</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}
          onPress={() => {this.props.navigation.navigate('QLHD')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/qlhd.png')}></ImageBackground>
            <Text style={styles.txtbox}>Quản lý {'\n'} hóa đơn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}
          onPress={() => {this.props.navigation.navigate('ChamCong')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/qlcc.png')}></ImageBackground>
            <Text style={styles.txtbox}>Quản lý {'\n'} chấm công</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}
          onPress={() => {this.props.navigation.navigate('CaiDat')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/cd.png')}></ImageBackground>
            <Text style={styles.txtbox}>Cài đặt</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:100,
    fontFamily: 'Roboto',
    justifyContent: 'center',

  },
  header: {

  },
  image: {
    flex: 1,
    //resizeMode: '',
  },
  icon: {
    width: 45,
    height: 45,
    alignSelf: 'center',
    marginVertical: 5,
    marginTop:10,
  },
  txtbox: {
    textAlign: 'center',
    color: 'rgba(255, 254, 254, 0.8)',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 21,
  },
  txth1: {
    fontWeight: '700',
    fontSize: 21,
    color: 'white',
    lineHeight: 24,
    marginLeft:10,
  },
  txth2: {
    fontSize: 14,
    color: 'white',
    lineHeight: 19,
    marginBottom: 21,
    marginTop: 16,
    marginLeft:10,
  },
  content:
  {
    flexDirection:'row',
    flexWrap:'wrap',

  },
  box: {
    width: 130,
    height: 110,
    margin:15,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 14,
  },
});
