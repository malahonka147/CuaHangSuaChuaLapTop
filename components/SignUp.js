
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
  ToastAndroid,
} from 'react-native';
var SQLite=require('react-native-sqlite-storage') 
var db = SQLite.openDatabase({name: "Database.db", createFromLocation : '~Database.db'});
export default function SignUp ({navigation,route}) {
  
  const [user,setuser]=useState('');
  const [password,setpassword]=useState('');
  const [maNV,setmaNV]=useState('');
  const [repassword,setrepassword]=useState('');
  const DangKyTK=()=>{
    if (!user) {
      alert('Vui lòng nhập tên tài khoản');
      return;
    }
    if (!password) {
      alert('Vui lòng nhập mật khẩu');
      return;
    }
    if (!maNV) {
      alert('Vui lòng nhập mã nhân viên');
      return;
    }
    if (!repassword) {
      alert('Vui lòng nhập lại mật khẩu');
      return;
    }
    if (repassword!=password) {
      alert('Nhập lai mật khẩu không khớp');
      return;
    }
    db.transaction((tx)=>{
      
      sql='select * from NhanVien where MaNhanVien=\''+maNV+'\'';
      
      tx.executeSql(sql,[],(tx,results)=>{
        var len=results.rows.length;
        
        if(len==0){
          ToastAndroid.show("Mã nhân viên không tồn tại",ToastAndroid.SHORT);
        }
        else{
          
          db.transaction((tx)=>{
      
            sql='select * from User where MaNhanVien=\''+maNV+'\'';
            tx.executeSql(sql,[],(tx,results)=>{
              var len=results.rows.length;
              
              if(len>0){
                ToastAndroid.show("Nhân viên này đã tạo tài khoản",ToastAndroid.SHORT);
              }
              else{
                  db.transaction((tx)=>{
                    tx.executeSql("INSERT INTO User (MaNhanVien,TenDangNhap, Password, Quyen) VALUES (?,?,?,?)",
                    [maNV,user,password,2],(tx,results)=>{
                      console.log('Results', results.rowsAffected);
                      if (results.rowsAffected > 0) {
                        
                        Alert.alert(
                          'Đăng ký thành công'
                          
                        );
                        navigation.navigate('SignIn');
                      } else alert('Đăng ký thất bại');
                    });
                  });
              }
            });
          });
        }
      });
    });
  }
    return (
      <ImageBackground
        source={require('../images/background.png')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.containera}>
          <Text style={styles.txtlogin}>ĐĂNG KÝ</Text>
          <Text style={styles.txth2}>Let’s Learn More About App</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Tài khoản"
            placeholderTextColor="white"
            onChangeText={(user) => setuser( user )}
            defaultValue={user}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Mã nhân viên"
            placeholderTextColor="white"
            autoCorrect={false}
            onChangeText={(maNV) => setmaNV( maNV )}
            defaultValue={maNV}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            placeholder="Mật khẩu"
            placeholderTextColor="white"
            autoCorrect={false}
            onChangeText={(password) => setpassword( password )}
            defaultValue={password}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            placeholder="Nhập lại Mật khẩu"
            placeholderTextColor="white"
            onChangeText={(repassword) => setrepassword(repassword )}
            defaultValue={repassword}
          />
          <TouchableOpacity
            style={styles.btnlogin}
            onPress={()=>{
              
               DangKyTK()
            }}
            >
            <Text style={styles.txtdn}>Đăng Ký</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'white', fontWeight: '700' }}>
              Đã có tài khoản?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
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
