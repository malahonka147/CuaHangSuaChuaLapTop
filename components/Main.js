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
  CheckBox,
  Icon,
  ToastAndroid,
} from 'react-native';
import { useState,useEffect } from 'react';
var SQLite=require('react-native-sqlite-storage') 
var db = SQLite.openDatabase({name: "Database.db", createFromLocation : '~Database.db'});
export default function Main ({navigation,route}) {
  
  const ID=route.params?.ID;
  const Loai=route.params?.Loai;
  const [tenNV,settenNV]=useState();
  useEffect(() => {
    
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM NhanVien where MaNhanVien=?',
        [ID],
        (tx, results) => {
          settenNV(results.rows.item(0).TenNhanVien)
 
        }
      );
 
    });
  }, []);
  const[tenNhanVien,settenNhanVien]=useState('Admin');
  
 const OnPressQLNV=()=>{
   if(Loai!=1)
   {
     alert("Bạn không được phép vào mục này!!!");
   }else{
    navigation.navigate("QLNV");
   }
 }
    return (
      <ImageBackground
        source={require('../images/home.png')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.header}>

            <Text style={styles.txth1}>Xin chào {tenNV}</Text>
            <Text style={styles.txth2}>Let’s Learn More About App</Text>
            
            <View style={{
              top:10,
              width:100,
              height:100,
              left:400
            }}>
            <TouchableOpacity style={styles.logout}
          onPress={() => {navigation.navigate('SignIn')}}>
            <ImageBackground
              style={styles.icondx}
              source={require('../images/logout.png')}></ImageBackground>
            <Text style={styles.txth3}>Đăng xuất</Text>
          </TouchableOpacity>
            </View>
            
            
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
          onPress={() =>OnPressQLNV()}>
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
    height:100,
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
  icondx:{
    width:30,
    height: 30,
    alignSelf: 'center',
    marginVertical: 5,
    left:50,
    top:15
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
    fontSize: 25,
    color: 'white',
    lineHeight: 30,
    marginLeft:10,
  },
  txth3:{
    textAlign: 'right',
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    bottom:20,
    right:30
    

  },
  txth2: {
    fontSize: 16,
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
  logout:{
    bottom:120,
    width:120,
    height:40,
    right:45

  },
  box: {
    width: 130,
    height: 110,
    margin:15,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 14,
  },
});
