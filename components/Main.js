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

export default function Main ({navigation,route}) {
    return (
      <ImageBackground
        source={require('../images/home.png')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txth1}>Xin chào </Text>
            <Text style={styles.txth2}>Let’s Learn More About App</Text>
          </View>

          <View style={styles.content}>
          <TouchableOpacity style={styles.box}
          onPress={() => {navigation.navigate('QLSP')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../images/qlsp.png')}></ImageBackground>
            <Text style={styles.txtbox}>Quản lý {'\n'} sản phẩm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}
          onPress={() => {navigation.navigate('QLNV')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../images/qlnv.png')}></ImageBackground>
            <Text style={styles.txtbox}>Quản lý {'\n'} nhân viên</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}
          onPress={() => {navigation.navigate('QLPN')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../images/qlhn.png')}></ImageBackground>
            <Text style={styles.txtbox}>Quản lý {'\n'} phiếu nhập</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
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
