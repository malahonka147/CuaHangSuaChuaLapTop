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
                    source={require('../assets/qlsp.png')}>
              </ImageBackground> Quản lý sản phẩm</Text>
          </View>
        </View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.box} >
            <ImageBackground
              style={styles.icon}
              source={require('../assets/qlsp.png')}></ImageBackground>
            <Text style={styles.txtbox}>Danh sách {'\n'} sản phẩm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/qlhn.png')}></ImageBackground>
            <Text style={styles.txtbox}>Quản lý {'\n'} hàng nhập</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:30,
    fontFamily: 'Roboto',
    justifyContent: 'center',

  },
  header: {

  },

  image: {
    flex: 1,
  },
  icon: {
    width: 37,
    height: 35,
    alignSelf: 'center',
    marginVertical: 5,
  },
  iconTD: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: 0,
    marginLeft:30,
    marginRight:20,
  },
  txtTieuDe: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    marginBottom: 120,
    marginTop: 25,
  },
  btnIcon: {
    paddingTop:5,
    width: 50,
    height: 45,
    marginTop:3,
  },
  txtbox: {
    textAlign: 'center',
    color: 'rgba(255, 254, 254, 0.8)',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21,
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
});
