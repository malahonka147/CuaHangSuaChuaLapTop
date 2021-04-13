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
  Safe,
  ToastAndroid
} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import CheckBox from '@react-native-community/checkbox';
var db = openDatabase({name: "Database.db", createFromLocation : 1});
export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = { user: '', password: '' };
  }
  OnPressLogin=()=>{
    db.transaction((tx)=>{
      tx.executeSql("select *from user where TenDangNhap=?",[this.state.user],(tx,results)=>{
        var len=results.rows.length;
        if(len==0)
          ToastAndroid.show("Tài khoản không tồn tại",ToastAndroid.SHORT);
        else{
          var row=results.rows.item(0);
          if(this.state.password==row.Password)
            ToastAndroid.show("Đăng nhập thành công",ToastAndroid.SHORT);
          else
            ToastAndroid.show("Sai tào khoảng hoặc mật khẩu",ToastAndroid.SHORT);
        }
      });
    });
  }
  render() {
    return (
     <ImageBackground
            source={require('../assets/background.png')}
            style={styles.image}>
            <View style={styles.container}>
              <View style={styles.containera}>
                <Text style={styles.txtlogin}>ĐĂNG NHẬP</Text>
                <Text style={styles.txth2}>Let’s Learn More About App</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Tài khoản"
                  placeholderTextColor="white"
                  onChangeText={(user) => this.setState({ user })}
                  value={this.state.user}
                />

                <TextInput
                  secureTextEntry
                  style={styles.textInput}
                  placeholder="Mật khẩu"
                  placeholderTextColor="white"
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                />
              </View>

              <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
                  <CheckBox value={true}  style={styles.checkbox} />
                  <Text style={styles.label}>Nhớ mật khẩu</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('ForgotPassword');
                    }}>
                    <Text style={{ color: 'white' }}>Quên mật khẩu</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.containera}>
                <TouchableOpacity
                  style={styles.btnlogin}
                  onPress={this.OnPressLogin}>
                  <Text style={styles.txtdn}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: 'white' }}>Chưa có tài khoản?</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SignUp');
                    }}>
                    <Text
                      style={{ color: 'blue', fontWeight: 'bold', marginLeft: 15 }}>
                      ĐĂNG KÝ
                    </Text>
                  </TouchableOpacity>
                </View>
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
  label: {
    color: 'white',
    marginLeft: 5,
  },
  checkbox: {
    height:5,
    width:5,
    paddingLeft:30,
    marginTop:6,
  },
  checkboxContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 5,
  },
});
