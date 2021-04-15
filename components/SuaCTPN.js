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

export default function SuaCTPN ({navigation,route,props}) {  

  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState([]);
  const {IDMaCTPN,IDMaPN,MaSP,SoLuong,GiaNhap,ChuThich}=route.params;
  const [maSP, setmaSP] = useState(MaSP);
  const [soLuong, setsoLuong] = useState(SoLuong);
  const [giaNhap, setgiaNhap] = useState(GiaNhap);
  const [chuThich, setchuThich] = useState(ChuThich);
  
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM ChiTietPhieuNhap',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));

          setItems({items: temp});
 
          if (results.rows.length >= 1) {
            setEmpty(false);
          } else {
            setEmpty(true)
          }
          
 
        }
      );
 
    });
  }, []);
  const CapNhatNV = () => {
    

    if (!maSP) {
      alert('Vui lòng nhập mã sản phẩm');
      return;
    }
    if (!soLuong) {
      alert('Vui lòng nhập số lượng');
      return;
    }
    if (!giaNhap) {
      alert('Vui lòng nhập giá nhập');
      return;
    }
    if (!chuThich) {
      alert('Vui lòng nhập chú thích');
      return;
    }
    db.transaction(function (tx) {
          
      tx.executeSql(
        'Update ChiTietPhieuNhap set MaSanPham=?, SoLuong=?, GiaNhap=?, ChuThich=?  where MaCTPN=?',
        [maSP,soLuong, giaNhap, chuThich,IDMaCTPN],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
             
            Alert.alert(
              'Thành công'
              
            );
            navigation.navigate('QLPN');
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
                  onPress={() => {navigation.navigate('QLPN')}}>


               </TouchableOpacity>
               </ImageBackground>
               <View style={styles.contenthead}>
              <Text style={styles.txtcontenthead}> Sửa Thông Tin CTPN</Text>
              </View>
    </View>
    <View style={styles.content}>
            <View style={styles.txtTT}>
                <Text style={styles.txtContent2}> Mã Sản Phẩm:</Text>
                <TextInput
                style={styles.textInput}
                placeholder="Nhập vào mã sản phẩm"
                placeholderTextColor="gray"
                onChangeText={(maSP) => setmaSP(maSP)}
                
               
                />
                <Text style={styles.txtContent2}> Số Lượng:</Text>
                <TextInput
                style={styles.textInput}
                placeholder="Nhập vào số lượng"
                placeholderTextColor="gray"
                onChangeText={(soLuong) => setsoLuong(soLuong)}
                
               
                />
                <Text style={styles.txtContent2}> Giá Nhập:</Text>
                <TextInput
                style={styles.textInput}
                placeholder="Nhập vào giá nhập"
                placeholderTextColor="gray"
                onChangeText={(giaNhap) => setgiaNhap(giaNhap)}
                
               
                />
                
                <Text style={styles.txtContent2}> Chú Thích:</Text>
                <TextInput
                style={styles.textInput}
                placeholder="Nhập vào chú thích"
                placeholderTextColor="gray"
                onChangeText={(chuThich) => setchuThich(chuThich)}
                
                />
            </View>
    </View>
    <TouchableOpacity
              style={styles.btnthem}
              onPress={()=>{CapNhatNV()}}
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
  top:30

},
btnthem: {
    backgroundColor: '#0269FC',
    borderRadius: 23,
    width: '90%',
    marginBottom: 150,
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
  marginBottom:100,
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