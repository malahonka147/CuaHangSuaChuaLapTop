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
  const [date, setDate] = useState(new Date())
  const[NhaPhanPhoi,setnhaphanphoi]=useState();
  
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState([]);
   
  const {ID,tenNhanVien,ngaySinh,gioiTinh,soDT,diaChi,ghiChu}=route.params;
  const [TenNhanVien, setTenNhanVien] = useState(tenNhanVien);
  const [NgaySinh, setNgaySinh] = useState(ngaySinh);
  const [SoDT, setSoDT] = useState(soDT);
  const [DiaChi, setDiaChi] = useState(diaChi);
  const [GioiTinh, setGioiTinh] = useState(gioiTinh);
  const [GhiChu, setGhiChu] = useState(ghiChu);
    useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT TenNhanVien,MaNhanVien FROM NhanVien',
          [],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push({label: results.rows.item(i).TenNhanVien, value: results.rows.item[i].MaNhanVien});
              console.log(label);
              console.log(value);
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
    const CapNhatNV=()=>{
      if (!tenNhanVien) {
          alert('Vui lòng nhập tên nhân viên');
          return;
        }
        if (!gioiTinh||(gioiTinh!='Nam'&&gioiTinh!='Nữ')) {
          alert('Vui lòng nhập giới tính bằng Nam hoặc Nữ');
          return;
        }
        if (!soDT) {
          alert('Vui lòng nhập số điện thoại');
          return;
        }
        if (!diaChi) {
          alert('Vui lòng nhập địa chỉ');
          return;
        }
        if (!ngaySinh) {
          alert('Vui lòng nhập địa chỉ');
          return;
        }
        
        db.transaction(function (tx) {
          
          tx.executeSql(
            'Update NhanVien set TenNhanVien=?, NgaySinh=?, GioiTinh=?, SoDT=?,DiaChi=?,GhiChu=?  where MaNhanVien=?',
            [TenNhanVien,NgaySinh, GioiTinh, SoDT,DiaChi,GhiChu,ID],
            (tx, results) => {
              ToastAndroid.show(""+TenNhanVien+NgaySinh+GioiTinh+SoDT+DiaChi+GhiChu,ToastAndroid.SHORT);
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                 
                Alert.alert(
                  'Thành công'
                  
                );
                navigation.navigate('QLNV');
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
                      onPress={() => {navigation.navigate('QLNV')}}>


                   </TouchableOpacity>
                   </ImageBackground>
                   <View style={styles.contenthead}>
                  <Text style={styles.txtcontenthead}> Sửa nhân viên</Text>
                  </View>
        </View>
        <View style={styles.content}>
                <View style={styles.txtTT}>
                    <Text style={styles.txtContent2}> Tên NV:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào tên nhân viên"
                    placeholderTextColor="gray"
                    onChangeText={(TenNhanVien) => setTenNhanVien(TenNhanVien)}
                    defaultValue={tenNhanVien}
                   
                    />
                    <Text style={styles.txtContent2}> Ngày Sinh:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào ngày sinh"
                    placeholderTextColor="gray"
                    onChangeText={(NgaySinh) => setNgaySinh(NgaySinh)}
                    defaultValue={ngaySinh}
                   
                    />
                    <Text style={styles.txtContent2}> Giới Tính:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào giới tính"
                    placeholderTextColor="gray"
                    onChangeText={(GioiTinh) => setGioiTinh(GioiTinh)}
                    defaultValue={gioiTinh}
                   
                    />
                    <Text style={styles.txtContent2}> Số điện thoại:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào số điện thoại"
                    placeholderTextColor="gray"
                    onChangeText={(So) => setSoDT(SoDT)}
                    defaultValue={soDT}
                    
                    />
                    <Text style={styles.txtContent2}> Địa Chỉ:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào địa chỉ"
                    placeholderTextColor="gray"
                    onChangeText={(DiaChi) => setDiaChi(DiaChi)}
                    defaultValue={diaChi}
                    
                    />
                    <Text style={styles.txtContent2}> Ghi Chú:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào ghi chú"
                    placeholderTextColor="gray"
                    onChangeText={(GhiChu) => setGhiChu(GhiChu)}
                    defaultValue={ghiChu}
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