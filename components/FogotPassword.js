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

export default class ForgotPassword extends React.Component {
  state = { user: '', email: '', password: '', repassword: '' };
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      this.setState({ email: text });
      return false;
    } else {
      this.setState({ email: text });
      console.log('Email is Correct');
    }
  };
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
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="white"
              autoCorrect={false}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
          </View>
          <View style={styles.containerb}>
            <TouchableOpacity
              style={styles.btnlogin}
              onPress={() => {
                this.props.navigation.navigate('ChangeNewPassword');
              }}>
              <Text style={styles.txtdn}>Gửi mã xác nhận</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontWeight: '700' }}>
                Đã có tài khoản?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('SignIn');
                }}>
                <Text
                  style={{ color: 'blue', fontWeight: 'bold', marginLeft: 15 }}>
                  ĐĂNG NHẬP
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
    fontWeight:'700' ,
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
    marginTop: 30,
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
