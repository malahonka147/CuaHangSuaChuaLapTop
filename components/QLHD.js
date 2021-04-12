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
  state = { search: ''};
  render() {
    return (
      <ImageBackground
        source={require('../assets/background2.png')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtTieuDe}>

              <TouchableOpacity style={styles.btnIcon}
              onPress={() => {this.props.navigation.navigate('Main')}}>
                  <ImageBackground
                    style={styles.icon}
                    source={require('../assets/Back.png')}>
                  </ImageBackground>
              </TouchableOpacity>
              <ImageBackground
                    style={styles.iconTD}
                    source={require('../assets/qlhd.png')}>
              </ImageBackground> Quản lý hóa đơn</Text>
          </View>
          <TextInput
              style={styles.textInput}
              placeholder="Tìm kiếm..."
              placeholderTextColor="#D2D2D2"
              onChangeText={(search) => this.setState({ search })}
              value={this.state.search}
            />
          <View style={styles.slHD}>
            <Text style={styles.txtslHD}>2 hóa đơn</Text>
          </View>
          <View>
               <TouchableOpacity style={styles.ctHD}
                onPress={() => {
                  this.props.navigation.navigate('ForgotPassword');
                }}>
                <Text style={styles.textHD}>Mã hóa đơn: 1</Text>
                <Text style={styles.textHD}>Tên khách hàn: Lê Văn A</Text>
                <Text style={styles.textHD}>Ngày lập: 1/02/2020</Text>
                <Text style={styles.textHD}>Tổng tiền: 13.000.000 VNĐ</Text>
              </TouchableOpacity>
              <View style={styles.lineMid}></View>
              <TouchableOpacity style={styles.ctHD}
                onPress={() => {
                  this.props.navigation.navigate('ForgotPassword');
                }}>
                <Text style={styles.textHD}>Mã hóa đơn: 2</Text>
                <Text style={styles.textHD}>Tên khách hàn: Nguyễn Thị B</Text>
                <Text style={styles.textHD}>Ngày lập: 1/02/2020</Text>
                <Text style={styles.textHD}>Tổng tiền: 12.000.000 VNĐ</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
              style={styles.btnlogin}
              onPress={() => {
                  this.props.navigation.navigate('');
              }}>
              <Text style={styles.txtdn}>Thêm hóa đơn</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:20,
    fontFamily: 'Roboto',
    justifyContent: 'center',

  },
  header: {
    paddingLeft:10,
  },
  textInput: {
    height: 54,
    width: '90%',
    marginTop:-20,
    paddingLeft: 10,
    borderColor: '#00A2C3',
    color: '#D2D2D2',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.7,
    borderRadius: 23,
    marginLeft: 20,
  },
  txtslHD:{
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    paddingLeft: 50,
    paddingTop: 5,
  },
  slHD:{
    backgroundColor: '#C4C4C4',
    height: 35,
    marginTop: 8,
  },
  ctHD:{
    borderColor: '#00A2C3',
    backgroundColor: '#4C82C7',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  textHD:{
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    paddingLeft:5,
  },
  lineMid:{
    height: 5,
    backgroundColor: '#4C82C7',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    flex: 1,
  },
  icon: {
    width: 28,
    height: 30,
    alignSelf: 'center',
    marginVertical: -5,
    marginLeft:40,
    paddingLeft:60,
  },
  iconTD: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: 0,

  },
  txtbox: {
    textAlign: 'center',
    color: 'rgba(255, 254, 254, 0.8)',
    fontWeight: '700',
    fontSize: 16,
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
    width: 103,
    height: 99,
    margin:4,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 14,
  },
  btnlogin: {
    backgroundColor: '#0269FC',
    borderRadius: 5,
    width: '90%',
    marginTop: 350,
    marginBottom: 5,
    marginLeft: 20,
    height: 52,

  },
  txtdn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    margin: 14,
  },
  txtTieuDe: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    marginBottom: 120,
    marginTop: 5,
  },
  btnIcon: {
    paddingTop:20,
    width: 30,
    height: 40,
    marginTop:3,
  },
});
