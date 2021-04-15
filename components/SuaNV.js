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
                  <Text style={styles.txtcontenthead}> Thêm nhân viên</Text>
                  </View>
        </View>
        <View style={styles.content}>
                <View style={styles.txtTT}>
                    <Text style={styles.txtContent2}> Tên NV:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào tên nhân viên"
                    placeholderTextColor="gray"
                    onChangeText={(NhaPhanPhoi) => setnhaphanphoi(NhaPhanPhoi)}
                    defaultValue={NhaPhanPhoi}
                    />
                    <Text style={styles.txtContent2}> Giới Tính:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào giới tính"
                    placeholderTextColor="gray"
                    onChangeText={(NhaPhanPhoi) => setnhaphanphoi(NhaPhanPhoi)}
                    defaultValue={NhaPhanPhoi}
                    />
                    <Text style={styles.txtContent2}> Số điện thoại:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào số điện thoại"
                    placeholderTextColor="gray"
                    onChangeText={(NhaPhanPhoi) => setnhaphanphoi(NhaPhanPhoi)}
                    defaultValue={NhaPhanPhoi}
                    />
                    <Text style={styles.txtContent2}> Địa Chỉ:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào địa chỉ"
                    placeholderTextColor="gray"
                    onChangeText={(NhaPhanPhoi) => setnhaphanphoi(NhaPhanPhoi)}
                    defaultValue={NhaPhanPhoi}
                    />
                    <Text style={styles.txtContent2}> Ghi Chú:</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nhập vào ghi chú"
                    placeholderTextColor="gray"
                    onChangeText={(NhaPhanPhoi) => setnhaphanphoi(NhaPhanPhoi)}
                    defaultValue={NhaPhanPhoi}
                    />
                </View>
        </View>
        <TouchableOpacity
                  style={styles.btnthem}
                  >
                  <Text style={styles.txtdn}>Sửa</Text>
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
      },
    content:{
      marginBottom:200,
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