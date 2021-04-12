import React, { useState } from 'react';
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
} from 'react-native';

export default class Login extends React.Component {
  state = { user: '', password: '', repassword: '' };

  render() {
    return (
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.containera}>
            <Text style={styles.txtlogin}>QUÊN MẬT KHẨU</Text>
            <Text style={styles.txth2}>Let’s Learn More About App</Text>
            <TextInput
              secureTextEntry
              style={styles.textInput}
              placeholder="Mật khẩu mới"
              placeholderTextColor="white"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              placeholder="Nhập lại mật khẩu"
              placeholderTextColor="white"
              onChangeText={(repassword) => this.setState({ repassword })}
              value={this.state.repassword}
            />
          </View>

          <View style={styles.containerb}>
            <TouchableOpacity
              style={styles.btnlogin}
              onPress={() => {
                var login = this.state.repassword;
                var pass = this.state.password;
                if (login == 'a' && pass == 'a') {
                  Alert.alert('Đăng nhập thành công');
                  this.props.navigation.navigate('Main');
                } else {
                  Alert.alert('Mật khẩu không trùng!!!');
                }
              }}>
              <Text style={styles.txtdn}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
    justifyContent: 'center',
  },
  containera: {
    alignItems: 'center',
  },
  containerb: {
    marginTop: 200,
    alignItems: 'center',
  },
  textInput: {
    height: 54,
    width: '90%',
    marginTop: 8,
    paddingLeft: 10,
    borderColor: '#00A2C3',
    color: 'white',

    backgroundColor: 'rgba(255, 253, 253, 0.4)',
    borderWidth: 1.7,
    borderRadius: 23,
  },

  image: {
    flex: 1,
    //resizeMode: '',
  },
  txtlogin: {
    fontSize: 30,

    color: 'white',
    fontWeight: '700',
    lineHeight: 35,
  },
  txth2: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: 'white',
    lineHeight: 19,
    opacity: 0.7,
    marginBottom: 21,
    marginTop: 16,
  },
  btnlogin: {
    backgroundColor: '#2E1FDD',
    borderRadius: 23,
    width: '90%',
    marginTop: 10,
    marginBottom: 5,
    height: 52,
  },
  txtdn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    margin: 14,
  },
});
