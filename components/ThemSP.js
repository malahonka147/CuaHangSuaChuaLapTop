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
  DownDrop

} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState,useEffect } from 'react';
var SQLite=require('react-native-sqlite-storage') 
var db = SQLite.openDatabase({name: "Database.db", createFromLocation : '~Database.db'});

export default function ThemSP ({navigation,route,props}) {  
  const [TenSanPham, setTenSanPham] = useState()
  const[LoaiSanPham,setLoaiSanPham]=useState();
  const[HangSanXuat,setHangSanXuat]=useState();
  const[GiaNhap,setGiaNhap]=useState();
  const[GiaBan,setGiaBan]=useState();
  const[TonKho,setTonKho]=useState();
  const[TrangThai,setTrangThai]=useState();
  const[ChuThich,setChuThich]=useState();
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO SanPham(TenSanPham, LoaiSanPham, HangSanXuat,GiaNhap,GiaBan,TonKho,TrangThai,ChuThich ) VALUES (?,?,?,?,?,?,?,?)',
        [TenSanPham, LoaiSanPham, HangSanXuat,GiaNhap,GiaBan,TonKho,TrangThai,ChuThich],
        (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'You are Add Successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('QLSP'),
                  },
                ],
                { cancelable: false }
              );
            } else alert('Registration Failed');
          }
      );
 
    });
  }, []);
    return (
      <ImageBackground

        source={require('../images/background2.png')}
        style={styles.image}>

        <View style={styles.container}>
          <Text style={styles.txtNhanVien}>
          <TouchableOpacity style={styles.btnIcon}
          onPress={() => {navigation.navigate('QLSP')}}
            >
            <ImageBackground
              style={styles.iconBack}
              source={require('../images/Back.png')}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIconNV} >
             <ImageBackground
              style={styles.iconNV}
               source={require('../images/qlsp.png')}></ImageBackground>
          </TouchableOpacity> Thêm Sản Phẩm</Text>


          
        
<ScrollView>
        <View >
        <Text style={{color:'white',marginBottom:3,marginTop:10,marginLeft:10}}>Tên Sản Phẩm</Text>
                <TextInput

                  style={styles.textInput}
                  
                  placeholder="Nhập tên sản phẩm"
                  placeholderTextColor="gray"
                  onChangeText={(TenSanPham) => setTenSanPham(TenSanPham)}
                  defaultValue={TenSanPham}
                />
                <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Loại Sản Phẩm</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Chọn Loại Sản Phẩm"
                  placeholderTextColor="gray"
                  onChangeText={(LoaiSanPham) => setLoaiSanPham(LoaiSanPham)}
                  defaultValue={LoaiSanPham}
                  
                />
                <Text style={{color:'white',marginBottom:3,marginLeft:10}}>Hãng Sản Xuất</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Chọn Hãng Sản Xuất"
                  placeholderTextColor="gray"
                  onChangeText={(HangSanXuat) => setHangSanXuat(HangSanXuat)}
                  defaultValue={HangSanXuat}
                  
                />
                <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Giá Nhập</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Nhập giá nhập"
                  placeholderTextColor="gray"
                  onChangeText={(GiaNhap) => setGiaNhap(GiaNhap)}
                  defaultValue={GiaNhap}
                  
                />
                <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Giá Bán</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Nhập giá bán"
                  placeholderTextColor="gray"
                  onChangeText={(GiaBan) => setGiaBan(GiaBan)}
                  defaultValue={GiaBan}
                  
                /> 
                 <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Tồn Kho</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Nhập số lượng tồn"
                  placeholderTextColor="gray"
                  onChangeText={(TonKho) => setTonKho(TonKho)}
                  defaultValue={TonKho}
                  
                />                  
                 <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Trạng Thái</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Nhập trạng thái"
                  placeholderTextColor="gray"
                  onChangeText={(TrangThai) => setTrangThai(TrangThai)}
                  defaultValue={TrangThai}
                  
                /> 
                 <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Chú Thích</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Nhập chú thích "
                  placeholderTextColor="gray"
                  onChangeText={(ChuThich) => setChuThich(ChuThich)}
                  defaultValue={ChuThich}
                  
                /> 
                                      
           </View>
           </ScrollView>          
        
         
        
           <TouchableOpacity
                  style={styles.btnthem}
                  
                  onPress={() => {useEffect}}
                  >
                     
                  <Text style={styles.txtdn}>Thêm</Text>
                </TouchableOpacity>


          </View>
          
      </ImageBackground>

    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
    alignItems: 'center',

  },
  header: {
        backgroundColor: '#BED0EC',
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
        width:450,
        marginTop:9
      },
      headerText:{
        color: '#002D69',
        fontSize: 25,
        fontWeight: 'bold',
        paddingRight:300
      },
  image: {
    flex: 1,
  },
  textInput: {
    height: 54,
    width: 450,
    marginTop: 8,
    paddingLeft: 10,
    borderColor: '#00A2C3',
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1.7,
    borderRadius: 23,
    marginBottom:10,
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: -5,
  },
  iconBack: {
    bottom:-20,
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: -5,
  },
  btnIcon: {
    width: 30,
    height: 30,
    marginTop:3,
  },
  btnlogin: {
    backgroundColor: '#2E1FDD',
    borderRadius: 23,
    width: '90%',
    marginTop: 10,
    marginBottom: 5,
    height: 52,
  },
  iconNV: {
      top:10,
      width: 45,
      height: 35,
      alignSelf: 'center',
      marginVertical: -5,

    },
    btnIconNV: {
      paddingTop:20,
      width: 50,
      height: 50,
      marginTop:3,
    },
  btnIconDel:{
    bottom:50,
    height: 40,
    width:30,
    marginLeft:380,
  },
  txtNhanVien: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    marginBottom: 130,
    marginTop: 25,
    paddingRight:80
  },
  btnNhanVien:{
    backgroundColor: 'white',
    width: '80%',
    marginTop: -0,
    marginBottom: -10,
    height: 59,
  },
  txtContent: {
    color: '#002D69',
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    margin: 2,
    left:10

  },
  Add:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BED0EC',
    padding: 1,
    top: 225,
    right:50,
    height: 55,
    width:'10%'
  },
  AddText:{
    color: '#002D69',
    fontSize: 30,
    fontWeight:'bold'
  },
  btnthem: {
    backgroundColor: '#0269FC',
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
