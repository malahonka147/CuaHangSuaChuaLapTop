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
  ToastAndroid,
  SafeAreaView,
  FlatList,
  ScrollView,

} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState,useEffect } from 'react';
//import ImagePicker from 'react-native-image-picker';
//import RNFetchBlob from 'rn-fetch-blob';
var SQLite=require('react-native-sqlite-storage') 
var db = SQLite.openDatabase({name: "Database.db", createFromLocation : '~Database.db'});

export default function ThemSP ({navigation,route,props}) 
{  
  const [tenSanPham, setTenSanPham] = useState([])
  const[loaiSanPham,setLoaiSanPham]=useState([]);
  const[hangSanXuat,setHangSanXuat]=useState([]);
  const[giaNhap,setGiaNhap]=useState([]);
  const[giaBan,setGiaBan]=useState([]);
  const[tonKho,setTonKho]=useState([]);
  const[trangThai,setTrangThai]=useState([]);
  const[chuThich,setChuThich]=useState('');
  const isRender=()=>{
    return true;
  }

   const ThemSP=()=>{
   
        if (!tenSanPham) {
            alert('Vui lòng nhập tên sản phẩm');
            return;
          }
          if (!loaiSanPham) {
            alert('Vui lòng nhập loại sản phẩm');
            return;
          }
          if (!hangSanXuat) {
            alert('Vui lòng nhập hãng sản xuất');
            return;
          }
          if (!giaNhap) {
            alert('Vui lòng nhập giá nhập');
            return;
          }
          if (!giaBan) {
            alert('Vui lòng nhập giá bán');
            return;
          }
          if (!tonKho) {
            alert('Vui lòng nhập tồn kho');
            return;
          }
          if (!trangThai) {
            alert('Vui lòng nhập trạng thái');
            return;
          }
          db.transaction(function (tx) {
            
            tx.executeSql(
              'INSERT INTO SanPham (TenSanPham,LoaiSanPham, HangSanXuat, GiaNhap,GiaBan,TonKho,TrangThai,ChuThich) VALUES (?,?,?,?,?,?,?,?)',
              [tenSanPham,loaiSanPham, hangSanXuat, giaNhap,giaBan,tonKho,trangThai,chuThich],
              (tx, results) => {
             
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                   
                  Alert.alert(
                    'Thành công',
                    'Bạn đã thêm thành công',
                    [
                      {
                        text: 'Ok',
                        onPress: () => navigation.navigate('QLSP'),
                      },
                    ],
                    {cancelable: false},
                  );
                  navigation.navigate('QLSP');
                } else alert('Thêm thất bại');
              }
            );
          });
        
        
    }
      
    return (
      <ImageBackground

        source={require('../images/background2.png')}
        style={styles.image}>

        <View style={styles.container}>
                <ImageBackground
                 style={styles.icon }
                                source={require('../images/Back.png')}>
                   <TouchableOpacity style={styles.btnIcon}
                      onPress={() => {navigation.navigate('QLSP')}}>


                   </TouchableOpacity>
                   </ImageBackground>
                   <View style={styles.contenthead}>
                  <Text style={styles.txtcontenthead}> Thêm sản phẩm</Text>
                  </View>
        </View>
       
        <ScrollView style={styles.content}>
                <View style={styles.txtTT}>
                    <Text style={styles.txtContent2}> Tên Sản Phẩm:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào tên sản phẩm"
                    placeholderTextColor="gray"
                    onChangeText={(tenSanPham) => setTenSanPham(tenSanPham)}
      
                    />
                    <Text style={styles.txtContent2}> Loại Sản Phẩmh:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào loại sản phẩm"
                    placeholderTextColor="gray"
                    onChangeText={(loaiSanPham) => setLoaiSanPham(loaiSanPham)}
                   
                    />
                    <Text style={styles.txtContent2}> Hãng Sản Xuất:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào hãng sản xuất"
                    placeholderTextColor="gray"
                    onChangeText={(hangSanXuat) => setHangSanXuat(hangSanXuat)}
                   
                    />
                    <Text style={styles.txtContent2}> Giá Nhập:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào giá nhập"
                    placeholderTextColor="gray"
                    onChangeText={(giaNhap) => setGiaNhap(giaNhap)}
                    
                    />
                    <Text style={styles.txtContent2}> Giá Bán:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào giá bán"
                    placeholderTextColor="gray"
                    onChangeText={(giaBan) => setGiaBan(giaBan)}
                    
                    />
                    <Text style={styles.txtContent2}> Tồn Kho:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào số lượng tồn"
                    placeholderTextColor="gray"
                    onChangeText={(tonKho) => setTonKho(tonKho)}
                    
                    />
                    <Text style={styles.txtContent2}> Trạng Thái:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào trạng thái"
                    placeholderTextColor="gray"
                    onChangeText={(trangThai) => setTrangThai(trangThai)}
                    
                    />                 
                    <Text style={styles.txtContent2}> Chú Thích:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào chú thích"
                    placeholderTextColor="gray"
                    onChangeText={(chuThich) => setChuThich(chuThich)}
                    
                    />
                </View>
        </ScrollView>
      
        <TouchableOpacity
          style={styles.btnthem}
          onPress={()=>{ThemSP()}}>
         <Text style={styles.txtdn}>Thêm</Text>
        </TouchableOpacity>

          
      </ImageBackground>

    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontFamily: 'Roboto',
      alignItems: 'center',
      top:30
  
    },
    btnthem: {
        backgroundColor: '#0269FC',
        borderRadius: 23,
        width: '90%',
        marginBottom: 5,
        height: 52,
        left:20,
      },
    textInput: {
        height: 54,
        width: 450,
        left:10,
        borderColor: '#00A2C3',
        color: 'black',
        backgroundColor: 'white',
        borderWidth: 1.7,
        borderRadius: 23,
        marginBottom:10,
        fontSize:16
      },
    content:{
      marginBottom:100,
      height: 550,
      marginTop:150,

    },
    image: {
      flex: 1,
    },
    icon: {
      width: 45,
      height: 30,
      alignSelf: 'center',
      marginVertical: -5,
      right:200,
      marginTop:10,
    },
  
    btnIcon: {
      paddingTop:20,
      width: 45,
      height: 40,
      marginTop:3,
    },
    txtUser:{
      fontSize: 30,
      color: 'white',
      fontWeight: '700',
      marginTop: 25,
      marginLeft:5,
    },
    iconDiaChi:{
      width: 20,
      height: 20,
      alignItems: 'center',
      marginRight:8,
      marginTop: 10,
    },
    txtDiaChi:{
      fontSize: 18,
      color: 'white',
  
    },
    txtContent: {
      color: '#002D69',
      fontSize: 16,
      fontWeight: 'bold',
      textAlignVertical: 'center',
      margin: 19,
  
    },
    content2:{
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginBottom:20,
    },
    txtTT:{
      justifyContent: 'flex-start',
    },
    content3:{
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginBottom:300,
    },
    contentmid:{
      flexDirection: 'row',
    },
    txtContent2:{
      fontSize: 18,
      color: 'white',
      marginRight:100,
      marginBottom:10,
      marginLeft:10,
      
    },
    
    txtContent2Change:{
      fontSize: 18,
      color: 'white',
      marginRight:5,
  
    },
    iconNext:{
      width: 30,
      height: 30,
    },
    contenthead:{
      right:90,
      bottom:25,
    },
    txtcontenthead:{
      fontSize: 25,
      color: 'white',
      marginLeft:10,
      fontWeight: 'bold',
  
    },
    btnlogin: {
      backgroundColor: '#0269FC',
      borderRadius: 5,
      width: '90%',
      marginBottom: 20,
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
    txtcontentfooter:{
      fontSize: 20,
      color: 'white',
      marginLeft:10,
      fontWeight: 'bold',
    },
      btnBack:{
     fontSize: 30,
         color: 'white',
         fontWeight: '700',
         marginBottom: 130,
         marginTop: 25,
         paddingRight:100}
  });