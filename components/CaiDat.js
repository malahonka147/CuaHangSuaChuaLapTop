import React from 'react';
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
} from 'react-native';

export default class CaiDat extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/background2.png')}
        style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.txtCaiDat}> <TouchableOpacity style={styles.btnIcon}
                       onPress={() => {this.props.navigation.navigate('Main')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/Back.png')}></ImageBackground>
          </TouchableOpacity>
           <ImageBackground
              style={styles.iconCD}
              source={require('../assets/settings1.png')}></ImageBackground> Cài đặt</Text>
          <TouchableOpacity style={styles.btnCaidat} >
            <Text style={styles.txtContent} >Ngôn ngữ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCaidat} >
            <Text style={styles.txtContent}>Tắt rung khi nhận{'\n'}thông báo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCaidat} >
            <Text style={styles.txtContent}>Nhận thông báo{'\n'}qua Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCaidat} >
            <Text style={styles.txtContent}>Giới thiệu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCaidat} >
            <Text style={styles.txtContent}>Cập nhật phiên bản</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCaidat} >
            <Text style={styles.txtContent}>Donate</Text>
          </TouchableOpacity>
          </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
    alignItems: 'center',

  },
  image: {
    flex: 1,
  },
  icon: {
    width: 45,
    height: 40,
    marginVertical: -2,
  },
  btnIcon: {
    paddingTop:10,
    width: 30,
    height: 40,
    marginTop:3,
    color: 'rgba(255, 254, 254, 0.8)',
    marginLeft:-30
  },
  txtCaiDat: {
    fontSize: 30,
    color: 'white',
    marginBottom: 130,
    marginTop: 25,
    paddingRight:250,
    fontWeight: '700',
  },
  iconCD:{
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: -2,
    marginLeft:-15
  },
  btnCaidat: {
    backgroundColor: '#BED0EC',
    borderRadius: 4,
    width: '90%',
    marginTop: 10,
    marginBottom: 2,
    height: 70,

  },
  txtContent: {
    color: '#002D69',
    fontSize: 16,
    textAlignVertical: 'center',
    margin: 14,
    fontWeight: '700',
  },
});
