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

export default class Login extends React.Component {
  state = { user: '', email: '', password: '', repassword: '' };
  validate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    console.log("Email is Not Correct");
    this.setState({ email: text })
    return false;
  }
  else {
    this.setState({ email: text })
    console.log("Email is Correct");
  }
}
  render() {

    return (
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.containera}>
          <Text style={styles.txtlogin}>ĐĂNG KÝ</Text>
          <Text style={styles.txth2}>Let’s Learn More About App</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Tài khoản"
            placeholderTextColor="white"
            onChangeText={(user) => this.setState({ user })}
            value={this.state.user}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="white"
            autoCorrect={false}
            onChangeText={(email) => this.setState({ email })}
            value={ this.state.email }
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            placeholder="Mật khẩu"
            placeholderTextColor="white"
            autoCorrect={false}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            placeholder="Nhập lại Mật khẩu"
            placeholderTextColor="white"
            onChangeText={(repassword) => this.setState({ repassword })}
            value={this.state.repassword}
          />
          <TouchableOpacity
            style={styles.btnlogin}
            onPress={() => {
              var login = this.state.user;
              var pass = this.state.password;
              var repass = this.state.repassword;
              var email = this.state.email;
              if (pass == repass) {
                Alert.alert('Đăng ký thành công');
                this.props.navigation.navigate('SignIn');
              } else {
                Alert.alert('Không thành công');
              }
            }}>
            <Text style={styles.txtdn}>Đăng Ký</Text>
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
  containera:{
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
