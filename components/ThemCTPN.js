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

export default function ThemPN ({navigation,route,props}) {  
  
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState([]);
  const {IDPN}=route.params;
  const[MaSanPham,setMaSanPham]=useState();
  const[ChuThich,setchuthich]=useState();
  const [SoLuong, setSoLuong] = useState();

  const [GiaNhap, setGiaNhap] = useState();

  
  const ThemPNhap = () => {
    console.log(IDPN, MaSanPham, SoLuong,ChuThich);

    if (!MaSanPham) {
      alert('Vui lòng nhập mã sản phẩm');
      return;
    }
    if (!SoLuong) {
      alert('Vui lòng nhập số lượng');
      return;
    }
    if (!ChuThich) {
      alert('Vui lòng nhập chú thích');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO ChiTietPhieuNhap (MaPhieuNhap, MaSanPham, GiaNhap, SoLuong,ChuThich) VALUES (?,?,?,?,?)',
        [IDPN, MaSanPham,GiaNhap, SoLuong,ChuThich],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Thành công',
              'Bạn đã thêm thành công',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('CTPN',[{IDPhieuNhap}]),
                },
              ],
              {cancelable: false},
            );
            
          } else alert('Thêm thất bại!!!');
        },
      );
    });
  };
   
    
    return (
      <ImageBackground

        source={require('../images/background2.png')}
        style={styles.image}>

        <View style={styles.container}>
          <Text style={styles.txtNhanVien}>
          <TouchableOpacity style={styles.btnIcon}
          onPress={() => {navigation.navigate('QLPN')}}
            >
            <ImageBackground
              style={styles.iconBack}
              source={require('../images/Back.png')}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIconNV} >
             <ImageBackground
              style={styles.iconNV}
               source={require('../images/qlhn.png')}></ImageBackground>
          </TouchableOpacity> Thêm Chi Tiết PN</Text>


          
        

        <View >
        <SafeAreaView>
        <Text style={{color:'white',marginBottom:3,marginTop:10,marginLeft:10}}>Mã Sản Phẩm</Text>
                <TextInput

                  style={styles.textInput}
                  
                  placeholder="Nhập mã sản phẩm"
                  placeholderTextColor="gray"
                  keyboardType = 'numeric'
                  onChangeText={(MaSanPham) => setMaSanPham(MaSanPham)}
                  
                />
                <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Số lượng</Text>
                <TextInput

                  style={styles.textInput}
                  
                  placeholder="Nhập số lượng"
                  keyboardType = 'numeric'
                  placeholderTextColor="gray"
                  onChangeText={(SoLuong) => setSoLuong(SoLuong)}
                  
                />
                <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Giá Nhập</Text>
                <TextInput

                  style={styles.textInput}
                  
                  placeholder="Nhập giá nhập"
                  keyboardType = 'numeric'
                  placeholderTextColor="gray"
                  onChangeText={(SoLuong) => setSoLuong(SoLuong)}
                  
                />
                
                
                <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Chú Thích</Text>

                <TextInput
                  style={styles.textInput}
                  placeholder="Nhập chú thích"
                  placeholderTextColor="gray"
                  onChangeText={(ChuThich) => setchuthich(ChuThich)}
                  
                  
                />
                   
                  
                   </SafeAreaView>   
           </View>
                  
           <TouchableOpacity
                  style={styles.btnthem}
                  onPress={()=>{ThemPNhap()}}
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
