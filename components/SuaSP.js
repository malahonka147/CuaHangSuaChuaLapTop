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
var SQLite=require('react-native-sqlite-storage') 
var db = SQLite.openDatabase({name: "Database.db", createFromLocation : '~Database.db'});

export default function SuaSP ({navigation,route,props}) {  
  const [date, setDate] = useState(new Date())
  const[NhaPhanPhoi,setnhaphanphoi]=useState();
  
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState([]);
   
  const{ID,tenSanPham,loaiSanPham,hangSanXuat,giaBan,tonKho,trangThai,chuThich}=route.params;

  const[TenSanPham, setTenSanPham] = useState(tenSanPham)

  const[LoaiSanPham,setLoaiSanPham]=useState(loaiSanPham);
  const[HangSanXuat,setHangSanXuat]=useState(hangSanXuat);
  const[GiaBan,setGiaBan]=useState(giaBan);

  const[TonKho,setTonKho]=useState(tonKho);
  const[TrangThai,setTrangThai]=useState(trangThai);
  const[ChuThich,setChuThich]=useState(chuThich);
  ID
    const CapNhatSP=()=>{

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
            'Update SanPham set TenSanPham=?, LoaiSanPham=?, HangSanXuat=?, GiaBan=?,TonKho=?,TrangThai=?,ChuThich=?   where MaSanPham=?',
            [TenSanPham,LoaiSanPham, HangSanXuat,GiaBan,TonKho,TrangThai,ChuThich,ID],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                 
                Alert.alert(
                  'Thành công'
                  
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
                      onPress={() => {navigation.navigate('CTSP')}}>


                   </TouchableOpacity>
                   </ImageBackground>
                   <View style={styles.contenthead}>
                  <Text style={styles.txtcontenthead}> Sửa sản phẩm</Text>
                  </View>
        </View>
        <View style={styles.content}>
                <View style={styles.txtTT}>
                    <Text style={styles.txtContent2}> Tên SP:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào tên sản phẩm"
                    placeholderTextColor="gray"
                    onChangeText={(TenSanPham) => setTenSanPham(TenSanPham)}
                    defaultValue={tenSanPham}
                    
                    />
                    <Text style={styles.txtContent2}> Loại Sản Phẩm:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào loại sản phẩm"
                    placeholderTextColor="gray"
                    onChangeText={(LoaiSanPham) => setLoaiSanPham(LoaiSanPham)}
                    defaultValue={loaiSanPham}
                   
                    />
                    <Text style={styles.txtContent2}> Hãng Sản Xuất:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào hảng sản xuất"
                    placeholderTextColor="gray"
                    onChangeText={(HangSanXuat) => setHangSanXuat(HangSanXuat)}
                    defaultValue={hangSanXuat}
                   
                    />
                    <Text style={styles.txtContent2}> Giá bán:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào số giá bán"
                    placeholderTextColor="gray"
                    onChangeText={(GiaBan) => setGiaBan(GiaBan)}
                    
                    defaultValue={giaBan}
                    
                    />
                    <Text style={styles.txtContent2}> TonKho:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào tồn kho"
                    placeholderTextColor="gray"
                    onChangeText={(TonKho) => setTonKho(TonKho)}
                    defaultValue={tonKho}
                    
                    />
                    <Text style={styles.txtContent2}> Trạng Thái:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào trạng thái"
                    placeholderTextColor="gray"
                    onChangeText={(TrangThai) => setTrangThai(TrangThai)}
                    defaultValue={trangThai}
                    />
                    <Text style={styles.txtContent2}> Ghi Chú:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào ghi chú"
                    placeholderTextColor="gray"
                    onChangeText={(ChuThich) => setChuThich(ChuThich)}
                    defaultValue={chuThich}
                    />
                </View>
        </View>
        <TouchableOpacity
                  style={styles.btnthem}
                  onPress={()=>{CapNhatSP()}}
                  >
                  <Text style={styles.txtdn}>Cập nhật</Text>
                </TouchableOpacity>

          
      </ImageBackground>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontFamily: 'Roboto',
      alignItems: 'center',
        marginTop:30,
  
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
        fontSize:16,

      },
    content:{
      marginBottom:20,
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
      bottom:25
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